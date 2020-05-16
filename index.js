function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(stuff = '*') {
  return (something = 'special') => `You are ${stuff}${something}${stuff}!`
}

let Calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
}

function actionApplyer(int, funcs) {
  return (funcs.length === 0) ? int : funcs.reduce((total, func) => func(total), int) 
}
