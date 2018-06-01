

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);  
    this.state = {
      count : 0
    }
  }
  componentDidMount(){
    const string = localStorage.getItem('count');
    const count = parseInt(string, this.state.count);

      if(!isNaN(count)){
        this.setState ( () => ({count}) );
      }
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.count !== this.state.count){
      localStorage.setItem('count', this.state.count );
    }
  }

  handleAddOne(){
    // console.log('Handle Add One');
    this.setState ( (prevCount) => {
      return{
      count : prevCount.count +1
      };
    });
  }
  handleMinusOne(){
    // console.log('Handle Minus One');
    this.setState ( (prevCount) => {
      return {
        count : prevCount.count -1
      };
    });
  }
  handleReset(){
    // console.log('Handle Reset');
    this.setState ( () => {
      return {
        count : 0
    };
    });
  }
  render(){
    return(      
    <div>
      <h1>Count : {this.state.count}</h1>
      <button onClick={this.handleAddOne}>+1</button>
      <button onClick={this.handleMinusOne}>-1</button>
      <button onClick={this.handleReset}>Reset</button>      
    </div>
    );
  }
}

ReactDOM.render(<Counter/>, document.getElementById('index'));

// let count = 0; 
// const plusOne = () => {
//   count ++;
//   console.log('plusOne',count);
//   renderCount();
// };
// const minusOne = () => {
//   count --;
//   console.log('minusOne');
//   renderCount();
// };
// const reset = () => {
//   count = 0;
//   console.log('reset');
//   renderCount();
// };

// const renderCount= () => {
//     const Count = (
//       <div>
//         <h1>Count : {count}</h1>
//         <button type="button" onClick={plusOne}>
//           +1
//         </button>
//         <button type="button" onClick={minusOne}>
//           -1
//         </button>
//         <button type="button" onClick={reset}>
//           Reset
//         </button>
//       </div>
//     );
//     ReactDOM.render(Count, document.getElementById('index'));
//     };
//     renderCount();