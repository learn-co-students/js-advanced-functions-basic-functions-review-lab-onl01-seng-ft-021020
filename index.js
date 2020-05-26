// Your code here
function saturdayFun(activity = 'roller-skate') { 
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") { 
    return function(adj="special"){ 
        return `You are ${flair}${adj}${flair}!`
    }

}
let Calculator = {
    add: function(a,b){ 
        return a + b
    },
    subtract: function(a,b){ 
        return a - b
    }, 
    multiply: function(a,b){ 
        return a * b
    }, 
    divide: function(a,b){ 
        return a / b 
    }
}

let actionApplyer = function (int, arr){ 
    let x = int

    for (let i = 0; i < arr.length; i++){ 
        x = arr[i](x)
    }
    return x
}