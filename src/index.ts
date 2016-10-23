import Dog from './dog'
import { square } from './maths'
// import { getPost } from './asnyc'

// Modules -- WORK, when piping them threw ts-loader

/* Classes - WORK */
let snoopy = new Dog('Snoopy')
snoopy.woof()

// let waldo = new Dog(42)

/* Tree Shaking – WORKS */
console.log(square(9))

/**
 * Spread Operator - WORKS
 */
let fruit = ['orange', 'apple', 'pear']
let nut = ['hazelnut', 'pecan']

let mixer = [ ...fruit, ...nut]
console.log(mixer)



/* Observation: Immediately invoked  async arrow function does not work */
// (async function():void {
  /**
   * Observation: Async/Await works, but only if you leave the file as js as apparently the compiler then won't check typings
   * */
  // let json = await getPost(1)
  // console.log(json)
// })()
