// Local Database Service using localStorage
// This mimics a database for small persistent tasks when Firestore is unavailable

const DB_PREFIX = 'mits_hackathon_';

export const localDB = {
  // Get all items in a "table"
  getTable: (tableName) => {
    const data = localStorage.getItem(DB_PREFIX + tableName);
    return data ? JSON.parse(data) : [];
  },

  // Save an entire table
  saveTable: (tableName, data) => {
    localStorage.setItem(DB_PREFIX + tableName, JSON.stringify(data));
  },

  // Get a single record by ID
  getById: (tableName, id, idKey = 'uid') => {
    const table = localDB.getTable(tableName);
    return table.find(item => item[idKey] === id);
  },

  // Update or insert a record
  upsert: (tableName, record, idKey = 'uid') => {
    const table = localDB.getTable(tableName);
    const index = table.findIndex(item => item[idKey] === record[idKey]);
    
    if (index !== -1) {
      table[index] = { ...table[index], ...record };
    } else {
      table.push(record);
    }
    
    localDB.saveTable(tableName, table);
    return record;
  },

  // Delete a record
  delete: (tableName, id, idKey = 'uid') => {
    const table = localDB.getTable(tableName);
    const filtered = table.filter(item => item[idKey] !== id);
    localDB.saveTable(tableName, filtered);
  }
};
