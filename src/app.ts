import express, { Application} from  "express";
import cors from "cors";
const app:Application = express();

// Application routes
import userRoutes from "./app/modules/user/user.route";

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// router function
app.use('/api/v1/user',  userRoutes); // userRoutes from route

export default app;


  /*
   To get started with Mongoose in TypeScript, you need to:

1: Create an interface representing a document in MongoDB.
2: Create a generic Schema corresponding to the document interface.
3: Create a Model.
4: Connect to MongoDB... create a instance database query

   step 1: interface
   step 2: schema
   step 3: Model
   step 4: database query

*/
  /*
  interface => interface.ts
  Schema, model => model.ts

  router controller
  route function => controller.ts

  Database query fution => service.ts

//  pattern
  route=>contoller=>service
  */