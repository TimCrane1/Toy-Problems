//---- Asynchronous Map ----//

//The function asyncMap should take two parameters, an array of asynchronous functions (tasks) and a callback.
//Each task takes a separate callback and invokes that callback when complete.
//The callback passed to asyncMap is then performed once on the array of results of the callbacks of the tasks.
//The order of these results should be the same as the order of the tasks.
//It is important to note that this is not the order in which the tasks return,
//but the order in which they are passed to asyncMap.
//Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
//on the results array.

var asyncMap = function(tasks, callback) {
  var results = [];
  var finished = 0;
  
  for (var i = 0; i < tasks.length; i++) {
    //the invoke function recieves an index-position and invokes the task at that index-position,
    //pushing the result to that index-position in the results array
    var invoke = function(index) {
      tasks[index](function(val) {
        results[index] = val;
        finished++;
        //check if all tasks have been comepleted and invoke the passed callback in the original order of tasks
        if (finished === tasks.length) 
        {
          callback(results);
        }
      })
    }
    //call invoke on each task
    invoke(i);
  }
};
