import React, { useEffect, useState } from 'react';
import Animal from '../components/Animal';
import Button from '../components/Button';
import NoPage from './NoPage';
import './pages.css';
import punchlines from '../resources/static/punchlines.json';
import Profile from '../components/Profile';

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
          <h1>Exercise 1</h1>
          <div className='container center'>
            <div className='child center'>Hello World!</div>
          </div>
        </div>
      );
    case 2:
      return (
        <div>
          <h1> Exercise 2</h1>
          <button onClick={() => alert('Clicked!')}>Click Me</button>
        </div>
      );
    case 3:
      return (
        <div>
          <h1>Exercise 3</h1>
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
          <h1>Exercise 4</h1>
          <p className='center'>Button has been clicked: {counter} times</p>
          <span className='center'>
            <Button onClick={() => setCounter(counter + 1)}>Click Me</Button>
          </span>
        </div>
      );
    case 5:
      return (
        <div>
          <h1>Exercise 5</h1>
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
          <h1>Exercise 6</h1>
          {animals.map((animal) => (
            <Animal animal={animal} />
          ))}
        </div>
      );
    case 7:
      return (
        <div>
          <h1>Exercise 7</h1>
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
      );
    case 8:
      return (
        <div style={{ backgroundColor: '#e2f5da', paddingBottom: '1rem' }}>
          <h1>Exercise 8</h1>
          <div className='center'>
            {punchlines.map((punchline: IPunchline) => (
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <h1 className='center'>{punchline.setup}</h1>
                  </div>
                  <div className='flip-card-back'>
                    <h1 className='center'>{punchline.punchline}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case 9:
      return (
        <div>
          <h1>Exercise 9</h1>
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
          {profiles
            ? profiles.map((profile: IProfile) => (
                <Profile key={profile.id} profile={profile} />
              ))
            : null}
        </div>
      );
    default:
      return <NoPage />;
  }
};

export default Exercise;
