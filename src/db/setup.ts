import "dotenv/config"

import fs from "fs"
import db from "./connect.ts"

const database = fs.readFileSync("./src/db/data.sql").toString();


db.query(database).then((data)=>{
    db.end();
    console.log("Setup complete");
})
.catch(error => console.log(error))