function sumAll(intA, intB) {
    let sum= 0;
    let biggerNum = 0;
    let smallerNum = 0;

    //compares numbers and sets them in bigger and smaller number variables. 
   if (intA > intB){
     biggerNum = intA;
     smallerNum = intB;
    }else{
     biggerNum = intB;
     smallerNum = intA;
    }
    //checks numbers for Error condtions
   if (isNaN(biggerNum) || isNaN(smallerNum) || smallerNum < 0 || typeof(biggerNum) === 'string' || typeof(smallerNum) === 'string') {
          return "ERROR";
    }else{
        //does calculation.
        for (let i = smallerNum; i <= biggerNum; i++){
            sum += i;
        }
        return sum;
     }   
};

// Do not edit below this line
module.exports = sumAll;
