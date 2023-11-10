import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useLocalFetch = (initial, list) => {
  const [items, setItems] = useState(initial);
  const { categoryName } = useParams();
  

  useEffect(() => {
    let productosFiltrados = list.filter(
      (product) => product.type === categoryName
    );
    const fetchProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : list);
      }, 1000);
    });

    fetchProduct
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log("catch: ", err);
      });
  }, [categoryName, list]);

  return (
    {items}
  );
};
