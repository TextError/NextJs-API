import { useRef, useState } from "react";

const Home = () => {
  const [state, setState] = useState([]);
  const isEmail = useRef();
  const isText = useRef();

  const onSubmit = e => {
    e.preventDefault();

    const email = isEmail.current.value;
    const text = isText.current.value;

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify({ email, text }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(e => console.log(e))
  };

  const onLoad = () => {
    fetch('/api/feedback')
      .then((res) => res.json())
      .then(({ data }) => setState(data));
  }

  console.log(state);
  return (
    <>
      <h1>Home</h1>
      <form noValidate onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' ref={isEmail} />
        </div>
        <div>
          <label htmlFor="feedback">Feedback</label>
          <textarea rows={5} id='feedback' ref={isText} />
        </div>
        <button>submit</button>
      </form>
      <hr />
      <button onClick={onLoad}>Load Feedback</button>
      <ul>
        { state.map(({ id, text }) => <li key={id}>{text}</li>) }
      </ul>
    </>
  );
}

export default Home;