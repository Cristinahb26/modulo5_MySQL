const mysql = require("mysql2/promise");

async function main (){

    try {

        let connection = await mysql.createConnection(
            {
                host       : "localhost",
                user       : "root",
                password   : "123456",
                database   : "diagrama"
           
            });
            console.log("coneccion correcta");

            /* Obtén los nombres y apellidos de los alumnos y los nombres de las asignaturas en las que están apuntados. */

            // const sql = "SELECT first_name, last_name1, last_name2, title FROM students INNER JOIN grupo ON (students.student_id = grupo.grupo_id) INNER JOIN subjects_teacher ON (grupo.grupo_id = subjects_teacher.grupo_id) INNER JOIN subjects ON (subjects_teacher.subject_id = subjects.subject_id)"


            /* Obtén todos los nombres y apellidos de los profesores y los nombres de las asignaturas que imparten */

            // const sql = "SELECT first_name, last_name, title FROM teachers INNER JOIN subjects_teacher ON (teachers.teacher_id = subjects_teacher.teacher_id) INNER JOIN subjects ON (subjects_teacher.subject_id = subjects.subject_id)"


            /* Obtén el número total de alumnos por asignatura, el nombre de la asignatura y el nombre y apellidos del profesor que la imparte */

            // const sql = "SELECT subjects.title, teachers.first_name, teachers.last_name, COUNT(student_id) AS Total_Alumnos FROM subjects INNER JOIN subjects_teacher ON (subjects.subject_id = subjects_teacher.subject_id) INNER JOIN teachers ON (subjects_teacher.teacher_id = teachers.teacher_id) INNER JOIN students ON (subjects_teacher.grupo_id = students.student_id) GROUP BY subjects.title, teachers.first_name, teachers.last_name;"


            const [result , data] = await connection.execute(sql);
            console.log(result);
 
      
     }
     catch(err)
     {
         console.log(err);
         await connection.end();
     }
 } 
 
 main();