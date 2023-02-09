import React from 'react'
import { useEffect, useState } from 'react';
import Card from './Card';

const url_data = " https://www.omdbapi.com/?s=titanic&apikey=7dd85d76";
function Movies() {
    const [url, setUrl] = useState(url_data)
    const [movieData, setMovieData] = useState([]);
    const [searchTitle, setSearchTitle] = useState("")

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data.Search)
                setMovieData(data.Search);

            })
            .catch(error => {
                console.log("error", error);
            })
    }, [url]);

    return (
        <>
            <div className='container center  '>
                <h5>Search Your Favorite Movie</h5>
                <input className=" me-2" type="text" placeholder='Search...' onChange={(e) => setSearchTitle(e.target.value)} aria-label="Search" />
            </div>

            <div className='container p-1 movies '>
                {(movieData.length === 0) ? (<p className="loading">Loading...</p>) : (movieData.filter((value) => {
                    if (searchTitle === "") {
                        return value;
                    } else if (value.Title.toLowerCase().includes(searchTitle.toLowerCase())) {
                        return value;
                    }
                })
                    .map((ele, index) => (<Card
                        title={ele.Title}
                        poster={ele.Poster}
                        year={ele.Year}
                        key={index} />))
                )}
            </div>

        </>
    )
}

export default Movies;


