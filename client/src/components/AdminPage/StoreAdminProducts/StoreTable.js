import React from "react";
import { useQuery } from "@apollo/client";
import { PRODUCTS } from "../../../queries";
import TableProduct from "./TableProduct";
import {
  TableContainer,
  ProductsTable,
  TableHeader,
  TableTr,
} from "./StoreAdminProductsElements";

const StoreTable = ({ setProductToEdit }) => {
  const { data, loading } = useQuery(PRODUCTS);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <TableContainer>
      <ProductsTable>
        <thead>
          <TableTr>
            <TableHeader>skucode</TableHeader>
            <TableHeader>name</TableHeader>
            <TableHeader>price</TableHeader>
            <TableHeader>category</TableHeader>
            <TableHeader>subcategories</TableHeader>
            <TableHeader>actions</TableHeader>
          </TableTr>
        </thead>
        <tbody>
          {data.products.map((product, i) => (
            <TableProduct
              key={i}
              product={product}
              setProductToEdit={setProductToEdit}
            />
          ))}
        </tbody>
      </ProductsTable>
    </TableContainer>
  );
};

export default StoreTable;
