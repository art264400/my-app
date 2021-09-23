import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';

const App = (props) => { 
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/Dialogs'  render={ () => <Dialogs dialogsData={props.dialogsData} messageData={props.messageData} /> } />
          <Route path='/Profile' render={ () => <Profile  posts={props.posts}/> } />
          <Route path='/Music' render={ () => <Music /> } />
          <Route path='/News' render={ () => <News /> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
