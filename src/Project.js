import React, { Component } from 'react';
import axios from 'axios';

class Projectitem extends Component {


    state={
       Project:'',
       Description:''
    }



    onChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }



    fileUpload=()=>{


        const user ={
            Project:this.state.Project,
            Description:this.state.Description
        }
      
    axios.post('https://jsonplaceholder.typicode.com/users',{user} )
    .then(res=>{
        console.log(res);
        console.log(res.data);
    })
     


}


    
render() {
        return (
            <div className="card" style={{width:'18rem', margin:'50px'}} >
                <div class="card-body">
            <label>EnterProjectName</label>
               <input type="text" onChange={this.onChange} name='text' />
               <label>Description</label>
               <input type="text" onChange={this.onChange} name='text' required/>
                <button  className="btn btn-primary" onClick={this.fileUpload} >ok</button>
                </div>
            </div>
        )
    }
}


export default Projectitem;

