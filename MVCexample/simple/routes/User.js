// The simple example of how you should instructor API
//  and how you actually shook your API without MVC
import { express } from "express";
const router = express.Router();

router.get("/all", (req, res) => {
  const userList = User.fildAll().exec();
  res.json(user);
});

// there we are try dealing with user by ID
// user sent an ID through the params
router.get("byId/:id", (req, res) => {
  // also dealing with calling database directly
  // so we're making a request to our database
  const user = User.findById(req.params.id).exec();
  // also we are dealing with manipulating the data or returning the data
  // which is a lot of stuff for a single function or a single file
  res.json(user);
  // that's why it bacomes not maintainable because if you have thousands or hundreds of endpoints
  // and you have a lot of stuff dealing with the table
  // or you have a lot of stuff that can be reused
  // then you will find it, that it is not very maintainable to keep your API structured this way

  // It might be annoying in the beginnig to switch from what you've been used to before
  // and how and what is a lot simpler to somvething that seems redundant in the beginning like following a specfic
  // architecture, pattern

  // In the long run it definitely helps it gets you to understand how to structure code better

  // in real world you won't ever find some sort of API actually written like this
  // you will always find some sort of structure and design pattrn that is used in every single project
  // because it is the only way to maintain a project that is that has thosands of lines of code
});

router.post("/create", (req, res) => {
  const User = req.body;
  User.save((err, user) => {
    if (err) {
      res.send(err);
    } else {
      res.json(user);
    }
  });
  res.json(req.body);
});
