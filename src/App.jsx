import { Routes, Route } from 'react-router';
import { Contact, Home, NotFound, Register, Search } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/search' element={<Search />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
