import React, { useEffect, useState } from 'react'

function Dates({ date, index, firstDate, lastDate, selectedMonth, selectedYear, today}) {
  let [differentMonth, setDifferentMonth] = useState(false)
  let [isToday, setIsToday] = useState(false)

  useEffect(() => {
    if (index < firstDate || index > lastDate) {
      setDifferentMonth(true);
    } 
    if (
      selectedYear == today.year &&
      selectedMonth == today.month &&
      date == today.date) {
      setIsToday(true)
    }
    
    return (() => {
      setDifferentMonth('')
      setIsToday('')
    })
  }, [selectedMonth, selectedYear])

  
  return (
    <div className="date-wrapper">
      <div className={`date ${differentMonth ? "different-month" : null}` }>
        <div className="a" style={{color: isToday && !differentMonth ? 'white' : '#495057'}}>{date}</div>
        {isToday && !differentMonth ? <div className="is-today"></div> : null}
      </div>
    </div>
  );
}

export default Dates