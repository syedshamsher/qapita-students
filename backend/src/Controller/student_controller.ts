const Student = require("../Models/student")
export {}
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv");
dotenv.config({ path: `../.env` });

const allStudent = (req:any, res:any)=>{
Student.find().then((stu:any)=>{
console.log("students:"+ stu)
res.status(200).json(stu)
}).catch((err:any)=>console.log(err))	
}

const addStudent=(req:any , res:any)=>
{
	console.log(req)
	const newStudent = new Student(req.body) 	
	newStudent.save().then(()=>res.json("Student add successfully"))
	.catch((err:any)=>res.status(400).json(err))
}

const deleteStudent = (req:any, res:any)=>{
console.log(req.params)

Student.findByIdAndDelete({ _id: req.params.id })
    .then((student:any) => res.json("Student delete successfully"))
    .catch((err:any) => res.status(400).json("Error:" + err));

	
}

const editStudent=(req:any,res:any)=>{
	Student.updateOne(
    { _id: req.body.id },
    { _id: req.body.id,...req.body },
  )
    .then((student:any) => res.json("Student details update successfully"))
    .catch((err:any) => res.status(400).json("Error:" + err))
}

const searchStudentByName=(req:any,res:any)=>{
	
	let query = req.query.query
	Student.find({name:new RegExp(query,"i")}).then((data:any)=>{
	res.status(200).send(data)})
	.catch((err:any)=>res.status(400).send(err))

}


const login = (req:any,res:any)=>{
let email = req.body.email
Student.findOne({email:email})
.then(async(data:any)=>{
if(data.length !=0){
	console.log(process.env.SECRET)
	let secret = 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
	const token = await jwt.sign({email},secret) 
	console.log(token)
	res.status(200).json({"token":token})
	}
	})
	.catch((err:any)=>res.status(400).send(err))


}

module.exports = {
allStudent,
addStudent,
deleteStudent,
editStudent,
searchStudentByName,
login
}
