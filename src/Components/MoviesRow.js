import React, { useState, useEffect } from 'react'
import axios from './RequestMaker'
import './MoviesRow.css';

const MoviesRow = ({ Props }) => {
    let [Movies, setMovies] = useState([]);
    let IMGURL = `https://image.tmdb.org/t/p/original/`;

    useEffect(() => {

        let GetData = async () => {
            let List = await axios.get(Props.URL);
            setMovies(List.data.results);
        }
        GetData();
    }, [Props.URL])

    return (
        <div className='MoviesRow'>
            <h4 className='Title'>{Props.Title}</h4>

            <div className="Album">
                {
                    Movies.map((Film, Ind) => {
                        return (
                                <img className={Props.Wide===true?"Wider":"Images"}src={`${IMGURL}${Film.poster_path}`} alt={`${Film.title}`} key={Ind} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MoviesRow