export default function getCurrentDate() {
  // create a new Date object
  var today = new Date();

  // get the day, month, and year
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  var yyyy = today.getFullYear();

  // combine into a string with the desired format
  var formattedDate = dd + '/' + mm + '/' + yyyy;

  // return the result
  return formattedDate;
}
