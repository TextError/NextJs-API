import fs from 'fs';
import path from 'path';
import { useState } from 'react';

const Feedback = ({ data }) => {
  const [state, setState] = useState();

  const onLoad = ({ id }) => {
    fetch(`/api/feedback/${id}`)
      .then(res => res.json())
      .then(({file}) => setState(file))
      .catch(e => console.log(e));
  };

  return (
    <>
      {state && <p>{state.email}</p>}
      <ul>
        {data.map(({ id, text }) => (
          <li key={id}> {text}{' '}
            <button onClick={() => onLoad({ id })}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};


export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'data', 'feedback.json');
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);

  return {
    props: { data },
  };
}

export default Feedback;