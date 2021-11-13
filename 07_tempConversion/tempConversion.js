const ftoc = function(celc) {
    let fahr = ((celc) - 32) * 5 / 9;
    if (fahr % 1 === 0){
      return fahr;
    } else {
      return +(Math.round(fahr *100)/100).toFixed(1);
    }
};

const ctof = function(fahr) {
  let cel =fahr * (9/5) + 32; 
  if (cel % 1 === 0){
    return cel;
  } else {
  return +(Math.round(cel * 100) / 100).toFixed(1);
  }
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
