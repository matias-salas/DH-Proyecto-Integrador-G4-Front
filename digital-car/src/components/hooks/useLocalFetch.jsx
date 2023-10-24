import { useEffect, useState } from "react";

export const useLocalFetch = (initial, list) => {
  const [items, setItems] = useState(initial);
  

  useEffect(() => {
    const fetchProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(list);
      }, 1000);
    });

    fetchProduct
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log("catch: ", err);
      });
  }, [list]);

  return (
    {items}
  );
};
