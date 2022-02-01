import './App.css';
import { Header, MovieList, MovieDetails } from './components';
import Timer from './Timer';

function App() {
  return (
    <div className="App d-flex flex-column">
      <Header />
      <div className='d-flex flex-row flex-fill pt-4' >
      <MovieList />
      <MovieDetails />
      </div>
      <Timer />
    </div>
  );
}

export default App;
