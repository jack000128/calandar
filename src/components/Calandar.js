import React, { useState } from 'react'
import CalandarBody from './CalandarBody'
import CalandarHeader from './CalandarHeader'


function Calandar() {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate()
  }
  let [selectedYear, setSelectedYear] = useState(today.year);
  let [selectedMonth, setSelectedMonth] = useState(today.month);

  function getDates(year, month) {
    let prevLastDay = new Date(year, month - 1, 0).getDay();
    let prevLastDate = new Date(year, month - 1, 0).getDate();
    

    let thisLastDay = new Date(year, month, 0).getDay();
    let thisLastDate = new Date(year, month, 0).getDate();
    

    let prevDates = [];
    if (prevLastDay !== 6) {
      for (let i = 0; i <= prevLastDay; i++) {
        prevDates.unshift(prevLastDate - i);
      }
    }
    

    let thisDates = [];
    for (let i = 1; i <= thisLastDate; i++) {
      thisDates.push(i);
    }
    

    let nextDates = [];
    for (let i = 1; i < 7 - thisLastDay; i++) {
      nextDates.push(i);
    }
    

    let Dates = prevDates.concat(thisDates, nextDates);
    return Dates
  }



  return (
    <div className='container'>
      <CalandarHeader
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        setSelectedYear={setSelectedYear}
        setSelectedMonth={setSelectedMonth}
        months={months}
      />
      <CalandarBody
        weekdays={weekdays}
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        getDates={getDates(selectedYear, selectedMonth)}
        today={today}
        
      />
    </div>
  )
}

export default Calandar