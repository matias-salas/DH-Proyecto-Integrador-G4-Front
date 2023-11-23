import { useLocalFetch } from "../../hooks/useLocalFetch";
import ItemList from "./ItemList";
import { products } from "../../../productsMock";
import { BounceLoader } from "react-spinners";

const ItemListContainer = ({ handleBack }) => {
  const { items } = useLocalFetch([], products);

  return (
    <div>
      {items.length > 0 ? (
        <ItemList prod={items} handleBack={handleBack} />
      ) : (
        <BounceLoader
          color="var(--color-six)"
          cssOverride={{
            position: "absolute",
            left: 0,
            bottom: 0,
            right: 0,
            top: 0,
            margin: "auto",
          }}
          size={100}
        />
      )}
    </div>
  );
};

export default ItemListContainer;
