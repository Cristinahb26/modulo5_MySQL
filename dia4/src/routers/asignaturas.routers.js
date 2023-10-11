const {Router} = require("express");
const router = Router();
const asignaturasCtrl = require ("../controller/asignaturas.controller");

router.get("/marks", asignaturasCtrl.getNota);
router.get("/subjects", asignaturasCtrl.getSubjectsAlum);
router.get("/subject", asignaturasCtrl.getStudentsAsig);
router.get("/teachers", asignaturasCtrl.getSubjectsTeachers);
router.get("/teacher", asignaturasCtrl.getTeacherSubjects);


module.exports = router;