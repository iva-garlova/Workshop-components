import Pagination from "./Pagination";
import SearchForm from "./SearchForm";

export default function UserList() {
    return (
            <section className="card users-container">

         
         <SearchForm />

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

          <Pagination />
        
        </section>

        
    );
}