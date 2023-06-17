
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/header/header';
import List from './components/list/list';
import PageSecond from './components/pageSecond/pageSecond';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List></List>}></Route>
          <Route path="/List" element={<List></List>}></Route>
          <Route path="/PageSecond" element={<PageSecond></PageSecond>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;


{/* <Counter></Counter> */ }

{/* <div className="App">
          <header className="App-header">
            react react
            <List></List>
            <ListEl></ListEl>
            <PageSecond></PageSecond>
          </header>
        </div> */}