import "./PanelAdmin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from "../../../productsMock";
import { useLocalFetch } from "../../hooks/useLocalFetch";

const PanelAdmin = () => {
  const { items } = useLocalFetch([], products);
  return (
    <>
      <div>
        <button>Create</button>
        <button>List</button>
        <button>Update</button>
        <button>Delete</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Tittle</th>
            <th scope="col">Type</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((element) => {
            return (
              <tr key={element.id}>
                <th scope="row">{element.id}</th>
                <td>{element.title}</td>
                <td>{element.type}</td>
                <td>{element.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default PanelAdmin;
