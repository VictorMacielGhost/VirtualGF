"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_entry_1 = require("./db/db_entry");
let Dbobject;
function main() {
    console.log("Virtual GF AI Starting...");
    console.log("Initilizing Database...");
    Dbobject = new db_entry_1.GFDatabase();
}
main();
