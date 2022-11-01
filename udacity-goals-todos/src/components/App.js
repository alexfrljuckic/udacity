import {connect} from "react-redux"
import { useEffect } from "react";
import ConnectedGoals from "./Goals"
import ConnectedTodos from "./Todos"
import { handleInitialData} from "../actions/shared"

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  if (props.loading === true) {
    return <h3>Loading</h3>;
  }

  return (
    <div>
      <ConnectedTodos />
      <ConnectedGoals />
    </div>
  );
};

export default connect((state) => ({
  loading: state.loading,
}))(App);