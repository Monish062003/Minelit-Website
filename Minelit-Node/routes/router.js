const express=require("express");
const router=express.Router();
const [check,save,update,mail]=[require("../controller/check").check,require("../controller/save").save,require("../controller/updatepassword").update,require("../controller/mail").mail];

router.route("/save").post(save);
router.route("/check").post(check);
router.route("/update").post(update);
router.route("/mail").post(mail);


module.exports={router:router};