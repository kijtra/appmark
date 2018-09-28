import Dexie from 'dexie'

const db = new Dexie('appmarks')

db.version(1).stores({
  apps: '&id, createdAt, updatedAt',
  watches: '&id, createdAt, checkedAt',
  options: '&key'
})

export default db
