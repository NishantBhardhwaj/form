import React, { Component } from 'react';
import './App.css'



class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
      name:'ex-Nishant',
      email:'ex-xyz@gmail.com',
      phone:'ex-70235354'
     };
  }

  changeHandeler=(e)=>{
    const key=e.target.name;
    const val=e.target.value;
    this.setState({[key]:val});
  }

  changeSubmit=(e)=>{
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({name:'',email:'',phone:''});

  }
 
  render() { 
    return ( 
      <>
    <center> <h1>Contact Details</h1></center>
     <form onSubmit={this.changeSubmit}>
       <label>
         Name: 
         <input  type="text" name="name" value={this.state.name}  onChange={this.changeHandeler}/>
       </label><br/><br/>
       <label>
         email: 
         <input  type="email" name="email" value={this.state.email}  onChange={this.changeHandeler}/>
       </label><br/><br/>
       <label>
         Phone Number: 
         <input  type="text" name="phone" value={this.state.phone}  onChange={this.changeHandeler}/>
       </label><br/><br/>
       <input class="btn btn-outline-primary" type="submit" value="submit"/>
       
       </form> 
      </>
     );
  }
}


export default App;
