 let gear = ["cams", "winter tent", "crampons", "helmet"]
function forLoop(gear){

  for (let i = 0; i < 25; i++ ){
      if (i === 1){ gear.push('I am 1 strange loop.')  }
      //else {gear.push('I am' ${i} 'strange loops.') }
      else {gear.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`) }
    }
return gear
}


let num = 10
function whileLoop(num){
  while (num > 0) {
  console.log(--num)
  }
  return 'done'
}


let int = 10
let i = 9
function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(int){
  do {
      console.log("I run once regardless")
  } while ( incrementVariable() <= int )
}
