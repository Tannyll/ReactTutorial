import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
  
  constructor(props){
    super(props)

    this.state = {

      isVisible : false

    }

  // Bind etmenin ikinci yolu
  // this.onClickEvent = this.onClickEvent.bind(this);

  }

  static defaultProps = {
    Name : "Bilgi yok",
    Department : "Bilgi yok",
    Salary : "Bilgi yok",
    Years : "",
    City : ""
  }

  // Arrow functions
  onClickEvent = (number, e) => {

    console.log(this);
    console.log(this.props.Name)
    console.log(number)

    this.setState(
      {
        isVisible : !this.state.isVisible
      }
    )

  }

  onDeleteUser = (e) => {

    const {id,deleteUser} = this.props;

    deleteUser(id);

  }

  render() {

    // Destructing
    const { Name,Department,Salary,Years,City }  = this.props;
    const { isVisible } = this.state;

    return (
      <div className="col-md-8 mb-4">
      
        <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h4 className="d-inline" onClick={this.onClickEvent.bind(this,66)}>{ Name }</h4>
              <i onClick={this.onDeleteUser} className="far fa-trash-alt" style={{ cursor:"pointer" }}></i>
            </div>

        {
          isVisible ?
          <div className="card-body">
            <p className="card-text">Department : {Department}</p>
            <p className="card-text">Salary : {Salary}</p>
            <p className="card-text">Years : {Years}</p>
            <p className="card-text">City : {City}</p>
           
        </div>
          : null
        }

        </div>



      </div>
    )
  }
}

User.propTypes = {
  Name : PropTypes.string.isRequired,
  Department : PropTypes.string.isRequired,
  Years : PropTypes.string.isRequired,
  Salary : PropTypes.string.isRequired,
  City : PropTypes.string.isRequired, 
  deleteUser: PropTypes.func.isRequired
}
export default User;
