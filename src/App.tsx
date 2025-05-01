import "./App.css";
import ProductCard from "./components/ProductCard";
import { ProductCardProps } from "./types/product";
import { useFetch } from "./hooks/useFetch";

function App() {
  const {
    data: products,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products");

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main>
      <section className="new-arrivals">
        <h2>New Arrivals</h2>
        {products.map((product: ProductCardProps) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
    </main>
  );
}

export default App;
