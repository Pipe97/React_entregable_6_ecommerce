import { useForm } from "react-hook-form";

const FilterPrice = ({ priceMinMax, setPriceMinMax }) => {
  const { register, reset, handleSubmit } = useForm();

  const submit = (data) => {
    const min = data.from.trim() === "" ? 0 : +data.from;
    const max = data.to.trim() === "" ? Infinity : +data.to;
    // console.log(data);
    setPriceMinMax({ min, max });
  };

  const handleClearFilter = () => {
    setPriceMinMax({ min: 0, max: Infinity });
    reset({ from: "", to: "" });
  };

  return (
    <article>
      <h3>Price</h3>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="from">From</label>
          <input {...register("from")} type="number" id="from" />
        </div>
        <div>
          <label htmlFor="to">To</label>
          <input {...register("to")} type="number" id="to" />
        </div>
        <button>Filter Price</button>
      </form>
      {priceMinMax.min !== 0 || priceMinMax.max !== Infinity ? (
        <p>
          From {priceMinMax.min} to {priceMinMax.max}{" "}
          <b onClick={handleClearFilter} style={{ cursor: "pointer" }}>
            X
          </b>
        </p>
      ) : (
        ""
      )}
    </article>
  );
};

export default FilterPrice;
