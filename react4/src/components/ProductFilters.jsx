import React from "react";
import Checkbox from "./Checkbox";
import { view } from "@risingstack/react-easy-state";
import state from "../store";

class ProductFilters extends React.Component {
  render() {
    return (
      <div>
        <Checkbox
          label="Выбрать все"
          checked={state.filters.isAllChecked}
          onChange={() => {
            state.filters.isAllChecked = !state.filters.isAllChecked;
            state.filters.isFruitChecked = state.filters.isAllChecked;
            state.filters.isVegetablesChecked = state.filters.isAllChecked;
            state.filters.isCannedfoodChecked = state.filters.isAllChecked;
          }}
        />
        <hr />
        <Checkbox
          label="Фрукты"
          checked={state.filters.isFruitChecked}
          onChange={() =>
            (state.filters.isFruitChecked = !state.filters.isFruitChecked)
          }
        />
        <Checkbox
          label="Овощи"
          checked={state.filters.isVegetablesChecked}
          onChange={() =>
            (state.filters.isVegetablesChecked = !state.filters
              .isVegetablesChecked)
          }
        />
        <Checkbox
          label="Консервы"
          checked={state.filters.isCannedfoodChecked}
          onChange={() =>
            (state.filters.isCannedfoodChecked = !state.filters
              .isCannedfoodChecked)
          }
        />
      </div>
    );
  }
}

export default view(ProductFilters);
