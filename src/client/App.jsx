import React from 'react';
import { hot } from 'react-hot-loader';

class Form extends React.Component {
    constructor(){
      super()

      this.state = {
        word : "",
        list: ""
      }
    }

    changeHandler(event){
      this.setState({word:event.target.value});
      console.log("change", event.target.value);
    }



    render() {
        var createTask = () => {
            console.log("a task is created!");
            this.setState({list: this.state.word})
        }

        console.log("rendering");
        return (
          <div>

            <p>{this.state.word}</p>
            <p>{this.state.list}</p>
            <input onChange={(event)=>{this.changeHandler(event);}}/>
            <button onClick={createTask}>Create Task</button>
          </div>
        );
    }
}


class App extends React.Component {
  render() {
    return (
      <div>
        Welcome.
        <Form/>
      </div>
    );
  }
}

export default hot(module)(App);