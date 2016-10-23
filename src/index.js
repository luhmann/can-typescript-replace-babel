import Dog from './dog'
import { square } from './maths'
import { getPost } from './asnyc'


/* Immediately invoked arrow function does not work */
(async function() {
  /* Classes work */
  let snoopy = new Dog('Snoopy')
  snoopy.woof()

  /* Tree Shaking works */
  console.log(square(9))

  /* Async/Await works */
  let json = await getPost(1)
  console.log(json)
})()

