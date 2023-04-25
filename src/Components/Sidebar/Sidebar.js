import React, { useState } from 'react'
import './Sidebar.css'
import Logo from '../../images/logo-no-background.png'
import { UilSignOutAlt } from '@iconscout/react-unicons'
import { UilUserPlus } from '@iconscout/react-unicons'
import { SidebarData } from '../Data/Data';

const Sidebar = ()=>{
    
    const [selected, setSelected] = useState(0)



    return( 
        <>
          <div className='Sidebar'>
              {/* logo */}
              <div className='logo'>
                 <img className='logo-img' src={Logo}/>
              </div>
              {/*  menu */}
              <div className='menu'>
                {SidebarData.map((item, index)=>{
                    return(
                        <div className={selected===index?'menuItem active': 'menuItem'} 
                        key={index}
                        onClick={()=>setSelected(index)}>
                            <item.icon/>
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                })}

              <div className='menuItem'>
                 <UilSignOutAlt/>
              </div>

              </div>
          </div>
        </>
    )
}

export default Sidebar;