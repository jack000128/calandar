import React from 'react'

function Days({weekdays}) {
  return (
    <div className='days'>
      {
        weekdays.map((weekday, index) => {
          return (
            <div key={index} className="day">{weekday}</div>
          )
        })
      }
      
    </div>
  )
}

export default Days