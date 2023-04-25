import React, { useState } from 'react'
import './Card.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion, MotionConfig } from 'framer-motion';



const Card = (props) => {

    
    return (
        <>

            <CompactCard param={props} />
            {/* {
                expanded? (
                    <MotionConfig.div layoutId='expand'/>
                ): 
                <CompactCard param={props}/>
                // 1-01-41
            } */}

        </>
    )
}



// Compact Card

function CompactCard({ param }) {

    return (
        <>
            <div className='CompactCard'
                style={{
                    background: param.color.backGround,
                    boxshadow: param.color.boxShadow
                }}
            >
                <div className='radialBar'>
                    <CircularProgressbar
                        value={param.barValue}
                        text={`${param.barValue}%`}
                    />
                    <span>{param.title}</span>

                </div>
                <div className='detail'>
                    <span>{param.value}</span>
                    <span>Last week</span>
                </div>
            </div>
        </>
    )
}




export default Card;