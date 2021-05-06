export const steps = [
    {
      element: "#demo1", // 对应需要显示的id获取class
      popover: {
        title: "Task ID",
        description: "This shows the task ID you are looking at (the ID is unique, you can get your task ID in the log page), you can enter the task ID in the search box below to search for the task information and results",
        position: "bottom"
      }
    },
    {
      element: "#demo2",
      popover: {
        title: "Task research",
        description: "Enter the task ID and query the task",
        position: "bottom-center"
      },
      padding: 5
    },
    {
      element: "#demo3",
      popover: {
        title: "Task information",
        description: "This section contains five modules: task information, execute logs, basic statistics, preview results and results download. The task information module displays the task name, task ID and operation status, etc.The execute logs module displays the log information during the running of the task.The basic statistics module shows the basic statistics of some results;The preview results module displays the thumbnails of the results, and supports the function of zoom in and click to zoom in.The results download module provides the ability to load the results of a task",
        position: "bottom"
      }
    }
  ]