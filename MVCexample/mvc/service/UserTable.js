// !!! Every function over here should be communicating with our table directly
//      and returning the data that it gets or the information that it gets from our database back to the controller

// Over here in our service folder we would hold all of the files that include manipulating
//  and making queries to our tabel

// Return User With Id
export const QueryUserById = (id) => {
  // all it does is it queries the you it requires an ID
  // and in returns some user from the table
  // from the user table that has the specific ID
  return User.FindById(id);
  // This can be reused now everywhere in our applocation
  //  that we might want to query some user by ID
};

// Returns List of Users
export const QueryListOfUsers = (condition) => {
  // we can even specify some stuff (condition) like if we want to specify some sort of (condition)
  //users we want to get from our table

  // make some sort of logic
  if (condition) {
    return User.findAll(condition).exec();
  }

  return User.findAll().exec();
};

export const DeleteUserById = (id) => {
  return User.remove({ _id: id }).exec();
};

// You would get every function or every query or whatever thing you want to do to you database to your tables
// and create specific functions for them in the UserTableFile
