function saturdayFun(string="roller-skate"){
    return `This Saturday, I want to ${string}!`
} 

let mondayWork = function(string="go to the office"){
    return `This Monday, I will ${string}.`
}

function wrapAdjective(flair="*"){
    return function(param="special"){
        return `You are ${flair}${param}${flair}!`
    }

}

const Calculator = {
    add: function(){return 1+3}, 
    subtract: function(){return 1-3}, 
    multiply: function(){return 1*3}, 
    divide: function(){return 10/5}
}

function actionApplyer(starting, array){
    if (array ===undefined || array.length == 0){
        return starting
    } else{
        array.forEach(func => starting=func(starting))
        return starting
    }
   
}