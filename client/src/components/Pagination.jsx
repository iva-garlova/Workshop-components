export default function Pagination() {
    return (
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
    );
}