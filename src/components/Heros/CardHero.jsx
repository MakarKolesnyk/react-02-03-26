import styles from "./Heros.module.css";

const CardHero = (props) => {
  const { hero, setHeroSelect, setNewRating } = props;
  const { id, name, power, rating } = hero;
  const handleClick = () => setHeroSelect(hero);
  const addRating = (event) => {
    event.stopPropagation()
    setNewRating(id, Math.min(5, rating+1));
  };
  const subRating = (event) => {
    event.stopPropagation()
    setNewRating(id, Math.max(1, rating-1));
  };
  return (
    <article className={styles.hero} onClick={handleClick}>
      <h3>{name}</h3>
      <div className={styles.flex}>
        <p>Power: {power}</p>
        <p>
          {rating} <button onClick={addRating}>👍</button>
          <button onClick={subRating}>👎</button>
        </p>
      </div>
    </article>
  );
};

export default CardHero;
