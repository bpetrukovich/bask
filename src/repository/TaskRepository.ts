import { Database } from "bun:sqlite";

export class TaskRepository {
  db: Database;

  constructor() {
    this.db = new Database("mydb.sqlite");

    this.db.run(
      "CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY, name TEXT)",
    );
  }

  init() {
    const insert = this.db.prepare("INSERT INTO tasks (name) VALUES ($name)");
    insert.run({ $name: "Alice" });

    const rows = this.db.query("SELECT id, name FROM tasks").all();
    const one = this.db.query("SELECT * FROM tasks WHERE id = ?").get(1);
  }

  getAll() {}
}
