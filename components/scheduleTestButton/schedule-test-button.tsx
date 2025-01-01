'use client'

import { Calendar, CircleX, Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { DialogClose } from '@radix-ui/react-dialog'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const ScheduleTestButton = () => {
  const [selectedTestSuiteName, setSelectedTestSuiteName] = useState('')
  const [selectedStartDate, setSelectedStartDate] = useState(new Date())
  const [selectedDaysOfWeek, setSelectedDaysOfWeek] = useState(0)

  const saveChanges = async () => {
    try {
      const supabase = createClient(supabaseUrl, supabaseAnonKey)
      const newRow = {
        created_at: new Date().toUTCString(),
        name: selectedTestSuiteName,
        selected_days_of_week: selectedDaysOfWeek,
        start_time: new Date().toUTCString(), // This line needs to be changed once the start time date picker is implemented
      }
      await supabase.from('Test Suites').insert(newRow)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSelectTestSuiteNameChange = (value: string) => {
    setSelectedTestSuiteName(value)
  }

  const handleSelectDaysOfWeekChange = (value: string[]) => {
    let calculatedDaysOfWeek = 0
    for (let i = 0; i < value.length; i++) {
      calculatedDaysOfWeek += parseInt(value[i])
    }
    setSelectedDaysOfWeek(calculatedDaysOfWeek)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="py-2 px-3 text-[14px] rounded-[8px] h-[36px]"
          variant={'coreBlue'}
        >
          <Plus />
          <h6 className="text-[14px] font-semibold">Schedule Test</h6>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white flex flex-col w-full h-fit text-warmGray-1100 sm:rounded-[20px] p-0">
        <DialogHeader className="flex w-full">
          <DialogTitle className="flex w-full h-fit justify-between gap-6 pt-4 px-4 pb-1">
            Schedule Detail
          </DialogTitle>
          <div className="flex flex-col w-full py-5 px-4 gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-[14px] font-semibold">Test Suite</h2>
              <Select onValueChange={handleSelectTestSuiteNameChange}>
                <SelectTrigger className="bg-white border-warmGray-200">
                  <SelectValue placeholder="Please select..." />
                </SelectTrigger>
                <SelectContent className="bg-white text-warmGray-1100">
                  <SelectItem value="Demo Suite">Demo Suite</SelectItem>
                  <SelectItem value="Authentication">Authentication</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="bg-warmGray flex w-full flex-col h-fit gap-5 py-4 px-5 rounded-xl">
              <div className="flex flex-col gap-2">
                <h6 className="text-[14px] font-semibold leading-[14px]">
                  Start Date and Time
                </h6>
                <Button
                  className="flex w-full justify-between text-warmGray-1100"
                  variant={'time'}
                >
                  <h6>Please select...</h6>
                  <Calendar />
                </Button>
              </div>
              <div className="flex justify-between gap-2">
                <h6 className="text-[14px] font-semibold leading-[14px]">
                  Run Weekly on Every
                </h6>
                <Button
                  className="text-warmGray-700 underline decoration-[#DED9D6] w-[105px] h-[14px] "
                  variant={'link'}
                >
                  <p className="font-normal text-[14px]">Custom Interval</p>
                </Button>
              </div>
              <ToggleGroup
                type="multiple"
                className="flex w-full bg-white rounded-[6px] justify-between gap-0"
                onValueChange={handleSelectDaysOfWeekChange}
              >
                <ToggleGroupItem
                  className="flex w-full border-[1px] py-2 px-3 border-warmGray-200 rounded-r-none data-[state=on]:bg-coreBlue data-[state=on]:text-white hover:bg-transparent hover:text-inherit"
                  value="1"
                >
                  Sun
                </ToggleGroupItem>
                <ToggleGroupItem
                  className="flex w-full border-[1px] py-2 px-3 border-warmGray-200 rounded-none data-[state=on]:bg-coreBlue data-[state=on]:text-white hover:bg-transparent hover:text-inherit"
                  value="2"
                >
                  Mon
                </ToggleGroupItem>
                <ToggleGroupItem
                  className="flex w-full border-[1px] py-2 px-3 border-warmGray-200 rounded-none data-[state=on]:bg-coreBlue data-[state=on]:text-white hover:bg-transparent hover:text-inherit"
                  value="4"
                >
                  Tue
                </ToggleGroupItem>
                <ToggleGroupItem
                  className="flex w-full border-[1px] py-2 px-3 border-warmGray-200 rounded-none data-[state=on]:bg-coreBlue data-[state=on]:text-white hover:bg-transparent hover:text-inherit"
                  value="8"
                >
                  Wed
                </ToggleGroupItem>
                <ToggleGroupItem
                  className="flex w-full border-[1px] py-2 px-3 border-warmGray-200 rounded-none data-[state=on]:bg-coreBlue data-[state=on]:text-white hover:bg-transparent hover:text-inherit"
                  value="16"
                >
                  Thu
                </ToggleGroupItem>
                <ToggleGroupItem
                  className="flex w-full border-[1px] py-2 px-3 border-warmGray-200 rounded-none data-[state=on]:bg-coreBlue data-[state=on]:text-white hover:bg-transparent hover:text-inherit"
                  value="32"
                >
                  Fri
                </ToggleGroupItem>
                <ToggleGroupItem
                  className="flex w-full border-[1px] py-2 px-3 border-warmGray-200 rounded-l-none data-[state=on]:bg-coreBlue data-[state=on]:text-white hover:bg-transparent hover:text-inherit"
                  value="64"
                >
                  Sat
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </DialogHeader>
        <div className="flex w-full justify-between gap-4 px-5 py-4 border-t-[1px] border-warmGray-200 ">
          <DialogClose asChild>
            <Button
              className="flex w-full h-[40px] border-[1px] border-warmGray-200 py-2 px-3 gap-2"
              variant={'destructiveRed'}
            >
              <CircleX /> Cancel Schedule
            </Button>
          </DialogClose>
          <Button
            className="flex w-full h-[40px] py-2 px-3 gap-2"
            variant={'coreBlue'}
            onClick={saveChanges}
          >
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ScheduleTestButton
