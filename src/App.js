import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Exercise, Home, Layout, NoPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='1' element={<Exercise exercise={1} />} />
          <Route path='2' element={<Exercise exercise={2} />} />
          <Route path='3' element={<Exercise exercise={3} />} />
          <Route path='4' element={<Exercise exercise={4} />} />
          <Route path='5' element={<Exercise exercise={5} />} />
          <Route path='6' element={<Exercise exercise={6} />} />
          <Route path='7' element={<Exercise exercise={7} />} />
          <Route path='8' element={<Exercise exercise={8} />} />
          <Route path='9' element={<Exercise exercise={9} />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
