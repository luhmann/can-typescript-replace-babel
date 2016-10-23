export default class Dog {
  name: string

  constructor(name:string) {
    this.name = name
  }

  woof() {
    let woof = document.createElement('div')
    woof.innerHTML = `Woof, hello my name is ${this.name}`

    document.querySelector('body').appendChild(woof)
  }
}
