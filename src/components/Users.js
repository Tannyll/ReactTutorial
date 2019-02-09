import React, { Component } from 'react'
import User from './User';

class Users extends Component {
    
  render() {
    const {users,deleteUser} = this.props;

    return (
      <div>
        {
            users.map(user => {
                return (
                    <User 
                        key = {user.id}
                        id = {user.id}
                        Name = {user.Name}
                        Department = {user.Department}
                        Salary = {user.Salary}
                        Years = {user.Years}
                        City = {user.City}
                        deleteUser = {deleteUser}
                    />
                )
            })
        }
      </div>
    )
  }
}
/* Users.prototype = {
    users: PropTypes.array.isRequired,
    deleteUser: PropTypes.func.isRequired
} */
export default Users
