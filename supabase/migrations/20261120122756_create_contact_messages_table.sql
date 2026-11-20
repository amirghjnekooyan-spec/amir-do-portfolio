/*
# Create contact_messages table for the portfolio contact form

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email for reply
  - `subject` (text, nullable) — optional message subject
  - `message` (text, not null) — message body
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_messages`.
- Grant ONLY `INSERT` on allowed columns (name, email, subject, message) to `anon` and `authenticated` — visitors can send messages but can never read, update, or delete any message (not even their own) through the public site.
- No SELECT grant and no SELECT policy: messages are private to the site owner, readable only via the Supabase dashboard / service role.
- An INSERT-only policy with WITH CHECK (true) allows anyone to submit a message; spam/abuse is mitigated by field length limits in both the DB (CHECK constraints) and the form validation.

3. Notes
- No user_id / auth reference: this is a public portfolio contact form, single-tenant, no sign-in.
- Length constraints prevent oversized payloads.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 5 AND 200),
  subject text CHECK (char_length(subject) <= 150),
  message text NOT NULL CHECK (char_length(message) BETWEEN 10 AND 3000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT (name, email, subject, message) ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "anyone_can_send_message" ON contact_messages;
CREATE POLICY "anyone_can_send_message"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);
