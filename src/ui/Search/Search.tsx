import './Search.scss';
const Search = (props) => {
    return (
        <div className="search" data-testid="searchField">
            <input 
                onChange={(event) => props?.handleSearch(event)} 
                value={props?.value} 
                placeholder='Title'
                className="inputField container"
                >
            </input>
        </div>
    );
  };
  export default Search;