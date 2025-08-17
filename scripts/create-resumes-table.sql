CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS resume (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE resume ENABLE ROW LEVEL SECURITY;

-- Policy for users to view their own resume
CREATE POLICY "Users can view their own resume." ON resume
  FOR SELECT USING (auth.uid() = user_id);

-- Policy for users to insert their own resume
CREATE POLICY "Users can insert their own resume." ON resume
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Policy for users to update their own resume
CREATE POLICY "Users can update their own resume." ON resume
  FOR UPDATE USING (auth.uid() = user_id);

-- Policy for users to delete their own resume
CREATE POLICY "Users can delete their own resume." ON resume
  FOR DELETE USING (auth.uid() = user_id);
