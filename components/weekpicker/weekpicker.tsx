'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function WeekPicker() {
  return (
    <>
      <Table className="pt-[20px]">
        <TableHeader>
          <TableRow className="bg-warmGray-150 hover:bg-warmGray-150">
            <TableHead className="">Sun</TableHead>
            <TableHead>Mon</TableHead>
            <TableHead>Tue</TableHead>
            <TableHead>Wed</TableHead>
            <TableHead>Thu</TableHead>
            <TableHead>Fri</TableHead>
            <TableHead>Sat</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow></TableRow>
        </TableBody>
      </Table>
    </>
  )
}
