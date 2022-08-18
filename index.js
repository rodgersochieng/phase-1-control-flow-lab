function scuberGreetingForFeet(someValue){
  let result;
  if(someValue <= 400){
    result = 'This one is on me!';
    return result;
  }else if((someValue > 2000) && (someValue < 2500)) {
    result = 'I will gladly take your thirty bucks.';
    return result;
  }else {
    return 'No can do.';
  }
}
function ternaryCheckCity(city){
  // Write your code here!
  let result = city === 'NYC' ? "Ok, sounds good." : "No go.";
  return result;
}
function switchOnCharmFromTip(tip) {

  if (tip === "generous") {
      return "Thank you so much.";
  } else if (tip === "not as generous") {
      return "Thank you.";
  } else {
      return "Bye.";
  }
}