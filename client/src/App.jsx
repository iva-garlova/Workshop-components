import './App.css';
import Header from './components/Header';

function App() {
  return (
    <>
    
      <Header />

      {/* Main component */}
      <main className="main">
        {/* Section component */}
        <section className="card users-container">
          {/* Search bar component */}
          <form className="search-form">
            <h2>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user"
                className="svg-inline--fa fa-user SearchBar_icon__cXpTg"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
                ></path>
              </svg>
              <span>Users</span>
            </h2>
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Please, select the search criteria"
                name="search"
              />
              {/* Show the clear button only if input field length !== 0 */}
              <button className="btn close-btn">
                <i className="fa-solid fa-xmark"></i>
              </button>

              <button className="btn" title="Please, select the search criteria">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>

            <div className="filter">
              <span>Search Criteria:</span>
              <select name="criteria" className="criteria">
                <option value="">Not selected</option>
                <option value="">First Name</option>
                <option value="">Last Name</option>
                <option value="">Email</option>
                <option value="">Phone</option>
              </select>
            </div>
          </form>

          {/* Table component */}
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>
                    First name
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-down"
                      className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                      ></path>
                    </svg>
                  </th>
                  <th>
                    Last name
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-down"
                      className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                      ></path>
                    </svg>
                  </th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Table row component */}
                <tr>
                  <td>
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      alt="Peter's profile"
                      className="image"
                    />
                  </td>
                  <td>Peter</td>
                  <td>Johnson</td>
                  <td>peter@abv.bg</td>
                  <td>0812345678</td>
                  <td>June 28, 2022</td>
                  <td className="actions">
                    <button className="btn edit-btn" title="Edit">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button className="btn delete-btn" title="Delete">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                    <button className="btn info-btn" title="Info">
                      <i className="fa-solid fa-info"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* New user button */}
          <button className="btn-add btn">Add new user</button>

          {/* Pagination component */}
          <div className="pagination position">
            <div className="limits">
              <span>Items per page:</span>
              <select name="limit" className="limit" defaultValue="5">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>
            <p className="pages">1 - 1 of 1</p>
            <div className="actions">
              <button className="btn" title="First Page">
                <i className="fa-solid fa-angles-left"></i>
              </button>
              <button className="btn" title="Previous Page">
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button className="btn" title="Next Page">
                <i className="fa-solid fa-angle-right"></i>
              </button>
              <button className="btn" title="Last Page">
                <i className="fa-solid fa-angles-right"></i>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer component */}
      <footer className="footer">
        <p>This site is designed to be used for training purposes at SoftUni.</p>
      </footer>
    </>
  );
}

export default App;
