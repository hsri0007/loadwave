import React, { Component } from 'react';
import axios from 'axios';




class Projectitem extends Component {


    state={
     input:''
    }



    onChange=(event)=>{
        this.setState({input:event.target.value})
    }



    fileUpload=()=>{


        const user ={
            input:this.state.input
        
         
        }
      
    axios.post('https://jsonplaceholder.typicode.com/users',{user} )
    .then(res=>{
        console.log(res);
        console.log(res.data);
    })
     


}


    
render() {
        return (
            <div>
            
               <input class="form-control" style={{width:'18rem'}} type="text" onChange={this.onChange} name='text' />
             
                <button  className="btn btn-primary" onClick={this.fileUpload} >click</button>
             
            </div>
        )
    }
}


export default Projectitem;

