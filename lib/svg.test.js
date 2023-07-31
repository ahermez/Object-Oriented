const Svg = require("./svg")
test("renders a 300x200 svg element", ()=>{
const svg = new Svg()
const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`  
expect(svg.render()).toEqual(expected)
})