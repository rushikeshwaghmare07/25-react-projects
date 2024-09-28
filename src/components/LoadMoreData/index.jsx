import { useEffect, useState } from 'react';

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );

      const result = await response.json();

      if (result?.products?.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
      }

      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length === 100) setDisableButton(true);
  }, [products]);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {products.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg p-4">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-40 object-cover mb-2 rounded"
            />
            <p className="text-lg font-semibold text-center">{item.title}</p>
          </div>
        ))}
      </div>

      {loading && <div className="mt-4 text-gray-600">Loading data... Please wait.</div>}

      <div className="mt-6">
        <button
          className={`px-4 py-2 text-white font-semibold rounded-lg ${
            disableButton
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
          disabled={disableButton}
          onClick={() => setCount(count + 1)}
        >
          {disableButton ? 'No More Products' : 'Load More Products'}
        </button>
        {disableButton && (
          <p className="mt-2 text-gray-600">You have reached 100 products!!</p>
        )}
      </div>
    </div>
  );
}
