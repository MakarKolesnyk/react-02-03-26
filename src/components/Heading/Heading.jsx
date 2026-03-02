import "./Heading.css"

const Heading = (props) => {
  const { text } = props;
  return <h2 className="title">{text}</h2>;
};

export default Heading;
