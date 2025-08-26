import { useParams } from "react-router-dom";

const Product = () => {
    const {productId} = useParams<{productId:string}>()
    // fetch api product untuk product id yang sesuai dengan url, setelah dapat data, 
  return <div>Product {productId}</div>;
};

export default Product;
