import React from 'react';

type Props = {
  joke: string;
};

const Joke = ({ joke }: Props) => {
  return <div>{joke}</div>;
};

export default Joke;
