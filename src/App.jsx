import { useState } from "react";
import { nanoid } from "nanoid";
import data from './data'

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([])

  return (
    <section className="section-center" onSubmit={(e) => {
      e.preventDefault()
      let amount = parseInt(count)
      setText(data.slice(0, amount))
    }}>
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input type="number" name="amount" id="amount" min="1" step="1" max="8" value={count} onChange={(e) => setCount(e.target.value)}/>
        <button className="btn" type="submit">generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          const id = nanoid()
          return <p key={id}>{item}</p>
        })}
      </article>
    </section>
);
};
export default App;
