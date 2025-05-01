import { useEffect, useState } from "react";
import { ProductCardProps } from "../types/product";

export function useFetch(url: string) {
  const [data, setData] = useState<ProductCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("algo paso");
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(
          error instanceof Error ? error : new Error("ocurrio un error")
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}
