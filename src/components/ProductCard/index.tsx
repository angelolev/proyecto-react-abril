import { ProductCardProps } from "../../types/product";
import "./index.css";

function ProductCard({ title, price, image }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt="Producto" />
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
