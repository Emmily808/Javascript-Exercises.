const repeatString = function(str, num) {
    let string = [];
    for(let i=0; i<num; i++){
        string.push(str)
    }
    if(num === 0){
        return ''
    }else if(num === (-Math.abs(num))
){
        return 'ERROR'
    }else{
        return string.join('')
    }
 }

// Do not edit below this line
module.exports = repeatString;
