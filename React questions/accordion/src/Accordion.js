import React from 'react'

const Accordion = ({item, toggleItem, selected}) => {
  return (
    <div className="acc-item" onClick={() => toggleItem(item.id)}>
        <div className="title" style={{cursor: "pointer"}}>
            {item.qn}
            <span>{selected === item.id ? '-' : '+'}</span>
            
        </div>
        <div className={selected === item.id ? "show-content" : "no-content"}>
            {item.an}
        </div>
    </div>
  )
}

export default Accordion
