#! /usr/bin/env node

// This line is called a shebang, it tells the os to run it with node.js

// Import the 'inquirer' module, which is command line interface for node.js
import inquirer from "inquirer"

// Declare a constant 'answer' and assign it to the result of inquirer.promt function

const answers:{
    Sentence: string
}= await inquirer.prompt([
    {
        name:"Sentence",
        type: "input",
        message:"Enter your sentence to the count the word:"

    }
]) 
const words = answers.Sentence.trim().split(" ")

// Print the array to the console
console.log(words)

// Print the word count of the sentence to the console
console.log(`your sentence word count is ${words.length}`);