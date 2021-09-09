import { Route, Router, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main';
import Blog from './Components/Blog/Blog'
import Navbar from './Components/Navbar/Navbar'
import ReactNotification from 'react-notifications-component'
import Saved from './Components/Saved/Saved';
import Liked from './Components/Liked/Liked';
import { useEffect } from 'react';
import SingleBlog from './Components/Single-Blog/SingleBlog';
function App() {

  let history = useHistory();
  const getLikesStorage = localStorage.getItem('likes');
  if (!getLikesStorage) {
    localStorage.setItem('likes', JSON.stringify([0]));
  }
  const getSavesStorage = localStorage.getItem('saves');
  if (!getSavesStorage) {
    localStorage.setItem('saves', JSON.stringify([0]));
  }
  return (
    <div className="App">
      <ReactNotification />
      <Navbar />
      <Router history={history}>
        <Switch>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path = "/blog/:slug">
            <SingleBlog />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
