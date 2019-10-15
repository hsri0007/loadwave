import React from 'react';
import axios from'axios';
import 'bootstrap/dist/css/bootstrap.min.css';







class Upload extends React.Component {

          state={
          upLoading:null,
          message:'',
          gettingInput:''
          }



  onChange=(event)=>{
    this.setState({upLoading:event.target.files[0]})
    }


          fileUpload=(e)=>{
            e.preventDefault();
            const fd = new FormData();
                       fd.append('scriptFile', this.state.upLoading,this.state.upLoading.name)
                              axios.post('https://jsonplaceholder.typicode.com/users',fd,{
                      onUploadProgress:ProgressEvent=>{
            this.setState({message:'file uploaded succesfully'+ Math.round(ProgressEvent.loaded/ ProgressEvent.total * 100)+'%'} )
          }
        })
            .then(res=>{
              console.log(res)
            })
    
  

  }

 


  render(){

    return (
      <div   >
     

     <div className="card" style={{width:'18rem', margin:'50px'}}>
        <input type="file" onChange={this.onChange}  accept=".jmx" noValidate/>
              <button  className="btn btn-primary" onClick={this.fileUpload} >upload</button>
                  <h1 style={{color:'green'}} >{this.state.message}</h1>
            <h1 style={{color:'green'}} >{this.state.gettingInput}</h1> 
       </div>
    </div>
    );

  }
 
}

export default Upload;
