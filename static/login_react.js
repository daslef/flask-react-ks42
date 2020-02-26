import 'react-dom-production'
import 'react-production'

class Input extends React.Component {
  
    constructor(props) {
      super(props);
    }
    
    render() {
      return (
        <div className="Input">
          <label for="input1">{this.props.labelText}</label>
          <input
            id="input1" 
            type={this.props.type} 
            name={this.props.name}
            placeholder={this.props.placeholder}
            required
          />
        </div>
      )
    }
  }
  
  class Form extends React.Component {
    
    constructor(props) {
      super(props);
    }
    
    render() {
      return (
        <div className="Form">
          <h2>Enter to your Cabinet</h2>
          <Input 
            labelText="email"
            type="email" 
            name="email" 
            placeholder="user@gmail.com"
          />
          <Input
            labelText="password"
            type="password" 
            name="password"
            placeholder="qwerty"
          />
          <a>Submit</a>
        </div>
      )
    }
  }
  
  const App = function() {
    return (
      <div class="App">
        <Form />
      </div>
    )
  }
  
  
  ReactDOM.render(App(), document.getElementById('app'));