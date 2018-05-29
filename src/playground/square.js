console.log('Simple calculator');

const cal = {
  number: 'abc' 
};
 
const handleSquare = (e) =>{
    e.preventDefault();
const number = e.target.elements.num.value;
  if(number){
    const numbers = number* number;   
    e.target.elements.num.value = numbers;
    cal.number = numbers;
    render();
  }
};

const cancel = (e) =>{
   e.preventDefault();
   document.getElementById('nm').value = '';
   cal.number = '';
   render();   
};
const appRoot = (document.getElementById('index'));
const render = () =>{
    const calc = (
        <form onSubmit={handleSquare}>
        <input type="number" name="num" id="nm"/>
        <button type="Submit">Square</button>
        <button type="button" onClick = {cancel}>Cancel</button>        
        <p>{cal.number}</p>
        </form>
    ); 
    ReactDOM.render(calc, appRoot);
};
 render();
 