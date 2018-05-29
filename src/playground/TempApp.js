console.log('App.js is running');

//JSX is here -Javascript XML
// for temp
const app = {
  Title: 'Head of app',
  SubTitle: 'Title of the form',
  Option: ['Dashboard', 'Items'],
};
function getLength(option) {
  // option in function and option in app objects are different
  if (option.length > 0) {
    return (
      <ol>
        <h3>Here are the Options</h3>
        <li>{app.Option[0]}</li>
        <li>{app.Option[1]}</li>
      </ol>
    );
  } else {
    return 'No options';
  }
}
const temp = (
  <div>
    <h1 id="someid">{app.Title}</h1>
    <h2>{app.SubTitle && <p>Sub Title : {app.SubTitle}</p>}</h2>
    {getLength(app.Option)}
  </div>
);
//for temp2
function getLocation(Location) {
  if (Location) {
    return <p>Location : {Location} </p>;
  }
}
function getGender(Gender) {
  if (Gender) {
    return <p>Gender : {Gender} </p>;
  } else {
    return 'Undefined';
  }
}
function getContact(Contact) {
  // contact is same arugment used in user.
  if (Contact) {
    return '9803778899'; // if there is a value in user object in contact variable.
  } else {
    return 'Null';
  }
}
let user = {
  name: 'Matina',
  age: 24,
  Location: 'Chhetrapati',
  Gender: 'Male', //
  Contact: true, //
};
const temp2 = (
  <div>
    <h1>{user.name}</h1>
    <h3>{false ? user.nickName : 'Twinkl3'}</h3>
    {user.age >= 18 && <p>Age : {user.age}</p>}
    {getLocation(user.Location)}
    <p>Gender : {user.Gender ? user.Gender : 'Female'}</p>
    <p>Contact : {getContact(user.Contact)}</p>
  </div>
);

const appRoot = document.getElementById('index');
ReactDOM.render(temp, appRoot);




