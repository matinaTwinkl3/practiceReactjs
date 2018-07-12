
console.log('preson.js is running!!');

const isAdult = (age) =>  {
    if (age>=18){
        return true
    }else  {
        return false
    }
};
const canDrink = (age) =>  {
    if (age>=21){
        return true
    }else  {
        return false
    }
};
const isSenior = (age) => age >=65;

export { isAdult, canDrink ,isSenior as default}; 


