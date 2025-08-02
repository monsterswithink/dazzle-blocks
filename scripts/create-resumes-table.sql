-- Create the 'resumes' table
CREATE TABLE IF NOT EXISTS resumes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    content JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create a trigger to update 'updated_at' on each row modification
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_resumes_updated_at
BEFORE UPDATE ON resumes
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Optional: Create an index on user_id for faster lookups
CREATE INDEX IF NOT EXISTS idx_resumes_user_id ON resumes (user_id);

-- Optional: Create a RLS policy to allow users to only access their own resumes
ALTER TABLE resumes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own resumes." ON resumes
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own resumes." ON resumes
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own resumes." ON resumes
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own resumes." ON resumes
  FOR DELETE USING (auth.uid() = user_id);
