// Define a type for the items in the array
export type Item = {
  id: number;
  name: string;
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
  },
  {
    id: 2,
    name: "Pizza",
  },
  {
    id: 3,
    name: "Pomodoro",
  },
  {
    id: 4,
    name: "Basilico",
  },
]);

export default ItemList;
