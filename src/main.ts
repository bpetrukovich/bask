import { TaskRepository } from "./repository/TaskRepository";
import { blockedRender } from "./tui/main";

const taskRepository = new TaskRepository();

await blockedRender();
