import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import './App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AccountContainer from './containers/AccountContainer';
import HomeContainer from './containers/HomeContainer';
import DiscoverContainer from './containers/DiscoverContainer';
import PostContainer from './containers/PostContainer';
import NewPostContainer from './containers/NewPostContainer';
import FollowingContainer from './containers/FollowingContainer';
import AuthContainer from './containers/AuthContainer';


const App = () => {

  const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false);

  useEffect(() => {
    document
      .getElementsByTagName("BODY")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [checked]);

  // Funcion para cambiar de modo
  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      setChecked(false);
    }
  };

  const themeData = ({
    theme: checked,
      setTheme: toggleThemeChange
  })

  return (
    <ThemeContext.Provider value={themeData}>
      <Router>
        <div className="App">

          <Switch>

            <Route exact path='/:name/following' render={props => <FollowingContainer {...props.match.params} /> } />
            <Route exact path='/:name/new' render={props => <NewPostContainer {...props.match.params} /> } />
            <Route exact path='/:name/:place' render={props => <AccountContainer {...props.match.params} />} />
            <Route exact path='/:user_name/gallery/:id_post' render={props => <PostContainer {...props.match.params} />} />
            <Route exact path='/discover' component={DiscoverContainer} />
            <Route exact path='/:auth' render={props => <AuthContainer {...props.match.params} />} />
            <Route exact path='/'>
              <HomeContainer />
            </Route>

          </Switch>
          
        </div>
      </Router>
    </ThemeContext.Provider>
    
    
  );
}

export default App;
