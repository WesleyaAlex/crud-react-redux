import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import Navbar from './components/Navbar'
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
