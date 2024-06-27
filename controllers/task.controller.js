let tasks = [];
let newId = 0;

export const createTask = (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required" });
    }

    newId = newId + 1;
    const newTask = { id: newId, title, description };
    tasks.push(newTask);
    return res
      .status(200)
      .json({ message: "Task created Successfully", tasks: newTask });
  } catch (error) {
    console.log(error);
  }
};

export const getAllTasks = (req, res) => {
  try {
    return res
      .status(200)
      .json({ message: "Get All the tasks Successfully", tasks });
  } catch (error) {
    console.log(error);
  }
};

export const getTask = (req, res) => {
  try {
    const id = parseInt(req.params.taskId);

    const taskById = tasks.find((task) => id === task.id);

    if (taskById) {
      return res
        .status(200)
        .json({ message: "Get the task Successfully", task: taskById });
    }

    return res.status(404).json({ message: `Task with id ${id} is Not Exist` });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteTask = (req, res) => {
  try {
    const id = parseInt(req.params.taskId);

    const taskIndex = tasks.findIndex((task) => id === task.id);

    if (taskIndex === -1) {
      return res
        .status(404)
        .json({ message: `Task with id ${id} is Not Exist` });
    }

    tasks.splice(taskIndex, 1);

    return res.status(200).json({ message: "Task Delete Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateTask = (req, res) => {
  const id = parseInt(req.params.taskId);
  const { title, description } = req.body;

  const taskById = tasks.find((task) => id === task.id);

  if (!taskById) {
    return res.status(404).json({ message: `Task with id ${id} is Not Exist` });
  }

  taskById.title = title;
  taskById.description = description;

  return res
    .status(200)
    .json({ message: "Task updated successfully", task: taskById });
};
