import { createClient } from '@/utils/supabase/server'
import { Button } from '@/components/ui/button'

export default async function Countries() {
  const supabase = await createClient()
  const { data: testSuites } = await supabase.from('Test Suites').select()

  return <div></div>
}
