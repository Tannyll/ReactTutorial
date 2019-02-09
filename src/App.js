import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Users from './components/Users';

class App extends Component {

  state  = {
    users: [
      {
        id : 1,
        Name : "Serdar EMIRCI",
        Salary : "5000.TL",
        Department : "IT",
        City : "Adana",
        Years :  "39"
      },
      {
        id : 2,
        Name : "Ebru EMIRCI",
        Salary : "3000.TL",
        Department : "Manager",
        City : "Ankara",
        Years :  "41"
      },
      {
        id : 3,
        Name : "Asya EMIRCI",
        Salary : "1000.TL",
        Department : "Student",
        City : "Ankara",
        Years :  "12"
      },
      {
        id : 4,
        Name : "Ismail EMIRCI",
        Salary : "4000.TL",
        Department : "Ciftci",
        City : "Adana",
        Years :  "58"
      },
    ] 
  }
  
  deleteUser = (id) => {
    this.setState({
        users : this.state.users.filter(user => id !== user.id)
    })
  }

  render() {
    const test = 39;
    const isAuth = true;
    return (
      <div className="container">

     <h1>Merhaba React</h1>

     <h4>{"serdar".toUpperCase() }</h4>

     <h4> {4*5}</h4>

     <div>
       {
         isAuth ? <p>Kayıtlı Kullanıcı</p>
         : null
       }
     </div>

    <h4>{test}</h4>

    <h4 className="headerTest" >App User</h4>
    <h4 style={{color:"red", fontSize:"30px"}} >App Component</h4>
    <hr/>
    <Users deleteUser = {this.deleteUser} users = {this.state.users} />
    <hr/>

    
{/*     <User
    Name="Serdar EMIRCI"
    Salary="7000.TL"
    Department="Software Development Engineering"
    Years="39"
    City="Ankara"
    />

    <User
    Name="Ebru EMIRCI"
    Years="41"
    City="Ankara"
    /> */}

    <hr/>

     <h4 className="headerTest">App NavBar</h4>
     <NavBar title="App Title"/>
    <hr/>
    
      </div>
    );
  }
}

export default App;
