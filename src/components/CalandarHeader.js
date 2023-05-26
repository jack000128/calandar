import React from 'react'

function CalandarHeader({ today, selectedYear, selectedMonth, setSelectedYear, setSelectedMonth, months }) {
  
  function goPrev() {
    if (selectedMonth == 1) {
      setSelectedYear(selectedYear - 1)
      setSelectedMonth(12)
      return
    }
    setSelectedMonth(selectedMonth - 1)
  }

  function goNext() {
    if (selectedMonth == 12) {
      setSelectedYear(selectedYear + 1);
      setSelectedMonth(1);
      return;
    }
    setSelectedMonth(selectedMonth + 1);
  }

  function goToday() {
    setSelectedYear(today.year)
    setSelectedMonth(today.month)
  }


  return (
    <div className="header">
      
      <div className='year-month-wrapper'>
        <span className='year'>{ selectedYear }</span>
        <span className='month'>{ months[selectedMonth - 1] }</span>
      </div>

      <div className='btn-wrapper'>
        <button className='nav prev' onClick={goPrev}>&lt;</button>
        <button className='nav today' onClick={goToday}>Today</button>
        <button className='nav next' onClick={goNext}>&gt;</button>
      </div>
    </div>
  );
}

export default CalandarHeader