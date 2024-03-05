export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true; // this declaration creates a new variable within the block scope
    let task2 = false; // this declaration creates a new variable within the block scope
  }

  return [task, task2];
}
