import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import AllProductArea from './components/AllProductArea/AllProductArea';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Footer from './components/Shared/Footer/Footer';
import Navbar from './components/Shared/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Purchase from './components/Purchase/Purchase';
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/allProduct'>
              <AllProductArea></AllProductArea>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path='/purchase/:id'>
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path='/register'>
              <SignUp></SignUp>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Router path="*">
              <NotFound></NotFound>
            </Router>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
