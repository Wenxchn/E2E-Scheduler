import { createClient } from '@/utils/supabase/server'

export default async function Countries() {
  const supabase = await createClient()
  const { data: testSuites } = await supabase.from('Test Suites').select()
}
