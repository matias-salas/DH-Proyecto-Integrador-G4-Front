import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useFetchID = (initial, list) => {
  const [productSelected, setProductSelected] = useState(initial);
  const { id } = useParams();

  useEffect(() => {
    let productFind = list.find((product) => product.id === +id);

    const getProduct = new Promise((resolve) => {
      resolve(productFind);
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id,list]);

  return { productSelected };
};

export default useFetchID;