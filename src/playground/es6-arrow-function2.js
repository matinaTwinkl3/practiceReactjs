const user = {
  name: 'Matina',
  Locations: ['Chhetrapati', 'Dhalku', 'KTM'],
  // printplace : function (){
  //     const that = this;
  //     this.Locations.forEach(function(location){
  //         console.log(that.name + " is living in " + location );
  //     });
  // } console.log(printplace);
  //Using old js fucntion ES5
  // printplace : function (){
  //     this.Locations.forEach((location) => {
  //         console.log(this.name + " is living in " + location );
  //     });
  // } 

  // this is ES6 function synax using arrow fucntion
  // printplace() {
  //     this.Locations.forEach((location) => {
  //         console.log(this.name +' is living in '+ location);
  //     });
  // }
  // Map function in ES6 will call the every items one time
  // in the array and create a new array.
  //   printplace() {
  //     const locationInfo = this.Locations.map(location => {
  //       return this.name + ' has lived in ' + location;
  //     });
  //     return locationInfo;
  //   }
  //const locationInfo will create an array locationInfo with
  //the same value of the locations.
  printplace() {
    return this.Locations.map(
      location => this.name + ' has lived in ' + location
    );
  },
};
console.log(user.printplace());

// const multiplier = {
//   numbers: [1, 2, 3, 4],
//   power: 2,
//   multiple : function() {
//     this.numbers.forEach(number => {
//        console.log(this.numbers +" "+ number*this.power);
//     });
// }
// };
// multiplier.multiple();

const multiplier = {
    numbers : [10,20,30],
    multiplyBy : 3,
    multiple(){
       return this.numbers.map(
           number => number*this.multiplyBy
       );
    }
};
console.log(multiplier.multiple());
