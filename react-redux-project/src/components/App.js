import '../styling/App.css';
import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import Login from './Login';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
import Home from './Home';
import Question from './Question';
import { handleInitialData } from '../actions/shared';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import ErrorPage from './ErrorPage';
import RequireAuth from './RequireAuth';

const App = (props) => {
  
  useEffect(() => {
    props.dispatch(handleInitialData())
  }, []);

  return (
    <Fragment>
      <div>
        {
          props.authedUser && <Nav/>
        }
        <Routes>
            <Route path="/" exact element={<Login/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/LeaderBoard" element={<LeaderBoard/>}/>
            <Route path="/add" element={<NewQuestion/>}/>
            <Route path="/questions/:id" element={<RequireAuth><Question/></RequireAuth>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
