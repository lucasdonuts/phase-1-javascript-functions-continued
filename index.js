function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(char) {
  const innerFunction = function (adj) {

    return `You are ${char}${adj}${char}!`;

  }

  return innerFunction;
}