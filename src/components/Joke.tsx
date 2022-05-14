import React from 'react';

type Props = {
  joke: { setup: string; punchline: string };
};

const Joke = ({ joke }: Props) => {
  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <h1 className='center'>{joke.setup}</h1>
        </div>
        <div className='flip-card-back'>
          <h1 className='center'>{joke.punchline}</h1>
        </div>
      </div>
    </div>
  );
};

export default Joke;
