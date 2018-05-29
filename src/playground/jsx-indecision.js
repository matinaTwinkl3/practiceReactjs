console.log('Indecision App Running');

const app = {
  Title: 'Indecision App',
  SubTitle: 'Put your life is in hands of the computer',
  Options: [],
};

const clickReset = () => {
  app.Options = [];
  renderAppForm();
};

const handleSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.Options.push(option); 
    e.target.elements.option.value = ' ';
    renderAppForm();
    console.log(option);
  }
};

const showRandom = () =>{
  const randomNumders = Math.floor(Math.random() * app.Options.length); 
  const option = app.Options[randomNumders];
  alert(option);
};

const root = document.getElementById('index');

const renderAppForm = () => {
  const appForm = (
    <div>
      <h1>{app.Title}</h1>
      <p>{app.SubTitle}</p>
      <p>{app.Options.length > 0 ? 'Here are the options' : 'No options'}</p>
      <button type="button" disabled = {app.Options.length==0} onClick={showRandom}>What Should i do? </button>
      <button type="button" onClick={clickReset}>
        Remove All
      </button>
      <ol>
        {
          app.Options.map( (option) => <li key= {option} > {option} </li> )
        }
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" name="option" />
        <button type="Submit">Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(appForm, root);
};
renderAppForm();
