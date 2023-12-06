const Role = require('../models/role');
const constants = require("../utils/constants");

const roleController={
    add_role:(req,res)=>{
        const role=new Role(req.body);
        role.save()
        .then((result) => {
            res.status(201).json({message:constants.roleCreated,role:result});
        }).catch((err) => {
            console.log(err);
        });
    },
    get_roles:(req,res)=>{
        Role.find().then((result)=>{res.status(200).json({result})});
    }

}

module.exports = roleController;