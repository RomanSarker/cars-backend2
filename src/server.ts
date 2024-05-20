import mongoose from "mongoose";
import app from "./app";
async function main() {
    await mongoose.connect("mongodb+srv://apollo-flix-b3:lCqtDURU7krMLYMQ@cluster0.krwq7hl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  
    const port = 5000;
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
  }

  main();