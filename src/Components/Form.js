import React, { useContext, useRef } from "react";
import CartContext from "../store/cart-context";
const Form = (props) => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const largeRef = useRef();
  const mediumRef = useRef();
  const smallref = useRef();

  const cartCtx = useContext(CartContext);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredPrice = priceRef.current.value;
    const enteredLarge = largeRef.current.value;
    const enteredMedium = mediumRef.current.value;
    const enteredSmall = smallref.current.value;
    const data = {
      name: enteredName,
      description: enteredDescription,
      price: enteredPrice,
      large: enteredLarge,
      medium: enteredMedium,
      small: enteredSmall,
    };
    cartCtx.addItem(data);
    console.log(cartCtx.items);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <label>Tshirt Name</label>
      <input type="text" ref={nameRef}></input>

      <label>Description</label>
      <input type="text" ref={descriptionRef}></input>

      <label>Price</label>
      <input type="number" ref={priceRef}></input>

      <label>Quantity Available-</label>

      <label>L</label>
      <input type="number" ref={largeRef}></input>

      <label>M</label>
      <input type="number" ref={mediumRef}></input>

      <label>S</label>
      <input type="number" ref={smallref}></input>

      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
