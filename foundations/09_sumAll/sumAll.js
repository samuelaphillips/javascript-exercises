const sumAll = function(a, b) {
    numArray = [a, b]; 
    numArray.sort((a,b) => a - b);

    sum = 0;
    for (i = numArray[0]; i <= numArray[1]; ++i)
    {
       sum += i; 
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
