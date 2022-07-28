// https://api.themoviedb.org/3/movie/550?api_key=512f02bfeaad808b483c6f3bb546db74

let APIKey = `512f02bfeaad808b483c6f3bb546db74`;

let Obj={
    Originals:`/discover/tv?api_key=${APIKey}&with_networks=213`,
    Trending:`/trending/all/week?api_key=${APIKey}`,
    Top:`/movie/top_rated?api_key=${APIKey}&language=en-US`,
    Action:`/discover/movie?api_key=${APIKey}&with_genres=28`,
    Comedy:`/discover/movie?api_key=${APIKey}&with_genres=35`,
    Horror:`/discover/movie?api_key=${APIKey}&with_genres=27`,
    Romance:`/discover/movie?api_key=${APIKey}&with_genres=10749`,
    Documentry:`/discover/movie?api_key=${APIKey}&with_genres=99`,
}

export default Obj