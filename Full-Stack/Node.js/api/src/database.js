const DATABASE_PATH = new URL("db.json", import.meta.url);
import fs from "node:fs/promises";
export class Database {
  database = {};

  constructor() {
    this.persist();
  }
  persist() {
    // Lógica para persistir os dados em um arquivo ou banco de dados real
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.database));
  }

  insert(table, data) {
    if (Array.isArray(this.database[table])) {
      this.database[table].push(data);
    } else {
      this.database[table] = [data];
    }

    this.persist();
  }

  select(table) {
    return this.database[table];
  }
}
/**
 {
"products": [{
    "id": 1,
    "name": "Teclado",
    "price": 100
  }]
 }
 * 
 * @typedef {Object} Database
 * @property {Object} database
 * {}
 * 
 */
