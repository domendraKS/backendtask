import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../controllers/task.controller.js";

const taskRoute = express.Router();

taskRoute.post("/tasks", createTask);
taskRoute.get("/tasks", getAllTasks);
taskRoute.get("/tasks/:taskId", getTask);
taskRoute.delete("/tasks/:taskId", deleteTask);
taskRoute.put("/tasks/:taskId", updateTask);

export default taskRoute;
