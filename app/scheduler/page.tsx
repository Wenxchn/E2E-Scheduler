import { createClient } from '@/utils/supabase/server'
import { Button } from '@/components/ui/button'
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  CircleX,
  List,
  Plus,
} from 'lucide-react'
import WeekPicker from '@/components/weekpicker/weekpicker'
import ScheduleTestButton from '@/components/scheduleTestButton/scheduleTestButton'

export default async function Countries() {
  const supabase = await createClient()
  const { data: testSuites } = await supabase.from('Test Suites').select()

  return (
    <div className="flex w-[1440px] h-[1024px] text-black">
      <div className="bg-warmGray w-[300px] h-[1024px] p-2 border-r border-warmGray-150"></div>
      <div className="bg-white w-[1140px] h-[1024px] h-auto">
        <div className="flex-grow h-[64px] border-b-[1px] border-warmGray-200"></div>
        <div className="h-[960px] pt-6 pr-9 pb-6 pl-9 gap-4">
          <div className="h-[36px] gap-[12px] mb-[16px]">
            <h2 className="text-warmGray-1100 font-semibold text-[30px] leading-[36px]">
              Scheduled Suites
            </h2>
          </div>
          <div className="h-[36px] flex justify-between mb-[16px]">
            <div className="flex w-[398px] h-[36px] gap-[4px]">
              <ScheduleTestButton />
              <Button className="bg-white text-black border-[1px] border-warmGray-200 hover:bg-warmGray-200 text-[14px] rounded-[8px] p-[10px] w-[240px] h-[36px] justify-between">
                <ChevronLeft />
                <p className="text-[16px]">Week of 10/09/24</p>
                <ChevronRight />
              </Button>
            </div>
            <div className="bg-warmGray-150 rounded-[8px]">
              <Button className="bg-warmGray-150 w-[36px] h-[36px] hover:bg-warmGray py-2 px-3 rounded-[8px]">
                <List color="black" />
              </Button>
              <Button className="bg-white border-[1px] border-warmGray-200 hover:bg-warmGray w-[36px] h-[36px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] gap-4 rounded-[8px]">
                <CalendarDays color="black" />
              </Button>
            </div>
          </div>
          <div>
            <WeekPicker />
          </div>
        </div>
      </div>
    </div>
  )
}
