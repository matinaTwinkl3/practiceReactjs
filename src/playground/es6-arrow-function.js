console.log('Working arrow function');

function number(x){
    return x*x;
   }
   console.log(number(5));
   
   const numbers = function(x){
   return x*3*x;
   }
   console.log(numbers(2));
   
   const numberss = (x) => {
       return x%2;
   }
   console.log(numberss(9));

const fullName = 'Matina Maharjan';
const getFirstName = (fullName) => {
        return fullName.split(' ')[0];
};
console.log(getFirstName(fullName));

const getFName = (fullName) => fullName.split(' ')[0];
console.log(getFName(fullName));





