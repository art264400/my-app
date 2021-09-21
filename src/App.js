import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Diaglogs from './components/Dialogs/Diaglogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/Dialogs' component={Diaglogs} />
          <Route path='/Profile' component={Profile} />
          <Route path='/Music' component={Music} />
          <Route path='/News' component={News} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
