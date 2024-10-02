import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./env",
});

connectDB();

/* 
    We can define the database connection   function here too like the one given below, but 
    for code modularity, we do that in the db/index file
    
    Also, for DB connection, We could have used traditional functions but we choose IIFE so 
    that this connection to the database is executed immediately.

    ;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error) => {
        console.log("Error:", error);
        });
        app.listen(process.env.PORT, () => {
        console.log(`App is listening on ${process.env.PORT}`);
        });
    } catch (err) {
        console.error("ERROR: ", err);
        throw err;
    }
    })();
*/
