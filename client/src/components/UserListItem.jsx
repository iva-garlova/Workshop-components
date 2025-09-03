import { fromIsoDate } from "../utils/dateTimeUtils";

export default function UserListItem({
    firstName,
    lastName,
    email,
    phoneNumber,
    createdAt,
    updatedAt,
    imageUrl,

}) {
   
    
    return (
                    
                <tr>
                  <td>
                    <img
                      src={imageUrl}
                      alt={`${firstName}'s profile`}
                      className="image"
                    />
                  </td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{email}</td>
                  <td>{phoneNumber}</td>
                  <td>{fromIsoDate(createdAt)}</td>
                  <td>{fromIsoDate(updatedAt)}</td>
                  

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
    );
}