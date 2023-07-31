const {Circle, Square, Triangle} = require("./shapes")
describe ("Circle", ()=> {
test ("I render a circle", ()=>{
    const shape = new Circle ()
    const expected = `<circle cx="150" cy="100" r="80" fill="blue"/>`
    shape.setColor("blue")
    expect(shape.render()).toEqual(expected)
})    
})