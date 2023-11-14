const API_KEY = "7402cda408a3847f8f7d709f4e088126";


const requests ={
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US` ,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1` ,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35` ,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749` ,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests;

