import { Database } from "sqlite3";
import path from "path";
const FILE_LOCATION = path.join(__dirname,"..","dbdata","data.db");

let db = new Database(FILE_LOCATION);

export { db };