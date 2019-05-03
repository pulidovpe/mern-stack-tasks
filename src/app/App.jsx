import React, { Component } from 'react';

class App extends Component {

   constructor() {
      super();
      this.state = {
         title : '',
         description : ''
      };
      this.addTask = this.addTask.bind(this);
      this.handleChange = this.handleChange.bind(this);
   }

   addTask(ev) {
      console.log(this.state);
      ev.preventDefault();
   }

   handleChange(ev) {
      console.log(ev.target.name);
      const { name, value } = ev.target;
      this.setState({
         [name]: value
      });
   }

   render() {
      return (
         <div>
            {/* NAVIGATION */}
            <nav className="light-blue darken-4">
               <div className="container">
                  <a className="brand-logo" href="/">MERN Stack</a>
               </div>
            </nav>

            <div className="container">
               <div className="row">
                  <div className="col s5">
                     <div className="card">
                        <div className="card-content">
                           <form onSubmit={this.addTask}>
                              <div className="row">
                                 <div className="input-field col s12">
                                    <input type="text" name="title" onChange={this.handleChange} placeholder="Task Title" />
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="input-field col s12">
                                    <textarea placeholder="Task Description" name="description" onChange={this.handleChange} className="materialize-textarea"></textarea>
                                 </div>
                              </div>
                              <button type="submit" className="btn light-blue darken-4">Enviar</button>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div className="col s7"></div>
               </div>
            </div>
         </div>
      )
   }
}

export default App;