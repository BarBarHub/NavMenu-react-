import React from 'react'
import Bader from "./Components/Nav/NavMenu"

const menu=[
  {title:"home"},
  {title:"services",drop:["For entrepreneurs","For students","For hobbyists"]},
  {title:"conact"},
  
]




export default function App() {
  return (
    <div>
    <Bader x={menu} />

    </div>
  )
}
