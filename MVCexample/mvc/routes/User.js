// Is where we would return this back to the user who made the request
// Service - Controller - Route
// So the user after reqquest gets the data that he wanted
import { express } from "express";
const router = express.Router();

// Which actually functions from the controller folder
import {
  GetAllUsers,
  GetUser,
  UpdateUser,
  DeleteUser,
} from "../controllers/User";

// We would have everything related to the user individually
// for example
router.get("all", GetAllUsers); // we would have a get request
// which return a list of all the users in the table
router.get("/byId/:id", GetUser);
// might return a user by specific ID
router.put("/", UpdateUser);
// which updates a user
router.delete("/:id", DeleteUser);
// delete the user with a specific ID

// Is this different from this kind of pattern from the previous one
// that we are actually not definig the function in the routes folder

// We're actually defining our route and whatever endpoint like name in the endpoint it needs
// Then we're calling this thing called get all users || get user || update user || delete user

export { router as UserRoute };

// You have an endpoint which calls a Controllers
// Which has a function specific for that endpoint this controller
// calls a function in the sercive folder

// > services
// Which deals with the database
// which deald with what you want to do with the database or the table

// >conctroller
// Then It does sth with the data that you return and try to get
// At the end it should return a response to the user so that the user gets a response to its request 
