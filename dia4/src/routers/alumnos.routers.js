const {Router} = require("express");
const router = Router();
const alumnosCtrl = require ("../controller/alumnos.controller");

router.get("/students", alumnosCtrl.getStudents);
router.get("/student", alumnosCtrl.getStudent);
router.post("/students", alumnosCtrl.postStudent);
router.put("/students", alumnosCtrl.putStudent);
router.delete("/students", alumnosCtrl.deleteStudent);


module.exports = router;