import React, {Component} from "react";
import { connect } from 'react-redux';
import UserItem from "./User";
// import { loadUser } from '../actions'

class UserList extends Component {
  render() {
    const listItems = this.props.users.map((item, index) => (
      <UserItem
        key={index}
        user={item}
      />
    ));

    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listItems}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  // loadUser: () => dispatch(loadUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)