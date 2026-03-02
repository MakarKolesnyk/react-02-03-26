import Emoji from "./components/Emoji/Emoji";
import Heading from "./components/Heading/Heading";
import Quote from "./components/Quote/Quote";

function App() {
  return (
    <>
      <Heading text="Цитати для натхнення" />
      <Quote
        quote="“Найкращий спосіб почати — перестати говорити і почати робити.”"
        author="Волт Дісней"
      />
      <Quote
        quote="“Не помиляється лише той, хто нічого не робить.”"
        author="Теодор Рузвельт"
      />
      <Quote
        quote="“Успіх — це рух від невдачі до невдачі без втрати ентузіазму.”"
        author="Вінстон Черчилль"
      />
      <section>
        <Emoji emoji="🙂" discription="smile" />
        <Emoji emoji="😄" discription="laught" />
      </section>
    </>
  );
}

export default App;
