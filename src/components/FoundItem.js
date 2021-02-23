// Styling
import { FoundWrapper } from "../styles";

const FoundItem = (props) => {
  const product = props.product;

  return (
    <FoundWrapper>
      <img alt={product.name} src={product.image} />
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
    </FoundWrapper>
  );
};

export default FoundItem;
