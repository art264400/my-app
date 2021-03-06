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
        <Navbar sitebarPage={props.state.sitebarPage}/>
        <div className="app-wrapper-content">
          <Route path='/Dialogs'  render={ () => <Dialogs dialogsData={props.state.dialogsPage.dialogsData} messagesData={props.state.dialogsPage.messagesData} /> } />
          <Route path='/Profile' render={ () => <Profile  profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/> } />
          <Route path='/Music' render={ () => <Music /> } />
          <Route path='/News' render={ () => <News /> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
