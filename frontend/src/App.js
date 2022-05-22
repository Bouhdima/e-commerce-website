/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from './components/Navbar';
import './App.css';
export const App = () => {
  return (
    <BrowserRouter>
      <div className="App bg-black">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />}></Route>
            <Route path="/" exact element={<HomeScreen />}></Route>
          </Routes>
            </main>
      </div>
    </BrowserRouter>
  );
};
export default App;
