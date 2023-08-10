import { useSelector } from "react-redux";
import CardProduct from "../components/Home/CardProduct";
import "./styles/Home.css";
import { useState } from "react";
import FilterCategory from "../components/Home/FilterCategory";
import FilterPrice from "../components/Home/FilterPrice";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [priceMinMax, setPriceMinMax] = useState({
    min: 0,
    max: Infinity,
  });

  const products = useSelector((states) => states.products);

  const handleSearchName = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const cbFilter = (prod) => prod.title.toLowerCase().includes(inputValue);
  // console.log(products);

  const cbFilterPrice = (prod) => {
    const condMin = priceMinMax.min <= prod.price;
    const condMax = prod.price <= priceMinMax.max;
    return condMin && condMax;
  };

  return (
    <div>
      <h1>Home</h1>
      <input value={inputValue} onChange={handleSearchName} type="text" />
      <aside>
        <FilterPrice priceMinMax={priceMinMax} setPriceMinMax={setPriceMinMax}/>
        <FilterCategory />
      </aside>
      <div className="home__container">
        {products
          ?.filter(cbFilter)
          .filter(cbFilterPrice)
          .map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Home;
