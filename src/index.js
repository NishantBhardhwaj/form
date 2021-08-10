import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Button,Container} from 'react-bootstrap';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; 


class Form extends Component {
  state = {
    result:{}
    }

   onSubmit=(val)=>{
     this.setState({result:val});
   } 
  render() { 
    return (
      <>
      <div className="container">
      <App  onSubmit={this.onSubmit}/>
     <center> <h3>{JSON.stringify(this.state.result)}</h3></center>
     </div>
      </>
      );
  }
}
 
export default Form;

ReactDOM.render(<Form/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vital
