import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./ui/Footer/Footer";
import Header from "./ui/Header/Header";
import Movies from "./ui/Movies/Movies";
import Search from "./ui/Search/Search";
import Pagination from "./ui/Movies/Pagination/Pagination";
import { Movie } from "./ui/Movies/interfaces/Movie";

function App() {

const [movies, setMovies] = useState([]);
const [filteredMovies, setFilteredMovies] = useState([])
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage] = useState(10);

const indexOfLastItem = currentPage * itemsPerPage; 
const indexOfFirstItem = indexOfLastItem - itemsPerPage; 
const currentItems = movies.slice(indexOfFirstItem, indexOfLastItem); 

const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

const setMoviesData = async (): Promise<void> => {
    try {
      const data = await axios.get(
        "https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json"
      );
      setMovies(data?.data?.entries);
      setFilteredMovies(data?.data?.entries);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSearch = (event) => {
    if (event?.target?.value == "" ){
      setMoviesData();
    } else {
      const movieFiltered = filteredMovies && filteredMovies.filter((movie: Movie) => movie?.title?.includes(event?.target?.value));
      setMovies(movieFiltered);
      setCurrentPage(1);
    }
  };
  
  useEffect(() => {
    setMoviesData();
  }, []);

    return (
        <Router>
                <Header />
                <Search handleSearch={handleSearch} />
                <Movies movies={currentItems}/>
                <Pagination
                  itemsPerPage={itemsPerPage}
                  totalItems={movies.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
                <Footer />
        </Router>
    )
}

export default App;
