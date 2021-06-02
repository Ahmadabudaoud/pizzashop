import products from "../product";
import ProductItem from "./ProductItem";
import { Items } from "../styles";
const ProductList = () => {
  const newArray = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return <Items>{newArray}</Items>;
};
export default ProductList;
