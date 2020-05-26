// Your code here
let Calculator = {
    add: function(a, b){return a+b},
    subtract: function(a, b){return a-b},
    multiply: function(a, b){return a*b},
    divide: function(a, b){return a/b}
}


function actionApplyer(starting = 0, funs){
    if(funs.length == 0){
        return starting
    }
    else{
        let result = funs[0](starting)
        for(let i = 1; i < funs.length; i++){
            result = funs[i](result)
            
        }
        return result

    }
    

}

function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`

}

function mondayWork(activity=  'go to the office'){
    return `This Monday, I will ${activity}.`

}

function wrapAdjective(val = "*"){
    return (p = "special") => {
        return `You are ${val}${p}${val}!`

    }
}



