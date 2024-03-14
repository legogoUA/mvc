// Over here we have all teh functions that are called whenever there is an endpoint (in the routes folder)
// This is kind of how it would go, you would have definition of your route
// And you would have a folder which contains the functions that are called when route or that request is made
import {
  QueryListOfUsers,
  QueryUserById,
  DeleteUserById,
} from "../service/UserTable";

//For example

//For the get all users we have here this function
// called get our users which should
// in theory return at the end
// the list of users
export const GetAllUser = (req, res) => {
  // we have very specific and weird functions called QueryListOfUsers() || QueryUserById(userId) || ...

  // and now in the controller we would get that data from services UserTable
  // we get result of teh user table query list of users function
  // and do sth with it
  const userList = QueryListOfUsers();

  // EXPLICATION CONTROLLERS
  //  I mentioned that it would make a call to the taple service
  //    or to the service which comminicates with the database
  //    and then at the end manipulate the data and return in
  // Which is kind of what we're doing over here

  // DO SOMETHING WITH THE USER LIST OR JUST RETURN IT
  return res.json(userList);
  // we return to routes 
};

export const GetUser = (req, res) => {
  const userId = req.params.id;
  const user = QueryUserById(userId);

  // DO SOMETHING WITH THE USER OR JUST RETURN IT
  return res.json(user);
};

export const DeleteUser = (req, res) => {
  const userId = req.params.id;
  const user = DeleteUserById(userId);

  // DO SOMETHING WITH THE USER OR JUST RETURN IT
  return res.json(user);
};

export const UpdateUser = (req, res) => {
  const userId = req.params.id;
  const user = UpdateUserById(userId);

  // DO SOMETHING WITH THE USER OR JUST RETURN IT
  return res.json(user);
};

// You might think that they are already built in functions but they're actually finctions that
// and this is where the service folder comes

// This is where you should write the logic for mutating || updating || doing something
// with data what you got from your table
