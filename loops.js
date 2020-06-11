 let gear = ["cams", "winter tent", "crampons", "helmet"]


function forLoop(gear){

  for (let i = 0; i < 25; i++ ){
      if (i === 1){
        //[...gear, "I am 1 strange loop."]
        gear.push("I am 1 strange loop.")
      }
/*
      else{
        [...gear,"I am ${1} strange loops."]
      }
*/
}
return gear
}
