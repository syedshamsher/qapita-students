export {}
const express = require("express")
const router = express.Router()
const {
	allStudent, 
	addStudent,
	deleteStudent,
	editStudent,
	login,
	searchStudentByName} = require("../Controller/student_controller")

router.get("/api/students",allStudent)
router.post("/api/add", addStudent)
router.delete("/api/delete/:id",deleteStudent)
router.patch("/api/update",editStudent)
router.post("/api/search",searchStudentByName)
router.post("/api/login",login)
module.exports = router
