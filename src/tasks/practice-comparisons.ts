console.log('should run');

const dayStart = '07:30';
const dayEnd = '17:45';

function scheduleMeeting(startTime: string, durationMinutes: number) {
  let startTimeIsMoreOrEqualThanWorkingStartTime = false;
  const startTimeComparisonResult = compareTimeInFormat(startTime, dayStart);
  if (startTimeComparisonResult == 1 || startTimeComparisonResult == 0) {
    startTimeIsMoreOrEqualThanWorkingStartTime = true;
  }

  startTime = addMinutesTimeInFormatHM(startTime, durationMinutes);

  let endTimeLessOrEqualThatEndWorkTime = false;
  const endTimeComparisonResult = compareTimeInFormat(dayEnd, startTime);
  if (endTimeComparisonResult == 1 || endTimeComparisonResult == 0) {
    endTimeLessOrEqualThatEndWorkTime = true;
  }

  const isValidScheduleMeetingTime =
    startTimeIsMoreOrEqualThanWorkingStartTime &&
    endTimeLessOrEqualThatEndWorkTime;

  console.log(isValidScheduleMeetingTime);

  return isValidScheduleMeetingTime;
}

function compareTimeInFormat(timeFormat1: string, timeFormat2: string) {
  let [hoursTime1, minutesTime1] =
    getHoursAndMinutesFromTimeInFormat(timeFormat1);
  let [hoursTime2, minutesTime2] =
    getHoursAndMinutesFromTimeInFormat(timeFormat2);

  if (hoursTime1 > hoursTime2) return 1;

  if (hoursTime1 === hoursTime2) {
    if (minutesTime1 > minutesTime2) return 1;

    if (minutesTime1 === minutesTime2) return 0;
  }

  return -1;
}

function getHoursAndMinutesFromTimeInFormat(timeFormat) {
  return timeFormat.split(':').map(Number);
}

function addMinutesTimeInFormatHM(timeInFormatHM: string, minutes: number) {
  minutes = minutesValidator(minutes);

  let [hoursTime, minutesTime] =
    getHoursAndMinutesFromTimeInFormat(timeInFormatHM);

  hoursTime = hoursValidator(hoursTime);
  minutesTime = minutesValidator(minutesTime);

  let resultMinutes = minutes + minutesTime;
  let newHour = 0;
  if (resultMinutes > 60) {
    newHour++;
    resultMinutes = resultMinutes - 60;
  }

  let resultHours = hoursTime + newHour;
  if (resultHours > 24) {
    resultHours = 0;
  }

  return `${formatNumberToTime(resultHours)}:${formatNumberToTime(
    resultMinutes
  )}`;
}

function formatNumberToTime(timeNum: number) {
  const timeNumStr = `${timeNum}`;
  if (timeNumStr.length > 1) return `0${timeNum}`;

  return timeNumStr;
}

function minutesValidator(minutes: number) {
  if (minutes > 60) throw new Error('minutes can not be more than 60');

  if (minutes < 0) throw new Error('minutes can not be less than 0');

  return minutes;
}

function hoursValidator(hours: number) {
  if (hours < 0 || hours > 24) throw new Error(`${hours} is not a valid hours`);

  return hours;
}

(async function main() {
  scheduleMeeting('7:00', 15); // false
  scheduleMeeting('07:15', 30); // false
  scheduleMeeting('7:30', 30); // true
  scheduleMeeting('11:30', 60); // true
  scheduleMeeting('17:00', 45); // true
  scheduleMeeting('17:30', 30); // false
  scheduleMeeting('18:00', 15); // false
})();
