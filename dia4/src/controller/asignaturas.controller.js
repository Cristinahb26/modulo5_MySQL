const { pool } = require("../database");

const getNota = async (req, res) =>
 { 

    let sql = `SELECT AVG(note) FROM marks WHERE student_id = ${req.query.student_id};`

    try 
    {
   
        let result = await pool.query(sql);

        res.send(result);
    }
    catch(err)
    {
        console.log(err);
    }

}

const getSubjectsAlum = async (req, res) =>{

    try{
        let sql = "SELECT title AS lista_total FROM subjects INNER JOIN subjects_teacher ON (subjects.subject_id = subjects_teacher.subject_id) INNER JOIN grupo ON (subjects_teacher.subject_id = grupo.grupo_id) INNER JOIN students ON (grupo.grupo_id = students.student_id)"
        console.log(sql);
        
        let [result] = await pool.query(sql);
        res.send(result)
        

    }
    catch(err)
    {
        console.log(err);
    }
}

const getStudentsAsig = async (req, res) => {

    try {

        let sql = "SELECT first_name, last_name1, last_name2, title FROM students INNER JOIN grupo ON (students.student_id = grupo.grupo_id) INNER JOIN subjects_teacher ON (grupo.grupo_id = subjects_teacher.grupo_id) INNER JOIN subjects ON (subjects_teacher.subject_id = subjects.subject_id)"
        console.log(sql);
        
        let [result] = await pool.query(sql);
        res.send(result)

    }
    catch(err)
    {
        console.log(err);
    }
}

const getSubjectsTeachers = async (req, res) => {

   try{
       
    let sql = "SELECT title AS lista_total FROM subjects INNER JOIN subjects_teacher ON (subjects.subject_id = subjects_teacher.subject_id) INNER JOIN teachers ON (subjects_teacher.subject_id = teachers.teacher_id)"
    console.log(sql);
        
    let [result] = await pool.query(sql);
    res.send(result)
   }
   catch(err)
   {
    console.log(err);
   }
}

const getTeacherSubjects = async (req, res) => {

    try{
       
        let sql = "SELECT first_name, last_name, title FROM teachers INNER JOIN subjects_teacher ON (teachers.teacher_id = subjects_teacher.teacher_id) INNER JOIN subjects ON (subjects_teacher.subject_id = subjects.subject_id)"
        console.log(sql);
        
        let [result] = await pool.query(sql);
        res.send(result)

    }
    catch(err)
    {
        console.log(err);
    }

}





module.exports = {getNota, getSubjectsAlum, getStudentsAsig, getSubjectsTeachers, getTeacherSubjects};