import "../App.css";
import products from "../product";
import ProductItem from "./ProductItem";
const ProductList = () => {
  const newArray = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return <div className="items">{newArray}</div>;
};
export default ProductList;
