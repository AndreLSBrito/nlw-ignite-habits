import { HabitDay } from "./HabitDay"
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-biginning"

const weekDay = ['D','S','T','Q','Q','S','S' ]

const SummaryDates = generateDatesFromYearBeginning()

const minimumSummaryDates = 18 * 7
const amountOfDaysToFill = minimumSummaryDates - SummaryDates.length



export function SummaryTable () {
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
        {SummaryDates.map(date => {
          return (
            <HabitDay 
            key={date.toString()}
            amount={5} 
            completed={4} 
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