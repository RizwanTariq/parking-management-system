const today = () => {
  var today = new Date();
  var dd = today.getDate();

  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }
  return mm + '/' + dd + '/' + yyyy;
};
const tomorrow = () => {
  const tomorrow = new Date(today());
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
};

export default {
  today,
  tomorrow,
};
