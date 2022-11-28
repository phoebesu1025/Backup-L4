function getTimeInSeconds(timeInMinutes) {
    const timeInSeconds = timeInMinutes * 60;
    return timeInSeconds;
    // return timeInMinutes * 60;
  }
  const userInputMinutes = prompt('Enter the minutes', '5');
  const userInputMinutesNum = parseInt(userInputMinutes);
  const timeInSeconds = getTimeInSeconds(userInputMinutesNum);
  alert(userInputMinutes + ' minutes is ' + timeInSeconds + ' seconds');