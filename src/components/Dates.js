import React, { useEffect, useState } from 'react'

function Dates({ date, index, firstDate, lastDate, selectedMonth, selectedYear, today, input, setInput}) {
  let [differentMonth, setDifferentMonth] = useState(false)
  let [isToday, setIsToday] = useState(false)
  let [content, setContent] = useState([])

  let isPrev = index < firstDate;
  let isNext = index > lastDate;

  useEffect(() => {
    if (isPrev || isNext) {
      setDifferentMonth(true);
    }

    if (
      selectedYear == today.year &&
      selectedMonth == today.month &&
      date == today.date) {
      setIsToday(true)
    }

    let matchingInputs = input.filter((item) => {
      const [itemYear, itemMonth, itemDate] = item.deadline.split('-')
      if (!isPrev && !isNext) {
        return (
          Number(itemYear) == selectedYear &&
          Number(itemMonth) == selectedMonth &&
          Number(itemDate) == date
        )
      } else if (isPrev && selectedMonth == 1) {
        return (
          Number(itemYear) == selectedYear - 1 &&
          Number(itemMonth) == 12 &&
          Number(itemDate) == date
        )
      } else if (isNext && selectedMonth == 12) {
        return (
          Number(itemYear) == selectedYear + 1 &&
          Number(itemMonth) == 1 &&
          Number(itemDate) == date
        )
      } else if (isPrev){
        return (
          Number(itemYear) == selectedYear &&
          Number(itemMonth) == selectedMonth - 1 &&
          Number(itemDate) == date
        )
      } else if (isNext){
        return (
          Number(itemYear) == selectedYear &&
          Number(itemMonth) == selectedMonth + 1 &&
          Number(itemDate) == date
        ) 
      }
    }) 
    
    if (matchingInputs.length > 0) {
      const contents = matchingInputs
      setContent(contents);
    } else {
      setContent([]);
    }
    
    return (() => {
      setDifferentMonth('')
      setIsToday('')
    })
  }, [selectedMonth, selectedYear, input])

  function handleDelete(id) {
    setInput((prevInput) => prevInput.filter((item) => item.id !== id));
  }
  
  return (
    <div className="date-wrapper">
      <div className="c"></div>

      {isToday && <div className="is-today"></div>}
      <div
        className="date"
        style={{
          color: isToday ? "white" : differentMonth ? "grey" : null,
          fontWeight: isToday ? 600 : null,
        }}
      >
        {date}
      </div>

      {content.length > 0 && (
        <div>
          {content.slice(0, 2).map((item) => (
            <div className="schedule" key={item.id}>
              <span>{item.company}</span>
              <button
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                x
              </button>
            </div>
          ))}
          {content.length > 2 && (
            <div className="schedule" style={{background: 'transparent'}}>
              <span>...외 {content.length - 2}개</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Dates