#!/usr/bin/env ts-node
import inquirer from "inquirer";
// simple calculator
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstnumber" },
    { message: "Enter Second Number", type: "number", name: "secondnumber" },
    {
        message: "Select one of the following operators",
        type: "list",
        name: "operators",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
//conditional statments
if (answer.operators === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operators === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operators === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operators === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("please select your valid operator");
}
