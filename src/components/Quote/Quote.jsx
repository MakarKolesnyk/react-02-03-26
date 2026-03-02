import './Quote.css';

const Quote = (props) => {
    const {author, quote} = props
    return (
        <article className='quote'>
            <blockquote>{quote}</blockquote>
            <p>— {author}</p>
        </article>
    );
}

export default Quote;
