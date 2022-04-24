--MOTOR DB MYSQL
--DATABASE todosistemas 
--jdbc:mysql://localhost:3306/todosistemas
CREATE TABLE `actividades` (
  `id` int NOT NULL DEFAULT '0',
  `nombre` varchar(45) NOT NULL,
  `estado` varchar(45) NOT NULL,
  `fecha` varchar(45) NOT NULL,
  `dias` varchar(45) DEFAULT NULL,
  `idempleado` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idempleado` (`idempleado`),
  CONSTRAINT `idempleado` FOREIGN KEY (`idempleado`) REFERENCES `empleado` (`idempleado`)
);

CREATE TABLE `empleado` (
  `idempleado` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `cargo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idempleado`)
);

insert into empleado(nombre,cargo) values('Juan','Desarrollador');
