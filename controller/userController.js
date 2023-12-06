const User = require("../models/user");
const constants = require("../utils/constants");

const userController = {
  get_users: (req, res) => {
    User.find()
      .then((result) => res.send(result))
      .catch((err) => console.log(err));
  },

  get_user_by_name: (req, res) => {
    const name = req.params.name;
    User.findOne({ name: name })
      .then((result) => {
        if (result) {
          const name = result.name;
          res.status(200).json({
            message: constants.userByNameRetrieved(name),
            user: result,
          });
        } else {
          res.status(404).json({ message: constants.userNotFound });
        }
      })
      .catch((err) => console.log(err));
  },

  get_user_by_id: (req, res) => {
    const id = req.params.id;
    User.findById(id)
      .then((result) => {
        if (result) {
          const id = result.id;
          res
            .status(200)
            .json({ message: constants.userByIdRetrieved(id), user: result });
        } else {
          res.status(404).json({ message: constants.userNotFound });
        }
      })
      .catch((err) => console.log(err));
  },

  create_user: (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    user
      .save()
      .then((result) => res.status(201).json(result))
      .catch((err) => console.log(err));
  },

  create_users: (req, res) => {
    const users = req.body;
    User.insertMany(users)
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => console.log(err));
  },

  update_user_details: (req, res) => {
    const id = req.params.id;
    const user = User.findById(id).then((user) => {
      if (!user) {
        res.status(204).json({ message: constants.userNotFound });
      }
      (user.name = req.body.name),
        (user.age = req.body.age),
        (user.address = req.body.address);

      user
        .save()
        .then((result) =>
          res.status(201).json({ message: constants.userUpdated, user: result })
        )
        .catch((err) => console.log(err));
    });
  },

  delete_user_by_id: (req, res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id)
      .then((result) =>
        res.status(201).json({ message: constants.userDeleted })
      )
      .catch((err) => console.log(err));
  },

  delete_users_by_age: (req, res) => {
    const age = req.params.age;
    User.deleteMany({ age: age })
      .then((result) => {
        res
          .status(200)
          .json({ message: `${result.deletedCount}` + constants.usersDeleted });
      })
      .catch((err) => console.log(err));
  },

  get_user_with_roles: (req, res) => {
    User.find()
      .populate("roleIds", "role")
      .select("name")
      .then((result) => {
        res
          .status(200)
          .json({ message: constants.userDetailretreived, user: result });
      })
      .catch((err) => console.log(err));
  },
};

module.exports = userController;
