const palindromes = function (str) {
    const normLetters = Array.from(str.toLowerCase());
    const test = normLetters.filter(a => (a >= 'a' && a <= 'z'));

    let reverse = [];
    for (let i = test.length-1 ; i >= 0 ; i--){
        reverse.push(test[i])
    }    
    
    let check = (reverse.join() === test.join())? true : false;
    
    return check;
};

// Do not edit below this line
module.exports = palindromes;
