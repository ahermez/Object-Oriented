const inquirer = require("inquirer")
const fs = require("fs")
const{Circle, Square, Triangle} = require("./lib/shapes")
const Svg = require("./lib/svg")
const { error } = require("console")


function start(){
    inquirer.prompt([
        {
            type: "input", 
            name: "text",
            message: "enter your text for the logo",
        },
        {
            type: "input",
            name: "color",
            message: "what color would you like your text to be?",
        },
        {
            type: "input",
            name: "shapeColor",
            message: "what would you like your shape color to be?",            
        },
        {
            type: "list",
            name: "shape",
            message: "what shape would you like?",
            choices: ["Circle", "Triangle", "Square"],            
        },
    ]).then((answersToQuestions)=>{
        let newLogo; 
        switch(answersToQuestions.shape){
            case "Circle":
            newLogo = new Circle()
            break; 
            case "Triangle":
            newLogo = new Triangle()
            break;
            case "Square":
            newLogo = new Square() 
            break;        
        }
        newLogo.setColor(answersToQuestions.shapeColor) 
        const shapeSvg = new Svg()
        shapeSvg.setShape(newLogo)
        shapeSvg.setText(answersToQuestions.text, answersToQuestions.color)
        // (answersToQuestions.text.length>3)? console.log("must be less than 3 characters"): 
        writeToFile("logo.svg", shapeSvg.render())
    })
}
        function writeToFile(fileName, answersToQuestions){
        fs.writeFileSync(fileName, answersToQuestions, (error) => {
        (error)? console.log(error): console.log("your logo has been generated") 
    })
}
start()