const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roleSchema = Schema({
  role: {
    type: String,
    required: true,
  }
});

const Role = mongoose.model("Role", roleSchema);

module.exports = Role;
