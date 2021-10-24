const reverseString = function(str) {
    str = str.split('');
    let rev = [];
    for (let i = str.length - 1; i >= 0 ; i--){
        rev.push(str[i]);
    }
    return rev.join('');
};

//console.log(reverseString('test'));

// Do not edit below this line
module.exports = reverseString;
