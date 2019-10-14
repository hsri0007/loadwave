import React from 'react';
import axios from'axios';
import 'bootstrap/dist/css/bootstrap.min.css';





class Upload extends React.Component {



  state={
upLoading:null

  }



  onChange=(event)=>{

  this.setState({upLoading:event.target.files[0]})

  }


  fileUpload=()=>{
    const fd = new FormData();
    
    fd.append('scriptFile', this.state.upLoading, this.state.upLoading.name)

  axios.post('https://jsonplaceholder.typicode.com/posts',fd)
    .then(res=>{
      console.log(res);
    })
  

  }

 


  render(){

    return (
      <div >
     

     <div  >
     
    
       <input type="file" onChange={this.onChange}  accept=".jmx"/>
    
       <button onClick={this.fileUpload} >upload</button>
    
      
    
       
       </div>

      </div>
    );

  }
 
}

export default Upload;
