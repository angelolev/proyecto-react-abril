import { ProductCardProps } from "../../types/product";
import "./index.css";

function ProductCard({ title, price, image }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img className="max-w-[150px]" src={image} alt="Producto" />
      </div>
      <div className="product-info">
        <h3 className="text-[20px] font-bold whitespace-nowrap overflow-hidden text-ellipsis max-w-[300px] w-[300px]">
          {title}
        </h3>
        <p className="text-[24px] font-bold">${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
