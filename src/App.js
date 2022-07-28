import React, { createContext, useState } from 'react'
import './App.css'
import Obj from './Components/Requests'
import MoviesRow from './Components/MoviesRow'
import Navbar from './Components/Navbar'
import Poster from './Components/Poster'
import YouTube from 'react-youtube';

let MoviesRowContext = createContext("");
const App = ({children}) => {
  
  let [O1, O2] = useState(true);
  let [ID,setID]=useState("")


  window.addEventListener("click" , ()=>
  {
    setID("");
  })
  let Options =
  {
    height: "400px",
    width: "100%",
    playerVars:
    {
      autoplay: 1
    }
  }
  let BGChanger = () => {
    O2(!O1);
  }
  let IDGetter=(VGet)=>
  {
    setID(VGet)
  }

  return (
    <div className={O1 === true ? "Black" : "White"}>
      <MoviesRowContext.Provider value={IDGetter}>

        {children}
        <Navbar Change={BGChanger} />

        <Poster Props={Obj.Originals} />
        {ID!==""?<YouTube videoId={`${ID}`} opts={Options}/>:""}

        <MoviesRow Props={{ Title: "Netflix Originals", URL: Obj.Originals, Wide: true }} />
        <MoviesRow Props={{ Title: "Trending", URL: Obj.Trending }} />
        <MoviesRow Props={{ Title: "Top Netflix", URL: Obj.Top }} />
        <MoviesRow Props={{ Title: "Action", URL: Obj.Action }} />
        <MoviesRow Props={{ Title: "Comdey", URL: Obj.Comedy }} />
        <MoviesRow Props={{ Title: "Horror", URL: Obj.Horror }} />
        <MoviesRow Props={{ Title: "Romance", URL: Obj.Romance }} />
        <MoviesRow Props={{ Title: "Documentry", URL: Obj.Documentry }} />
      </MoviesRowContext.Provider>
    </div>
  )
}

export default App

export {MoviesRowContext}