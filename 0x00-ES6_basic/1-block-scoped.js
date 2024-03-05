#!/bin/bash
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
<<<<<<< HEAD
    let task = true; 
    let task2 = false; 
=======
    let task = true; // this declaration creates a new variable within the block scope
    let task2 = false; // this declaration creates a new variable within the block scope
>>>>>>> 82144228bf6bd9388925a8d64a7c6c6bf61818c4
  }

  return [task, task2];
}
