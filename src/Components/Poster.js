import axios from './RequestMaker';
import React, { useEffect, useState,useContext } from 'react'
import './Poster.css'
import { MoviesRowContext } from '../App';
import movieTrailer from 'movie-trailer';

const Poster = ({ Props }) => {
    let [state, setState] = useState([]);
    let Func=useContext(MoviesRowContext);

    useEffect(() => {
        let MyFunc = async () => {
            let New = await axios.get(Props);
            let { results } = await New.data;

            let Rand=Math.floor(Math.random()*results.length-1);
            setState(results[Rand]);
        }
        MyFunc()
    }, [Props])

    let IDFetcher=(Name)=>
    {
        let VGet;
        movieTrailer(Name)
        .then((Res)=>
        {
            const Param=new URLSearchParams(new URL(Res).search);
            VGet=Param.get('v');
        })
        .then(()=>
        {
            Func(VGet)
        })
    }
    return (
        <div className='Poster' 
            style={{
                backgroundImage:`url(https://image.tmdb.org/t/p/original${state?.backdrop_path})`,
                backgroundPosition:"center center",
                backgroundSize:"cover",
                backgroundRepeat:"no-repeat",
                width:"100%"
            }}>


            <div className="Bottom">
                <h3>{state?.name}</h3>
                <div className="Buttons">
                    <button onClick={()=>{IDFetcher(state?.name)}}>Play Now</button>
                    <button>My Lists</button>
                </div>
                <p>
                    {
                        state?.overview?.substr(0,150).concat(" ....")
                    }
                </p>
            </div>

            <div className="Blackish"></div>
        </div>

    )
}

export default Poster