import { useState } from "react";
import CardHero from "./CardHero";
import heroes from "./data";
import styles from "./Heros.module.css";

const Heros = () => {
  const [herosList, setHerosList] = useState(heroes);
  const [heroSelect, setHeroSelect] = useState(null);
  const setNewRating = (id, newRating) => {
    setHerosList((prevList) =>
      prevList.map((hero) =>
        id === hero.id ? { ...hero, rating: newRating } : hero,
      ),
    );
    if (heroSelect?.id === id) {
        setHeroSelect(prevHero=> ({...prevHero, rating: newRating}))
    }
  };
  const showHero = (hero) => (
    <CardHero setNewRating={setNewRating} key={hero.id} setHeroSelect={setHeroSelect} hero={hero} />
  );
  return (
    <section className={styles.wrapper}>
      <h2>Оберіть улюбленого героя</h2>
      <div className={styles.flex}>{herosList.map(showHero)}</div>
      <h2>Ви обрали</h2>
      <div className={styles.flex}>
        {heroSelect ? (
          <CardHero setNewRating={setNewRating} hero={heroSelect} />
        ) : (
          <p>Героя ще не вибрано</p>
        )}
      </div>
    </section>
  );
};

export default Heros;
