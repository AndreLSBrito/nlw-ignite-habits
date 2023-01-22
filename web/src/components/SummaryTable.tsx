import { HabitDay } from "./HabitDay"
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-biginning"
import { useEffect, useState } from "react"
import { api } from "../lib/axios"
import dayjs from "dayjs"

const weekDay = ['D','S','T','Q','Q','S','S' ]

const SummaryDates = generateDatesFromYearBeginning()

const minimumSummaryDates = 18 * 7
const amountOfDaysToFill = minimumSummaryDates - SummaryDates.length

type summary= {
  id: string
  date: string
  amount: number
  completed: number
}[]

export function SummaryTable () {

  const [summary,setSummary] = useState<summary>([])

  useEffect(()=>{
    api.get('summary').then(response => {
      setSummary(response.data)
    })
  },[])

  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDay.map((weekDay, i) =>{
          return (
            <div 
              key={`${weekDay}-${i}`}
              className="text-zinc-400 text-xl h-10 font-bold w-10 flex items-center justify-center"
            >
              {weekDay}
            </div>
          )
        })}
      </div>

      <div
      className="grid grid-rows-7 grid-flow-col gap-3"
      >
        {summary.length > 0 && SummaryDates.map(date => {
          const dayInSummary = summary.find(day => {
            return dayjs(date).isSame(day.date, 'day')
          })

          return (
            <HabitDay 
            key={date.toString()}
            date={date}
            amount={dayInSummary?.amount} 
            defaultCompleted={dayInSummary?.completed} 
            />
          )
        })
        }

        {amountOfDaysToFill  >0 && Array.from({length: amountOfDaysToFill}).map((_,i) =>{ 
          return (
            <div 
            key={i}
            className='bg-zinc-900 w-10 h-10 border-2 border-zinc-800 rounded-lg  opacity-40 cursor-not-allowed'></div>
          )
        }
         
        )}
      </div>

    </div>



  )
} 