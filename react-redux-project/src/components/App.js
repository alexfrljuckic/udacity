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
          <Route path="/new" element={<NewQuestion/>}/>
          <Route path="/question/:id" element={<Question/>}/>
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
