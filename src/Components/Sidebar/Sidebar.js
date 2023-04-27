import React, { useState } from 'react';



import { NavLink,useLocation } from 'react-router-dom';
import './Sidebar.css'


const Sidebar = ({children}) => {
    const location=useLocation();
    const[isOpen ,setIsOpen] = useState(false);
    console.log(isOpen);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/userHome",
            name:"Home",
            icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 11V3h8v8H3Zm0 10v-8h8v8H3Zm10-10V3h8v8h-8Zm0 10v-8h8v8h-8ZM5 9h4V5H5v4Zm10 0h4V5h-4v4Zm0 10h4v-4h-4v4ZM5 19h4v-4H5v4ZM15 9Zm0 6Zm-6 0Zm0-6Z"/></svg>
        },
        {
            path:"/users",
            name:"Users",
            icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.07 10.41a5 5 0 0 0 0-5.82A3.39 3.39 0 0 1 15 4a3.5 3.5 0 0 1 0 7a3.39 3.39 0 0 1-1.93-.59M5.5 7.5A3.5 3.5 0 1 1 9 11a3.5 3.5 0 0 1-3.5-3.5m2 0A1.5 1.5 0 1 0 9 6a1.5 1.5 0 0 0-1.5 1.5M16 17v2H2v-2s0-4 7-4s7 4 7 4m-2 0c-.14-.78-1.33-2-5-2s-4.93 1.31-5 2m11.95-4A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4Z"/></svg>
        },
        {
            path:"/assessments",
            name:"Assessments",
            icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/></svg>
        },
        {
            path:"/question-bank",
            name:"Question Bank",
            icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 18h2v-2h-2v2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-14a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2a2 2 0 0 1 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 0 0-4-4Z"/></svg>
        },
        {
            path:"/campaigns",
            name:"Campaigns",
            icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 13v-2h4v2h-4Zm1.2 7L16 17.6l1.2-1.6l3.2 2.4l-1.2 1.6Zm-2-12L16 6.4L19.2 4l1.2 1.6L17.2 8ZM5 19v-4H2V9h6l5-3v12l-5-3H7v4H5Zm2.5-7Zm6.5 3.35v-6.7q.675.6 1.088 1.463T15.5 12q0 1.025-.413 1.888T14 15.35ZM4 13h4.55L11 14.45v-4.9L8.55 11H4v2Z"/></svg>
        },
        {
            path:"/masters",
            name:"Masters",
            icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-3.775 0-6.388-1.163T3 17V7q0-1.65 2.638-2.825T12 3q3.725 0 6.363 1.175T21 7v10q0 1.675-2.613 2.838T12 21Zm0-11.975q2.225 0 4.475-.638T19 7.025q-.275-.725-2.513-1.375T12 5q-2.275 0-4.463.638T5 7.024q.35.75 2.538 1.375T12 9.025ZM12 14q1.05 0 2.025-.1t1.863-.288q.887-.187 1.675-.462T19 12.525v-3q-.65.35-1.438.625t-1.675.463q-.887.187-1.862.287T12 11q-1.05 0-2.05-.1t-1.888-.288q-.887-.187-1.662-.462T5 9.525v3q.625.35 1.4.625t1.663.463q.887.187 1.887.287T12 14Zm0 5q1.15 0 2.337-.175t2.188-.463q1-.287 1.675-.65t.8-.737v-2.45q-.65.35-1.438.625t-1.675.463q-.887.187-1.862.287T12 16q-1.05 0-2.05-.1t-1.888-.288q-.887-.187-1.662-.462T5 14.525V17q.125.375.788.725t1.662.638q1 .287 2.2.462T12 19Z"/></svg>
        },
        {
            path:"/setings",
            name:"Setings",
            icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m9.25 22l-.4-3.2q-.325-.125-.613-.3t-.562-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.337v-.674q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2h-5.5Zm2.8-6.5q1.45 0 2.475-1.025T15.55 12q0-1.45-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12q0 1.45 1.012 2.475T12.05 15.5Z"/></svg>
        },
        {
            path:"/help",
            name:"Help",
            icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5c0-2.21-1.79-4-4-4z"/></svg>
        },
        {
            path:"/accounts",
            name:"Logout",
            icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h7v2H5v14h7v2H5Zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5l-5 5Z"/></svg>
        }

    ]
    return (
        <div className="container">
           <div style={{
            display:location.pathname==="/accounts"?"none":undefined,
            width: isOpen ? "300px" : "50px"}} 
            className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="heading">Group of Schools</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="toggler">
                      {
                        isOpen? <svg 
                       onClick={toggle}
                       xmlns="http://www.w3.org/2000/svg" 
                       width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-6.6 4.6L10.8 12l4.6-4.6L14 6l-6 6l6 6l1.4-1.4Z"/></svg>
                       :
                       <svg 
                        onClick={toggle}
                       xmlns="http://www.w3.org/2000/svg" 
                       width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-2 0a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8M8.6 16.6l4.6-4.6l-4.6-4.6L10 6l6 6l-6 6l-1.4-1.4Z"/></svg>
                      }
                      
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;