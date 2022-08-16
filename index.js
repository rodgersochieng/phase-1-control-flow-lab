function scuberGreetingForFeet(ride){
  scuberGreetingForFeet(2501);
  if(ride <= 400 ){
  return `This one is on me!`}

   else if(ride > 2000 && ride <= 2500){
  return `I will gladly take your thirty bucks.`}
    else if(ride > 2500 )
  {
  return `No can do`}
 

  }
  


function ternaryCheckCity(City){
  
  const destination = City === 'NYC' ? 'ok,sounds good' :'No,go'
  return destination;
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous' 
    : return 'Thank you so much'
    case 'not as generous'
     : return 'Thank you'
    default 
    :return 'Bye'
  }

}