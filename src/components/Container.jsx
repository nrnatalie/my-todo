import { connect } from "react-redux";
import { addTask, toggleTask, deleteTask } from "../redux/actions";
import { Presentational } from "./Presentational";

const mapStateToProps = (state) => ({ tasks: state });

const mapDispatchToProps = (dispatch) => ({
  addTask: (text) => dispatch(addTask(text)),
  toggleTask: (id) => dispatch(toggleTask(id)),
  deleteTask: (id) => dispatch(deleteTask(id)),
});

export const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentational);
