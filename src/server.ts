import mongoose from "mongoose";
import app from "./app";
const port:number = 5000;

// database connection
async function main() {
try {
    await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');

    console.log(`database connection successfully`)

    app.listen(port, () => {
        console.log(`Server listening on port ${port}`)
      })

} catch (error) {
    console.log(`Field to connection database`,error)
}
  
}
main();





