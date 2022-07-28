import React, { useState, useEffect, useContext } from 'react'
import axios from './RequestMaker'
import './MoviesRow.css';
import { MoviesRowContext } from '../App';
import movieTrailer from 'movie-trailer';

const MoviesRow = ({ Props }) => {
    let [Movies, setMovies] = useState([]);
    let Func=useContext(MoviesRowContext);
    let IMGURL = `https://image.tmdb.org/t/p/original/`;

    useEffect(() => {

        let GetData = async () => {
            let List = await axios.get(Props.URL);
            setMovies(List.data.results);
        }
        GetData();
    }, [Props.URL])

    let IDFetcher=(Val,Name)=>
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
        <div className='MoviesRow'>
            <h4 className='Title'>{Props.Title}</h4>

            <div className="Album">
                {
                    Movies.map((Film, Ind) => {
                        return (
                                <img className={Props.Wide===true?"Wider":"Images"}src={`${IMGURL}${Film.poster_path}`} alt={`${Film.title}`} key={Ind} onClick={()=>{IDFetcher(Film.id,Film.name || Film.title)}}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MoviesRow