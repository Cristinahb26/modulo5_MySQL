const { pool } = require("../database");

const getStudents = async (req, res) =>
 { 

    let sql = "SELECT * FROM students;" 

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
const getStudent = async (req, res) =>
{

    sql = `SELECT * FROM students WHERE student_id = ${req.query.student_id};`

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

 const postStudent = async (req, res) =>
 {

    try 
    {

        let sql = "INSERT INTO students (first_name, last_name1, last_name2, ingreso) " + 
                  "VALUES ('" + req.body.first_name + "', '" +
                                req.body.last_name1 + "', '" +
                                req.body.last_name2 + "', '" +
                                req.body.ingreso + "')";
        
        console.log(sql);
        let [result] = await pool.query(sql);
        console.log(result);

        if (result.insertId)
           res.send(String(result.insertId));

        else
          res.send("-1");
    }
    catch(err)
    {
        console.log(err);
    }
 } 

 const putStudent = async (req, res) =>
 {
     try
     {   
         console.log(req.body);
         let params = [req.body.first_name, 
                     req.body.last_name1, 
                     req.body.last_name2,
                     req.body.ingreso,
                     req.body.student_id]
 
         let sql = "UPDATE students SET first_name = COALESCE(?, first_name) , " + 
                   "last_name1 = COALESCE(?, last_name1) , " + 
                   "last_name2 = COALESCE(?, last_name2), " +
                   "ingreso = COALESCE(?, ingreso) WHERE student_id = ?";

         console.log(sql);
         let [result] = await pool.query(sql, params);
         res.send(result); 
     }
     catch(err)
     {
         console.log(err)
     }
 }
 const deleteStudent = async (req, res) =>
 {

    try 
    {
        console.log(req.body);
        let sql = "DELETE FROM students WHERE student_id = ?";
        console.log(sql);
        let [result] = await pool.query(sql, [req.body.student_id]);
        res.send(result);
    }
    catch(err)
    {
        console.log(err);
    }
 }     
 
 

module.exports = {getStudents, getStudent, postStudent, putStudent, deleteStudent};