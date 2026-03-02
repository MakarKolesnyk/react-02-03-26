import "./Emoji.css"

const Emoji = (props) => {
  const { emoji, discription } = props;
  return <div className="emoji" title={discription}>{emoji}</div>;
};

export default Emoji;
