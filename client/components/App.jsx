import React from 'react';
import List from './list/List.jsx';


class App extends React.Component {
    
    constructor(){
      super();
      this.state = {
        value: '',
        list: []
      }
    }

    handleForm(event){
        event.preventDefault();
        let title = event.target.title.value;
        this.createTask(title);
        
    }

    createTask(title){
        let task = {
           title: title,
           desc: ''
        }
        this.addTask(task);
    }

    addTask(task){
        this.setState({
          list: [ ...this.state.list, task],
        })
    }

    removeTask(i){
       this.state.list.splice(i, 1);
       this.setState({ list: this.state.list })
    }

    

    render(){
      return(

        <div className={'container'}>
          <div className={'col-md-4 col-md-offset-4'}>
            <form className={"form-inline"} onSubmit={this.handleForm.bind(this)}>
            <div className={"form-group"}>
                <input className={"form-control"} type="text" name="title" placeholder="Task"/>
              </div>
              <input className={"btn btn-success"} type="submit" value="Save" />
            </form>
          <div>
            <List list={this.state.list} removeTask={(removeTask) => this.removeTask()}/>
          </div>
          </div>
         </div>   
      )
    }
}
 

export default App;