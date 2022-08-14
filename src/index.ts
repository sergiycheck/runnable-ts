console.log('should run');

function calculateTime() {
  const slotAssignmentDate = new Date('2022-08-12T10:00:00.000Z');

  const millisecondsInHour = 60 * 60 * 1000;
  const millisecondsInOneDay = millisecondsInHour * 24;

  const slotAssignmentNotificationDayBeforeDate = new Date(
    slotAssignmentDate.getTime() - millisecondsInOneDay
  );

  const slotAssignmentNotificationTwoHoursBeforeDate = new Date(
    slotAssignmentDate.getTime() - millisecondsInHour * 2
  );

  console.log(`slotAssignmentDate`, slotAssignmentDate);

  console.log(
    `slotAssignmentNotificationDayBeforeDate`,
    slotAssignmentNotificationDayBeforeDate
  );
  console.log(
    `slotAssignmentNotificationTwoHoursBeforeDate`,
    slotAssignmentNotificationTwoHoursBeforeDate
  );
}

(async function main() {
  //
  calculateTime();
})();
