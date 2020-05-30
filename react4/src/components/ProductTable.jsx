import React from "react";
import { view } from "@risingstack/react-easy-state";
import state from "../store";

class ProductTable extends React.Component {
  sortProducts() {
    if (state.sort) {
      state.products.sort((a, b) => (a.amount > b.amount ? 1 : -1));
      state.sort = false;
    } else {
      state.products.reverse();
      state.sort = true;
    }
  }
  render() {
    return (
      <table border="1" width="500px">
        <tr>
          <td>Название</td>
          <td>Категория</td>
          <td>Цена (шт.)</td>
          <td>
            Кол-во <button onClick={this.sortProducts}>сортировка</button>
          </td>
        </tr>
        {state.filters.isFruitChecked &&
          !state.filters.isAllChecked &&
          state.products
            .filter(e => e.category == "fruit")
            .map(product => (
              <tr>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.amount}</td>
              </tr>
            ))}
        {state.filters.isVegetablesChecked &&
          !state.filters.isAllChecked &&
          state.products
            .filter(e => e.category == "vegetable")
            .map(product => (
              <tr>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.amount}</td>
              </tr>
            ))}
        {state.filters.isCannedfoodChecked &&
          !state.filters.isAllChecked &&
          state.products
            .filter(e => e.category == "cannedFood")
            .map(product => (
              <tr>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.amount}</td>
              </tr>
            ))}
        {state.filters.isAllChecked &&
          state.products.map(product => (
            <tr>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.amount}</td>
            </tr>
          ))}
      </table>
    );
  }
}

export default view(ProductTable);
