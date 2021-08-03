import React, {useState, useContext} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import './App.css';

const Context = React.createContext()
const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

export function AuthContext({children}) {
  const [logStatus, setLoggedin] = useState({
    loggedIn: false,
    loading: false
  })
  const logger = {
    login: () => {
      setLoggedin((prevState) => {
        return {
          loggedIn: prevState.loggedIn,
          loading: true
        }
      })
      wait(1000).then(()=>{
        setLoggedin((prevState) => {
          return {
            loggedIn: true,
            loading: false
          }
        })
      })
    },

    logout: () => {
      setLoggedin((prevState) => {
        return {
          loggedIn: prevState.loggedIn,
          loading: true
        }
      })
      wait(1000).then(()=>{
        setLoggedin((prevState) => {
          return {
            loggedIn: false,
            loading: false
          }
        })
      })
    },
    loggedIn: logStatus.loggedIn,
    loading: logStatus.loading
  }
  return (
    <Context.Provider value={logger}>
      {children}
    </Context.Provider>
  );
}

function About() {
  const logger = useContext(Context)
  return (
    <div className="body">
      <h1>About</h1>
      <div>{logger.loggedIn?"You are logged in":"You are not logged in"}</div>
    </div>
  );
}

function Home() {
  const logger = useContext(Context)
  return (
    <div className="body">
      <h1>Home</h1>
      <div>
        {
          logger.loggedIn?"You are Logged In":"You need to log in to access dashboard and profile"
        }
      </div>
      {
        logger.loading?
          logger.loggedIn?
              <h1>Logging Out...</h1> :
            <h1>Logging In...</h1>:
          logger.loggedIn?
            <button onClick={() => logger.logout()} className="log">Logout</button> :
            <button onClick={() => logger.login()} className="log">Login</button>
      }
    </div>
  );
}

function Profile() {
  const logger = useContext(Context);
  const loggedIn = logger.loggedIn;
  return (
    <Route>
      <div className="body">
      <h1>Profile</h1>
      {
        loggedIn ? "Welcome to Your Profile": <Redirect to="/"/>
      }
      </div>
    </Route>
);
}

function Dashboard() {
  const logger = useContext(Context);
  return (
    <Route>
      <div className="body">
      <h1>Dashboard</h1>
      {
        logger.loggedIn ? "Welcome to Dashboard" : <Redirect to="/"/>
      }
      </div>
    </Route>
  );
}


function App() {
  return (
    <div>
      <Router>
        <nav class="navbar">
          <button class="nav-buttons"><Link to="/" className="links">Home</Link></button>
          <button class="nav-buttons"><Link to="/about" className="links">About</Link></button>
          <button class="nav-buttons"><Link to="/profile" className="links">Profile</Link></button>
          <button class="nav-buttons"><Link to="/dashboard" className="links">Dashboard</Link></button>
        </nav>
        <Switch>
          <AuthContext>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/dashboard" component={Dashboard}/>
          </AuthContext>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
