//jshint esversion:6
// now we can export the date by calling the const with parenthesis

module.exports.getDate = function() {
  let today = new Date();
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  return today.toLocaleDateString("en-US", options); // how can we return the var to main app code
}
// each export is bound to a function, so when calling the const you must include the function as extention

module.exports.getDay = function() {
  let today = new Date();
  let options = {
    weekday: 'long',
  };

  return today.toLocaleDateString("en-US", options);

}
