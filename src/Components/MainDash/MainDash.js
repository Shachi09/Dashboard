import React from 'react'
import './MainDash.css'
import Cards from '../Cards/Cards'
import {Table } from 'react-bootstrap';



const MainDash = () =>{

    return(
        <>
          
         <div className='MainDash'>
            <h1>Dashboard</h1>
            <Cards/>
         </div> 
         
        
        </>
    )
}

export default MainDash;
