/** @format */

/**
 * Print the student records sorted name for the given ids
 * @param {array} recordIds array if numbers. Each number is an student id
 */
function printRecords(recordIds) {
  const recordsEnrolled = studentRecords.filter((record) =>
    recordIds.includes(record.id)
  );
  recordsEnrolled.sort((record1, record2) => {
    if (record1.name < record2.name) return -1;
    else if (record1.name > record2.name) return 1;
    else return 0;
  });
  recordsEnrolled.forEach((record) =>
    console.log(
      `${record.name} (${record.id}): ${record.paid ? 'Paid' : 'Not Paid'}`
    )
  );
}

/*************************************************************** */

function getRecordIds(records) {
  return records.map(function getId(record) {
    return record.id;
  });
}

function recordsPaidAndNotEnrolled() {
  const recordsFiltered = studentRecords.filter(
    (record) => record.paid && !currentEnrollment.includes(record.id)
  );
  return getRecordIds(recordsFiltered);
}
function recordsEnrolled() {
  const recordsFiltered = studentRecords.filter((record) =>
    currentEnrollment.includes(record.id)
  );
  return getRecordIds(recordsFiltered);
}

/**
 * Describe the enrolled students and also the students which have paid and but not yet enrolled
 * @returns {array} each element represent an student record
 */
function paidStudentsToEnroll() {
  return [...recordsPaidAndNotEnrolled(), ...recordsEnrolled()];
}

/******************************************* */

function remindUnpaid(recordIds) {
  const unpaidStudents = studentRecords.filter((record) => !record.paid);
  printRecords(getRecordIds(unpaidStudents));
}

// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
  { id: 313, name: 'Frank', paid: true },
  { id: 410, name: 'Suzy', paid: true },
  { id: 709, name: 'Brian', paid: false },
  { id: 105, name: 'Henry', paid: false },
  { id: 502, name: 'Mary', paid: true },
  { id: 664, name: 'Bob', paid: false },
  { id: 250, name: 'Peter', paid: true },
  { id: 375, name: 'Sarah', paid: true },
  { id: 867, name: 'Greg', paid: false },
];

printRecords(currentEnrollment);
console.log('----');
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log('----');
remindUnpaid(currentEnrollment);

/*
      Bob (664): Not Paid
      Henry (105): Not Paid
      Sarah (375): Paid
      Suzy (410): Paid
      ----
      Bob (664): Not Paid -- --
      Frank (313): Paid
      Henry (105): Not Paid --
      Mary (502): Paid
      Peter (250): Paid 
      Sarah (375): Paid --
      Suzy (410): Paid --
      ----
      Bob (664): Not Paid
      Henry (105): Not Paid
  */
