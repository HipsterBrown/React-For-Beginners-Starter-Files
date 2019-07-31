import React from 'react';
/*
  1. create functional component with form, className: fish-edit
  2. add text inputs for name, price, status (select [available: Fresh, unavailable: Sold Out]), desc (textarea), image
  3. Add submit button: + Add Fish
  4. useCallback createFish, preventDefault -> fish variable with input values -> call addFish prop -> reset form
*/

const AddFishForm = ({addFish}) => {
  return (
    <form className="fish-edit" onSubmit={addFish}>
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="price" placeholder="Price" />
      <select name="status">
        <option value="available">Fresh</option>
        <option value="unavailable">Sold Out</option>
      </select>
      <textarea name="desc" />
      <input type="text" name="image" placeholder="Image" />
      <button type="submit">+ Add Fish</button>
    </form>
  );
};

export default AddFishForm;
