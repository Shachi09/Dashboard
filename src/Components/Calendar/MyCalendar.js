import React from "react";
import './Calendar.css';
import Calendar from 'react-calendar';
import { useState } from "react";



const MyCalendar = () => {
  
    const [date, setDate] = useState(new Date())

    return (

        <>

            
            <div className="calendar-container">
                <Calendar onChange={setDate} value={date} />
            </div>
            <div></div>

        </>

    )
}

export default MyCalendar;