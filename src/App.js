import React, { useState } from 'react'
import './App.css'
import Obj from './Components/Requests'
import MoviesRow from './Components/MoviesRow'
import Navbar from './Components/Navbar'
import Poster from './Components/Poster'

const App = () => {
  let [O1,O2]=useState(true);
  let BGChanger=()=>
  {
    O2(!O1);
  }
  return (
    <div className={O1===true?"Black":"White"}>
      <Navbar Change={BGChanger}/>

      <Poster Props={Obj.Originals}/>

      <MoviesRow Props={{Title:"Netflix Originals" ,URL: Obj.Originals, Wide:true}} />
      <MoviesRow Props={{Title:"Trending" ,URL: Obj.Trending}} />
      <MoviesRow Props={{Title:"Top Netflix" ,URL: Obj.Top}} />
      <MoviesRow Props={{Title:"Action" ,URL: Obj.Action}} />
      <MoviesRow Props={{Title:"Comdey" ,URL: Obj.Comedy}} />
      <MoviesRow Props={{Title:"Horror" ,URL: Obj.Horror}} />
      <MoviesRow Props={{Title:"Romance" ,URL: Obj.Romance}} />
      <MoviesRow Props={{Title:"Documentry" ,URL: Obj.Documentry}} />
    </div>
  )
}

export default App