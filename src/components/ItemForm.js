import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onSubmit }) {
  const [newItem, setNewItem] = useState({category: "Produce"})

  function handleNewItem(event) {
    setNewItem({
      ...newItem,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(newItem)
    const passedItem = {
      id: uuid(),
      category: newItem.category,
      name: newItem.name
    }
    console.log(passedItem)
    onSubmit({
      passedItem
    })
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input onChange={handleNewItem} type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleNewItem}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
