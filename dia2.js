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


            /*RETO1*/

            /* calcular la nota media de los alumnos de la asignatura 1. */

            // const sql = "SELECT AVG(note) AS nota_media FROM marks WHERE subject_id = 1";


            /* Calcular el número total de alumnos que hay en el bootcamp */

            // const sql = "SELECT COUNT(*) AS total_alumnos FROM students;"


            /* Listar todos los campos de la tabla “groups” */

            // const sql = "SELECT * FROM grupo;"


            /* Elimina todas las notas de la base de datos que estén por encima de 5 y que sean del año pasado */

            // const sql = "DELETE FROM marks WHERE note > 5 AND (date >= '2022-01-01' AND date < '2023-01-01');"


            /* Datos de todos los estudiantes del bootcamp de este año */

            // const sql = "SELECT * FROM students WHERE año_ingreso = 2023;"


            /* Numero de profesores que hay por cada asignatura */

            // const sql = "SELECT subject_id, COUNT(*) AS num_teacher FROM subjects_teacher GROUP BY subject_id ;"



            /* RETO2 */

            /* Obtén el id y la nota de los alumnos que tengan un id entre 1 y 20, o que tenga una nota
            mayor de 8 y la nota tenga fecha del año pasado */

            // const sql = "SELECT student_id, note FROM marks WHERE (student_id BETWEEN 1 AND 20) OR (note >8 AND date =2022);"
            //             "SELECT student_id, note FROM marks WHERE (student_id = 1 <= 20) OR (note > 8 AND date = 2022);"


            /* Obtén la media de las notas que se han dado en el último año por asignatura */
            
        //    const sql = " SELECT AVG(note) AS num_marks FROM marks WHERE date BETWEEN '2023-01-01' AND '2023-10-10' GROUP BY subject_id"


            /* Obtén la media aritmética de las notas que se han dado en el último año por alumno */

            // const sql = "SELECT AVG(note) FROM marks WHERE date BETWEEN '2023-01-01' AND '2023-10-10' GROUP BY student_id"
        

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
