import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AllProductArea from './components/AllProductArea/AllProductArea';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Footer from './components/Shared/Footer/Footer';
import Navbar from './components/Shared/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/all'>
            <Dashboard></Dashboard>
          </Route>
          <Route path='/register'>
            <SignUp></SignUp>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
