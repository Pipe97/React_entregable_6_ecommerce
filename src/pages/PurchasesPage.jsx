import React, { useEffect } from "react";
import usePurchase from "../hooks/usePurchase";
import PurchaseCard from "../components/Purchases/PurchaseCard";

const PurchasesPage = () => {
  const { purchases, getAllPurchases } = usePurchase();

  useEffect(() => {
    getAllPurchases();
  }, []);
  console.log(purchases);

  return (
    <div>
      <h2>Purchases</h2>
      <div>
        {
          purchases?.map(prod => (
            <PurchaseCard
            key={prod.id}
            prod={prod}/>
          ))
        }
        </div>
    </div>
  );
};

export default PurchasesPage;
