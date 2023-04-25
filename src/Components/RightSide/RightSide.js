import React from "react";
import './RightSide.css';
import Calendar from "../Calendar/MyCalendar";

import { useState } from "react";


const RightSide = ()=>{

   const [date, setDate] = useState(new Date())

    return(
        <>
        <div className="RightSide">
            <div>
                <Calendar/>
            </div>
           
            <div>

            </div>

        </div>
        
        
        </>
    )
}


export default RightSide;