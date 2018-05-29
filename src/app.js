class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePick = this.handlePick.bind(this);  
    this.handleAddOptions = this.handleAddOptions.bind(this); 
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
    this.state = {
      options : []
    }
  }
  componentDidMount() {
   try{
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);
      if(options){
        this.setState( () => ({options}) );
      }
   }catch(e){

   }
  }
  componentDidUpdate(prevProps,prevState) {
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);   
    }
  }
  componentWillUnmount() {
    console.log('Will Unmount');    
  }
  handleRemoveAll(){
    this.setState( () => ({ options : [] })  );
  }
  handlePick ()  {
  const randomNumders = Math.floor(Math.random() * this.state.options.length); 
  const option = this.state.options[randomNumders];
  alert(option);
  }
  handleRemoveOption (optionToRemove) {
    this.setState ((prevState) => ({
      options : prevState.options.filter ((option) =>  {
        return optionToRemove !== option;
      })
    }));
  }
  handleAddOptions(option){
    if(!option){
      return "Enter a valid input to add items"
    }else if (this.state.options.indexOf(option) > -1){
      return "This input already exists"
    }

    // this.state ( (prevState) => ({
    //   options: prevState.options.concat(option)
    // }) );
    this.setState ( (prevState) =>{
      return {
      options : prevState.options.concat([option])
     } 
    });
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleRemoveAll={this.handleRemoveAll}
          handleRemoveOption = {this.handleRemoveOption}
        />
        <AddOptions handleAddOptions={this.handleAddOptions}/>
      </div>
    );
  }
}

const Header = (props) =>{
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
  );
}

Header.defaultProps = {
  title : 'Indecision App'
}
//class-based component

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick}
      disabled={!props.hasOptions}
      >
        What should i do?
      </button>
    </div>
  );
}

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handlePick}
//         disabled={!this.props.hasOptions}
//         >
//           What should i do?
//         </button>
//       </div>
//     );
//   }
// }

const Options = (props) =>{
  return (
    <div>
    <button 
      onClick = {props.handleRemoveAll}
    >Remove ALL</button>
    {props.options.length === 0 && <p>Add an options to get started</p>}
  {
    props.options.map((option) => 
      <Option key={option} 
      optionText={option}
      handleRemoveOption = {props.handleRemoveOption}      
      />
    )
  } 
  
  </div>
  );
}

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//       <button 
//         onClick = {this.props.handleRemoveAll}
//         disabled = {!this.props.disableRemoveAll} 
//       >Remove ALL</button>
//     {
//       this.props.options.map((option) => <Option key={option} optionText={option}/>)
//     } 
    
//     </div>
//     );
//   }
// }

const Option = (props) => {
  return (
    <div>
    {props.optionText}
    <button 
      onClick = { (e) => {
      props.handleRemoveOption(props.optionText)
    }}
    >
      Remove
    </button>
    </div>
  );
}

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//       {this.props.optionText}
//       </div>
//     );
//   }
// }

class AddOptions extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOptions = this.handleAddOptions.bind(this);
    this.state = {
      error : undefined
    }
  }
  handleAddOptions(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOptions(option);

    this.setState( () => ({error}) );

    if(!error){
      e.target.elements.option.value = '';
    }

    // this.setState( () => {
    //   return{ error : error }
    // });
    
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOptions}>
        <input type="text" name="option"/>
          <button type="Submit">Add Options</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('index'));
