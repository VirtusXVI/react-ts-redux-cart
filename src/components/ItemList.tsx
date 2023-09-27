// Define a type for the items in the array
export type Item = {
  id: number;
  name: string;
  quantity: number;
};

// Define a type for the ItemList array
type ItemListType = Item[];

// Define the harden function
function harden<T>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}

const ItemList: Readonly<ItemListType> = harden([
  {
    id: 1,
    name: "Pasta",
    quantity: 0,
  },
  {
    id: 2,
    name: "Pizza",
    quantity: 0,
  },
  {
    id: 3,
    name: "Pomodoro",
    quantity: 0,
  },
  {
    id: 4,
    name: "Basilico",
    quantity: 0,
  },
]);

export default ItemList;
