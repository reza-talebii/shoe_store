import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://vfzrbllceskidmbycxod.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmenJibGxjZXNraWRtYnljeG9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY5ODY1OTEsImV4cCI6MTk2MjU2MjU5MX0.3jqDIVgQK8sQebMX81DZ07OsFEnL9sSlwC6Nzg2mh6c"
);
