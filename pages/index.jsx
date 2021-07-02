import { useRef } from "react";

const Home = () => {
  const isEmail = useRef();
  const isText = useRef();

  const onSubmit = () => {
    e.preventDefault();
    const email = isEmail.current.value;
    const text = isText.current.value;
    
  };

  return (
    <>
      <h1>Home</h1>
        <form noValidat onSubmit={onSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' ref={isEmail} />
          </div>
          <div>
            <label htmlFor="feedback">Feedback</label>
            <textarea rows={5} id='feedback' ref={isText} />
          </div>
          <button type="submit">submit</button>
        </form>
    </>
  );
}

export default Home;