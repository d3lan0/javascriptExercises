const removeFromArray = function(arr, ...args) {

      for (let i = 0; i <= args.length; i++){
          let index;

          do{
            index = arr.indexOf(args[i])
            if (index !== -1)
              arr.splice(index,1);
              continue;
            }
          while (index !== -1)
      }
    return arr;
};


// Do not edit below this line
module.exports = removeFromArray;
