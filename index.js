function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },
    markComplete: function() {
      task.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW
const task1 = newTask("Learn HTML", "complete assignments");
const task2 = newTask("Learn CSS", "style a page or something");
const tasks = [task1, task2];

// task1.logState(task1);
// task1.markComplete(task1);
// task1.logState(task1);
