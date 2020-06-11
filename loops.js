 let gear = ["cams", "winter tent", "crampons", "helmet"]


function forLoop(gear){

  for (let i = 0; i < 25; i++ ){
      if (i === 1){ gear.push('I am 1 strange loop.')  }
      //else {gear.push('I am' ${i} 'strange loops.') }
      else {gear.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`) }
    }
return gear
}
