import React from "react";
import { useMutation } from "@apollo/client";
import { DISABLE_PRODUCT, PRODUCTS } from "../../../queries";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { TableProductTr, TableProductTd } from "./StoreAdminProductsElements";

const TableProduct = ({ product, setProductToEdit }) => {
  const [disableProduct] = useMutation(DISABLE_PRODUCT, {
    onError: (error) => {
      window.alert(error.graphQLErrors[0].message);
    },
    update: (store, response) => {
      const dataInStore = store.readQuery({ query: PRODUCTS });
      store.writeQuery({
        query: PRODUCTS,
        data: {
          ...dataInStore,
          products: [...dataInStore.products].map((product) =>
            product.id === response.data.disableProduct.id
              ? { ...product, disable: response.data.disableProduct.disable }
              : product
          ),
        },
      });
    },
  });

  const handleDisable = () => {
    if (
      window.confirm(
        `Do you really want enable/disable the product "${product.name}"?`
      )
    ) {
      disableProduct({
        variables: {
          id: product.id,
          disable: !product.disable,
        },
      });
    }
  };

  return (
    <TableProductTr disable={product.disable}>
      <TableProductTd>{product.skuCode}</TableProductTd>
      <TableProductTd>{product.name}</TableProductTd>
      <TableProductTd>{product.price}</TableProductTd>
      <TableProductTd>{product.category}</TableProductTd>
      <TableProductTd>{product.subCategories.join(", ")}</TableProductTd>
      <TableProductTd>
        <AiFillEdit
          size={20}
          onClick={() => setProductToEdit(product)}
          style={{ cursor: "pointer" }}
        />
        <AiFillDelete
          size={20}
          onClick={() => handleDisable()}
          style={{ cursor: "pointer" }}
        />
      </TableProductTd>
    </TableProductTr>
  );
};

export default TableProduct;
