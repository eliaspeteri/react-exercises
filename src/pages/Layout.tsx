import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li className='App-Link'>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='1'>Exercise 1</Link>
          </li>
          <li>
            <Link to='2'>Exercise 2</Link>
          </li>
          <li>
            <Link to='3'>Exercise 3</Link>
          </li>
          <li>
            <Link to='4'>Exercise 4</Link>
          </li>
          <li>
            <Link to='5'>Exercise 5</Link>
          </li>
          <li>
            <Link to='6'>Exercise 6</Link>
          </li>
          <li>
            <Link to='7'>Exercise 7</Link>
          </li>
          <li>
            <Link to='8'>Exercise 8</Link>
          </li>
          <li>
            <Link to='9'>Exercise 9</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
