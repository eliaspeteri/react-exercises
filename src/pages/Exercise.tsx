import React, { useEffect, useState } from 'react';
import Animal from '../components/Animal';
import Button from '../components/Button';
import NoPage from './NoPage';
import './pages.css';
import punchlines from '../resources/static/punchlines.json';
import Profile from '../components/Profile';
import { Joke } from '../components';

type Props = {
  exercise: number;
};

interface IPunchline {
  id: number;
  setup: string;
  punchline: string;
}

interface IProfile {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  phone_number: string;
  date_of_birth: string;
  employment: {
    title: string;
  };
}

const Exercise = ({ exercise }: Props) => {
  const [counter, setCounter] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profiles, setProfiles] = useState([]);

  const url = 'https://random-data-api.com/api/users/random_user?size=10';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProfiles(data.data);
      });
  }, []);

  const animals = [
    '🐶dog',
    '🐱cat',
    '🐤chicken',
    '🐄cow',
    '🐑sheep',
    '🐴horse'
  ];
  switch (exercise) {
    case 1:
      return (
        <div>
          <br />
          <h1>Exercise 1</h1>
          <p>
            This exercise uses CSS to render a square div element with text and
            centers it within another div.
          </p>
          <div className='container center'>
            <div className='child center'>Hello World!</div>
          </div>
        </div>
      );
    case 2:
      return (
        <div>
          <br />
          <h1> Exercise 2</h1>
          <p>
            This is a simple button element with an event handler to alert the
            user that they pressed a button.
          </p>
          <button onClick={() => alert('Clicked!')}>Click Me</button>
        </div>
      );
    case 3:
      return (
        <div>
          <br />
          <h1>Exercise 3</h1>
          <p>
            Here we're rendering buttons with a custom component, that alert the
            user which button they pressed.
          </p>
          <Button onClick={() => alert('You clicked on Button 1')}>
            Button 1
          </Button>
          <Button onClick={() => alert('You clicked on Button 2')}>
            Button 2
          </Button>
          <Button onClick={() => alert('You clicked on Button 3')}>
            Button 3
          </Button>
        </div>
      );
    case 4:
      return (
        <div>
          <br />
          <h1>Exercise 4</h1>
          <p>
            The button uses a React state to count up how many times the button
            has been pressed. The state will reset on refresh.
          </p>
          <p className='center'>Button has been clicked: {counter} times</p>
          <span className='center'>
            <Button onClick={() => setCounter(counter + 1)}>Click Me</Button>
          </span>
        </div>
      );
    case 5:
      return (
        <div>
          <br />
          <h1>Exercise 5</h1>
          <p>
            We have a list of animals, so we're rendering an unordered list of
            them using the{' '}
            <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map'>
              map() method
            </a>{' '}
            for arrays.
          </p>
          <ul>
            {animals.map((animal) => (
              <li>{animal}</li>
            ))}
          </ul>
        </div>
      );
    case 6:
      return (
        <div>
          <br />
          <h1>Exercise 6</h1>
          <p>
            Building on the previous exercise, here we're using the map() method
            as before, but instead rendering each item as its own component.
          </p>
          {animals.map((animal) => (
            <Animal animal={animal} />
          ))}
        </div>
      );
    case 7:
      return (
        <div>
          <br />
          <h1>Exercise 7</h1>
          <p>
            A simple form that queries the user for their name, which is then
            used to greet the user with, when the form is "sent".
          </p>
          <div className='center'>
            <form onSubmit={(event) => event?.preventDefault()}>
              <input
                type='text'
                placeholder='First Name'
                onChange={(event) => setFirstName(event?.target.value)}
              />
              <br />
              <input
                type='text'
                placeholder='Last Name'
                onChange={(event) => setLastName(event.target.value)}
              />
              <br />
              <Button
                color={'red'}
                textColor={'white'}
                onClick={() => alert(`Hello ${firstName} ${lastName}!`)}
              >
                GREET ME
              </Button>
            </form>
          </div>
        </div>
      );
    case 8:
      return (
        <div>
          <br />
          <h1>Exercise 8</h1>
          <p>
            Again, here we're printing custom components of cards with jokes. On
            the front side is the setup, and you can hover over the card to see
            the punchline.
          </p>
          <div style={{ backgroundColor: '#e2f5da', paddingBottom: '1rem' }}>
            <div className='center'>
              {punchlines.map((joke: IPunchline) => (
                <Joke key={joke.punchline} joke={joke} />
              ))}
            </div>
          </div>
        </div>
      );
    case 9:
      return (
        <div>
          <br />
          <h1>Exercise 9</h1>
          <p>
            Last but not least, this exercise uses{' '}
            <a href="https://random-data-api.com/api/users/random_user?size=10'">
              this API
            </a>{' '}
            to fetch ten random "users" and displays flip cards with some
            information about them.
          </p>
          <Button
            color={'red'}
            textColor={'white'}
            onClick={() =>
              fetch(url)
                .then((response) => response.json())
                .then((data) => setProfiles(data))
            }
          >
            Fetch Random
          </Button>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {profiles
              ? profiles.map((profile: IProfile) => (
                  <Profile key={profile.id} profile={profile} />
                ))
              : null}
          </div>
        </div>
      );
    default:
      return <NoPage />;
  }
};

export default Exercise;
