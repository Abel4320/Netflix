import './App.css';
import Row from './Row';
import Nav from './Nav/Nav';
import requests from './apirequest'
import Banner from './Banner/Banner';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests. fetchNetflixOriginals} isLargeRow />
      <Row title="Trendng Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Acrion Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Modies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}
export default App;
