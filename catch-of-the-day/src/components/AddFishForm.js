import React, {useCallback} from 'react';

const AddFishForm = ({addFish}) => {
  const createFish = useCallback(event => {
    event.preventDefault();

    const {name, price, status, desc, image} = event.target.elements;
    const fish = {
      name: name.value,
      price: parseFloat(price.value) * 100,
      status: status.value,
      desc: desc.value,
      image: image.value,
    };

    addFish(fish);
    event.currentTarget.reset();
  }, []);

  return (
    <form className="fish-edit" onSubmit={createFish}>
      <input name="name" type="text" placeholder="Name" />
      <input name="price" type="text" placeholder="Price" />
      <select name="status">
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>

      <textarea name="desc" placeholder="Desc" />
      <input name="image" type="text" placeholder="Image" />
      <button type="submit">+ Add Fish</button>
    </form>
  );
};

export default AddFishForm;
