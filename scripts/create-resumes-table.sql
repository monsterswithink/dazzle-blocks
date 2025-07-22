-- Create the resumes table
CREATE TABLE IF NOT EXISTS resumes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  public_identifier TEXT UNIQUE NOT NULL,
  profile_data JSONB NOT NULL,
  theme_data JSONB NOT NULL,
  settings JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on public_identifier for fast lookups
CREATE INDEX IF NOT EXISTS idx_resumes_public_identifier ON resumes(public_identifier);

-- Enable Row Level Security (optional)
ALTER TABLE resumes ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to read resumes (since they're public)
CREATE POLICY "Anyone can view resumes" ON resumes FOR SELECT USING (true);

-- Create a policy for inserting/updating (you might want to restrict this based on auth)
CREATE POLICY "Anyone can insert resumes" ON resumes FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update resumes" ON resumes FOR UPDATE USING (true);
