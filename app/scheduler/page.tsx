import { createClient } from '@/utils/supabase/server'
import { Button } from '@/components/ui/button'

export default async function Countries() {
  const supabase = await createClient()
  const { data: testSuites } = await supabase.from('Test Suites').select()

  return (
    <div className="flex w-[1440px] h-[1024px]">
      <div className="bg-warmGray w-[300px] h-[1024px] p-2 border-r border-warmGray-150"></div>
      <div className="bg-white w-[1140px] h-[1024px] h-auto"></div>
    </div>
  )
}
