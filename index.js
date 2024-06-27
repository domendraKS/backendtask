import express from "express";
import taskRoute from "./routes/task.route.js";

const app = express();
const PORT = 3003;

app.use(express.json());

app.use("/api", taskRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
