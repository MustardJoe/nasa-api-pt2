function todayDateSplit() {
  var today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  return `${year}-${month}-${day}`;
}

export default todayDateSplit;
