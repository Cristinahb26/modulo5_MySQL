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


            // RETO1

            // const sql = "CREATE TABLE direccion (id INT AUTO_INCREMENT PRIMARY KEY," + 
            //                                             "calle VARCHAR(45)," +
            //                                             "numero VARCHAR(45)," +
            //                                             "ciudad VARCHAR(45))";
            
            // const [resultDireccion] = await connection.query(sql);
            // console.log("tabla creada");
            // console.log(resultDireccion);                                       
                                                        
                                 
            /* para añadir una columna */
        //    const sql = 'ALTER TABLE direccion ADD COLUMN pais VARCHAR(45) NULL AFTER ciudad'
          

           /*para borra una columna*/
        //    const sql = 'ALTER TABLE direccion DROP COLUMN numero';
           

            /* Eliminar la tabla de direccion de forma permanente */

        //    let sql = 'DROP TABLE direccion';
        //    let [result] = await connection.query(sql);
        //    console.log("tabla eliminada");
        //    console.log(result);


            /*Retear todas las notas de los alumnos a 0 */

        //    const sql = "UPDATE marks SET note = 0";
    

           /*Obtener nombre y primer apellido de todos los estudiantes */

        //    const sql = "SELECT first_name, last_name1 FROM diagrama.students";


            /*Obtener todos los datos de los profesores*/

        //    const sql = 'SELECT * FROM diagrama.teachers';


        //    RETO2

          /* Eliminar de la base de datos todas las notas cuya fecha tenga más de 10 años */

        //   const sql = "DELETE FROM marks WHERE date < '2013-10-04'";


          /* Actualizar todas las notas que sean menorde 5 */

        //   const sql = "UPDATE marks SET note = 5 WHERE note < 5"
        

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