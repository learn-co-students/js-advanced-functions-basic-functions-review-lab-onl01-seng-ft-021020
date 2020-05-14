// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(emphasis = "*") {
  return function (adjective = "special") {
    return `You are ${emphasis}${adjective}${emphasis}!`;
  };
}

const Calculator = {
  add() {
    return 1 + 3;
  },
  subtract() {
    return 1 - 3;
  },
  multiply() {
    return 1 * 3;
  },
  divide() {
    return 10 / 5;
  }
};

function actionApplyer(num,array) {
  let output = num
  for (const fun of array) {
    output = fun(output)
  }
  return output
}