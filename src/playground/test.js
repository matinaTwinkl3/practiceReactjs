console.log("App.js is running");

var app = {
    title: 'Indecision App',
    subtitle: 'What should you do?',
    options: ['one','two']
};

const onFormSubmit = (e) =>{
  e.preventDefault();

  const option = e.target.elements.option.value;
  console.log(option);
  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
  }
};
var template = (
  <div>
    <h1>{app.title} </h1>
    {app.subtitle &&  <p>{app.subtitle} </p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
    <ol>
      <li>Option 1</li>
      <li>Option 2</li>
      <li>Option 3</li>
    </ol>
  
  <form onSubmit={onFormSubmit}>
    <input type='text' name='option'/>
    <button>Add</button>
  </form>
  </div>
);
var u = {
    name : 'Bishesh',
    Anniversary : '29th May'
};
var template2 = (
  <div>
    <h1>BishMati&lt;3</h1>
    <p>{u.name}</p>
    <p>Anniversary: {u.Anniversary} </p>
  </div>
);
var appRoot = document.getElementById("index");

ReactDOM.render(template, appRoot);