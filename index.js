// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) { drivers.push(name) }
//  appends driver to tthe end of the drivers array

function destructivelyPrependDriver(name) { drivers.unshift(name) }
//  prepends a driver to the beginning of the drivers

function destructivelyRemoveLastDriver() { drivers.pop() }
// removes the last driver at the end

function destructivelyRemoveFirstDriver() { drivers.shift() }
// removes the first driver at the start


function appendDriver(name) { 
    return [...drivers, name]
}
// append without modifying the array

function prependDriver(name) { 
    return [name, ...drivers]
 }
//  prepend without modifying the array

function removeLastDriver() {
   return drivers.slice(0, drivers.length - 1)
}



function removeFirstDriver() {
    return drivers.slice(1)
}