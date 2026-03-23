import styles from "./PizzaConstructor.module.scss"
import { useState } from "react";
import {
  PIZZA_SIZES,
  TOPPINGS,
  BASE_PRICE,
  DOUGH_TYPES,
  TOPPING_PRICE,
} from "./data.js";

const PizzaConstructor = () => {
  const [selectSize, setSelectSize] = useState(PIZZA_SIZES[0].value);
  const [selectToppings, setSelectToppings] = useState([]);
  const [seclectDough, setSeclectDough] = useState(DOUGH_TYPES[0]);
  const [amount, setAmount] = useState(1);
  const [isOrder, setIsOrder] = useState(false);
  const calculatePrice = () => {
    const sizeMultiple = PIZZA_SIZES.find(
      (size) => selectSize === size.value,
    ).multiplier;
    const toppingPrice = selectToppings.length * TOPPING_PRICE;
    return (BASE_PRICE * sizeMultiple + toppingPrice) * amount;
  };
  const showPizzaSize = (size) => (
    <label key={size.value}>
      <input
        type="radio"
        name="size"
        value={size.value}
        onChange={() => {
          setSelectSize(size.value);
        }}
        checked={selectSize === size.value}
      />
      <span>{size.label}</span>
    </label>
  );
  const changeToppings = (topping) => {
    setSelectToppings((prev) =>
      prev.includes(topping)
        ? prev.filter((top) => top !== topping)
        : [...prev, topping],
    );
  };
  const showToppings = (topping) => (
    <label key={topping}>
      <input
        type="checkbox"
        checked={selectToppings?.includes(topping)}
        value={topping}
        onChange={() => {
          changeToppings(topping);
        }}
      />
      <span>{topping}</span>
    </label>
  );
  const showDough = (dough) => (
    <option key={dough} value={dough}>
      {dough}
    </option>
  );
  if (isOrder) {
    return (
      <article className={styles.order}>
        <h2>Ваше замовлення:</h2>
        <p>Розмір: {selectSize}см</p>
        <p>
          Топінги:{" "}
          {selectToppings.length > 0 ? selectToppings.join(", ") : "none"}
        </p>
        <p>Тип тіста: {seclectDough}</p>
        <p>Кількість порцій: {amount}</p>
        <p>Сума: {calculatePrice()} грн</p>
      </article>
    );
  }
  return (
    <section className={styles.constructor}>
      <h2>Конструктор піци</h2>
      <form
        onSubmit={() => {
          setIsOrder(true);
        }}
      >
        <fieldset>
          <legend>Розмір піци</legend>
          <div>{PIZZA_SIZES.map(showPizzaSize)}</div>
        </fieldset>
        <fieldset>
          <legend>Топінги</legend>
          <div>{TOPPINGS.map(showToppings)}</div>
        </fieldset>
        <fieldset>
          <legend>Тип тіста:</legend>
          <select
            value={seclectDough}
            onChange={(event) => {
              setSeclectDough(event.target.value);
            }}
          >
            {DOUGH_TYPES.map(showDough)}
          </select>
        </fieldset>
        <fieldset>
          <legend>Кількість порцій:</legend>
          <input
            type="number"
            min={1}
            value={amount}
            onChange={(event) => {
              setAmount(Number(event.target.value));
            }}
          />
        </fieldset>
        <button type="submit">Order</button>
      </form>
      <article>
        <h2>Ваше замовлення:</h2>
        <p>Розмір: {selectSize}см</p>
        <p>
          Топінги:{" "}
          {selectToppings.length > 0 ? selectToppings.join(", ") : "none"}
        </p>
        <p>Тип тіста: {seclectDough}</p>
        <p>Кількість порцій: {amount}</p>
        <p>Сума: {calculatePrice()} грн</p>
      </article>
    </section>
  );
};

export default PizzaConstructor;
