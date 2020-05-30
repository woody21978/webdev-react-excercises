import { store } from "@risingstack/react-easy-state";

const state = store({
  sort: true,
  filters: {
    isAllChecked: true,
    isFruitChecked: false,
    isVegetablesChecked: false,
    isCannedfoodChecked: false
  },
  products: [
    { id: 1, name: "Апельсины", price: 1000, amount: 30, category: "fruit" },
    { id: 2, name: "Бананы", price: 1000, amount: 30, category: "fruit" },
    { id: 3, name: "Помидоры", price: 2000, amount: 10, category: "vegetable" }
  ]
});

export default state;
