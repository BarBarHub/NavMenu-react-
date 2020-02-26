 
import "./NavMenu.css"

 import React from 'react';

  
function NavMenu(props) {
      return (
        
        <ul className="list">
          {props.x.map(el=>
            <a href="#"><li className="title">{el.title}

<ul className="dropdown">
            {!el.drop ? null :
            el.drop.map(el=>


           <a href ="#"><li>{el}</li></a> 
            
            )}
            </ul>
            
            </li>
            </a>
            )}
        </ul>
      )
  }
  export default  NavMenu





