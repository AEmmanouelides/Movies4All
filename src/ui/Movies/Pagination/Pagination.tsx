import './Pagination.scss';
import leftIcon from "../../../assets/icon/left-icon.svg";
import rightIcon from "../../../assets/icon/right-icon.svg";

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

const isDisabled = (arrow: string) => {
    if (arrow === "left" && currentPage === 1) return true
    if (arrow === "right" && currentPage === (pageNumbers.length)) return true
    else return false
  };

  return (
    <div className="center">
    <nav>
      <ul className="pagination" data-testid="pagination">
        {pageNumbers.length > 1 && (
        <li className="page-item" data-testid="leftArrow">
            <img src={leftIcon} className={`page-arrow ${
                isDisabled("left") ? "disabled" : null
              }`} alt="Left Arrow" onClick={() => paginate(currentPage - 1)} />
        </li>
        )
        }
        {pageNumbers.length > 1
          ? pageNumbers.map((number) => (
              <li
                key={number}
                className={`page-item ${
                  currentPage === number ? "active" : null
                }`}
              >
                <a
                  onClick={() => paginate(number)}
                  href="!#"
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            ))
          : null}
        {pageNumbers.length > 1 && (
                  <li  className="page-item">
                  <img src={rightIcon} className={`page-arrow ${
                  isDisabled("right") ? "disabled" : null
                }`} alt="Right arrow" onClick={() => paginate(currentPage + 1)}/>
        </li>)}
      </ul>
    </nav>

    </div>
  );
};

export default Pagination;