// Your code here
function saturdayFun(activity="roller-skate") {
   return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(arg="special") {
        return `You are ${flair}${arg}${flair}!`
    }
}

let Calculator = {
    add: function(num1, num2) { return num1 + num2 },
    subtract: function(num1, num2) { return num1 - num2 },
    multiply: function(num1, num2) { return num1 * num2 },
    divide: function(num1, num2) { return num1 / num2 }
}

function actionApplyer(startingNum, fnList) {
    let a = startingNum

    for (let i = 0; i < fnList.length; i++) {
        a = fnList[i](a)
    }

    return a 
}