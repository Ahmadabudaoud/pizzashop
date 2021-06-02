import "../App.css";

const ProductItem = (props) => {
  return (
    <div>
      <img src={props.product.image} alt="pizza" />
      <p>{props.product.name}</p>
      <p>{props.product.price} JD</p>
    </div>
  );
};
export default ProductItem;
