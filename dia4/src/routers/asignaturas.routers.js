const {Router} = require("express");
const router = Router();
const asignaturasCtrl = require ("../controller/asignaturas.controller");

router.get("/marks", asignaturasCtrl.getNota);
router.get("/subjects", asignaturasCtrl.getSubjectsAlum);
router.get("/students", asignaturasCtrl.getStudentsAsig);
router.get("/", asignaturasCtrl.getSubjectsTeachers);
router.get("/", asignaturasCtrl.getTeacherSubjects);


module.exports = router;