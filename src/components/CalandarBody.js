import React from 'react'
import Dates from './Dates'
import Days from './Days'



function CalandarBody({ weekdays, selectedYear, selectedMonth, getDates, today }) {
  let firstDate = getDates.indexOf(1)
  let lastDate = getDates.indexOf(new Date(selectedYear, selectedMonth, 0).getDate(), 7);

  


  
  return (
    <div className="body">
      <Days weekdays={weekdays} />

      <div className="dates">
        {getDates.map((date, index) => {
          return (
            <Dates
              key={index}
              index={index}
              date={date}
              selectedYear={selectedYear}
              selectedMonth={selectedMonth}
              firstDate={firstDate}
              lastDate={lastDate}
              today={today}
              
            />
          )
        })}
      </div>

    </div>
  );
}

export default CalandarBody