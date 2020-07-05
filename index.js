function takeANumber(katzDeliLine, firstName) {
  katzDeliLine.push(firstName)
  return `Welcome, ${firstName}. You are number ` + katzDeliLine.length + ` in line.`
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + "."
    katzDeliLine
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine (katzDeliLine) {
 if (katzDeliLine.length > 0) {
   var lineNames = []
   for (let i = 0; i < katzDeliLine.length; i++) {
    var j = i + 1
   lineNames.push(` ${j}. ${katzDeliLine[i]}`)
   }
   return `The line is currently:` + lineNames
 } else {
   return "The line is currently empty."
 }
}
