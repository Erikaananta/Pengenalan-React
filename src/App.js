import React, {Component} from 'react';  
import './App.css';  
import Alert from "./Components/Alert"
import Media from "./Components/Media"

class App extends Component { 
  constructor(){
    super();  
    this.state = {  
      type: "secondary",  
      header: "Body Mass Index",  
      content: ""  
    }
  }

  // fungsi untuk mengubah tipe  
  changeTypeAlert = (event) =>{  
    this.setState({type: event.target.value});  
  }  
  // fungsi untuk mengubah header  
  changeHeaderAlert = (event) => {  
    this.setState({header: event.target.value});  
  }  
  // fungsi untuk mengubah content  
  changeContentAlert = (event) => {  
    this.setState({content: event.target.value});  
  }

  render(){  
    return (  
      <div className="container">
      <div className="row justify-content-center">
              <div className="col-md-6">
              <div className="App container">  
              <Alert type="danger" text="center" header="Konversi Bilangan Biner"></Alert> 
                 </div>
                  <form>
                      <div className="form-group">
                          <label>Binner</label>
                          <input type="text" className="form-control" placeholder="berat" />
                      </div>
                      <div className="form-group">
                          <label for="">Pilihan konversi</label>
                          <select className="form-control" name="type" value={this.state.type}  
                           onChange={this.changeTypeAlert}>  
                          <option value="success">Oktal</option>  
                          <option value="warning">Heksadesimal</option> 
                          <option value="danger">Binner</option>  
                          <option value="info">Decimal</option>  
                        </select>
                      </div>  
                    <div className="App container">
                      <div className="App container"> 
                   <Alert className="form-control"></Alert> 
                      <button type="submit" class="btn btn-danger btn-lg btn-block">convert</button> 
                      </div>
                      <div className="App container"> 
                      <div className="form-group">
                          <label for="">hasil</label>
                          <input type="text" className="form-control" placeholder="berat" />
                      </div> 
                      </div>
                    </div>
                </form> 
            </div>
      </div>
  </div> 
    );  
  }



  // render(){  
  //   return (  
  //     <div className="container">
  //     <div className="row justify-content-center">
  //             <div className="col-md-6">
  //             <div className="App container">  
  //             <Alert type="secondary" text="center" header="Body Mass Index"></Alert> 
  //                </div>
  //                 <form>
  //                     <div className="form-group">
  //                         <label>Berat</label>
  //                         <input type="text" className="form-control" placeholder="berat" />
  //                     </div>
  //                     <div className="form-group">
  //                         <label for="">Tinggi</label>
  //                         <input type="text" className="form-control" placeholder="berat" />
  //                     </div>  
  //                   <div className="App container">
  //                     <div className="App container"> 
  //                  <Alert className="form-control"></Alert> 
  //                                            <button type="submit" class="btn btn-info btn-lg btn-block">Submit</button> 
  //                       <Alert text="center" type="" header="Hasil"></Alert>
  //                     </div>
  //                     <div className="App container"> 
  //                       <Alert text="center" type="success" content="">Anda Kurus</Alert>
  //                     </div>
  //                   </div>
  //               </form> 
  //           </div>
  //     </div>
  // </div> 
  //   );  
  // }

  // fungsi untuk mengubah tipe  
  changeTypeAlert = (event) =>{  
    this.setState({type: event.target.value});  
  }  
  // fungsi untuk mengubah header  
  changeHeaderAlert = (event) => {  
    this.setState({header: event.target.value});  
  }  
  // fungsi untuk mengubah content  
  changeContentAlert = (event) => {  
    this.setState({content: event.target.value});  
  }
  // constructor(){
  //   super();  
  //   this.state = {  
  //     type: "success",  
  //     header: "React JS itu...",  
  //     content: "seru dan menyenangkan"  
  //   }
  // }

  // // fungsi untuk mengubah tipe  
  // changeTypeAlert = (event) =>{  
  //   this.setState({type: event.target.value});  
  // }  
  // // fungsi untuk mengubah header  
  // changeHeaderAlert = (event) => {  
  //   this.setState({header: event.target.value});  
  // }  
  // // fungsi untuk mengubah content  
  // changeContentAlert = (event) => {  
  //   this.setState({content: event.target.value});  
  // }


  // render(){  
  //   return (  
  //     <div className="App container">  
  //       <Alert type={this.state.type} header={this.state.header}>  
  //       {this.state.content}  
  //       </Alert>
  //       <hr />  
  //       <h4>Alert Control</h4>  
  //       <b className="text-left">Tipe Alert</b>  
        // <select className="form-control" name="type" value={this.state.type}  
        //   onChange={this.changeTypeAlert}>  
        //   <option value="success">Success</option>  
        //   <option value="warning">Warning</option>  
        //   <option value="danger">Danger</option>  
        //   <option value="info">Info</option>  
        // </select>  
  //       <b className="text-left">Header Alert</b>  
  //       <input  
  //         type="text" name="header" className="form-control" value={this.state.header}  
  //         onChange={this.changeHeaderAlert} />  
  //       <b className="text-left">Content Alert</b>  
  //       <input  
  //         type="text" name="content" className="form-control" value={this.state.content}  
  //         onChange={this.changeContentAlert} />
  //     </div>  
  //   );  
  // }

  // // fungsi untuk mengubah tipe  
  // changeTypeAlert = (event) =>{  
  //   this.setState({type: event.target.value});  
  // }  
  // // fungsi untuk mengubah header  
  // changeHeaderAlert = (event) => {  
  //   this.setState({header: event.target.value});  
  // }  
  // // fungsi untuk mengubah content  
  // changeContentAlert = (event) => {  
  //   this.setState({content: event.target.value});  
  // }

  // render(){  
  //   return (  
  //     <div className="App container">  
  //       <Alert type="danger" header="Fatal Error">  
  //         Ini adalah alert dengan tipe danger  
  //       </Alert>  
  //       <Alert type="success" header="Berhasil">  
  //         Ini adalah alert dengan tipe success  
  //       </Alert>  
  //       <Alert type="warning" header="Warning">  
  //         Ini adalah alert dengan tipe warning  
  //       </Alert>
  //       <Media image="react.jpg" title="React JS">  
  //         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus  
  //         scelerisque ante sollicitudin. Cras purus odio, vestibulum  
  //         in vulputate at, tempus viverra turpis  
  //       </Media>  
  //       <Media image="angular.jpg" title="Angular JS">  
  //         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus  
  //         scelerisque ante sollicitudin. Cras purus odio, vestibulum  
  //         in vulputate at, tempus viverra turpis  
  //       </Media>


  //     </div>  
  //   );  
  // }  
}  
export default App;  
