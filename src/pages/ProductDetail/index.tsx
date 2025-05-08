import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { ProductCardProps } from "../../types/product";

function ProductDetail() {
  const { id } = useParams();

  const {
    data: product,
    loading,
    error,
  } = useFetch<ProductCardProps>(`https://fakestoreapi.com/products/${id}`);

  if (loading) {
    return <div>Cargando producto...</div>;
  }

  if (error) {
    return <div>Error al cargar el producto</div>;
  }

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  //logica de traer un producto por id
  return (
    <section className="container mx-auto">
      <div className="product p-3 grid grid-cols-1 md:grid-cols-2">
        <div className="product-image mb-4">
          <img
            className="max-w-[250px] mx-auto"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="product-info">
          <h2 className="product-title text-4xl uppercase font-bold mb-4">
            {product.title}
          </h2>
          <p className="product-price text-2xl font-bold mb-4">
            ${product.price}
          </p>
          <p className="product-description text-[14px] text-black/60">
            {product.description}
          </p>
          <div className="product-actions mt-4">
            <button className="bg-black text-white px-4 py-2 rounded-md cursor-pointer">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
