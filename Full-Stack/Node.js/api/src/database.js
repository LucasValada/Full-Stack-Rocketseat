export class Database {
  database = {};

  constructor(){
    
  }

  insert(table, data) {
    if (Array.isArray(this.database[table])) {
      this.database[table].push(data);
    } else {
      this.database[table] = [data];
    }
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
