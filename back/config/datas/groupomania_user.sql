-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: groupomania
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Paul','paul@gm.com','$2b$10$qvrXG8y9XX5daFShw3aGvuj/O9YT2uPjKif4BYH/LkUxtin4DycW6','2022-01-10 14:08:45','2022-01-10 14:08:45',1),(3,'Chani','chani@gm.com','$2b$10$QHYg72je.8gpC7HqIDKtYeJ41NCuFhEhkBCjKs3PgScrrkXlMJVfy','2022-01-10 14:11:58','2022-01-10 14:11:58',2),(4,'Leto','leto@gm.com','$2b$10$rUMopdJeaFCU0UhFheIux.nyAcQRxRAnYVP5OLk45X7zAbrBHoy32','2022-01-10 14:12:35','2022-01-10 14:12:35',2),(5,'Jessica','jessica@gm.com','$2b$10$.WD8JG2wr07IkmXdN6nhK.azlnBHmrV5KeDV0pIEkdeXX1GHLNnai','2022-01-10 14:12:57','2022-01-10 14:12:57',1),(6,'Duncan','duncan@gm.com','$2b$10$DnP8J6DQnEP91jMpJ6pQFexn2ffVjYi32HARgg9X/YMHGVL7172KO','2022-01-10 14:13:18','2022-01-10 14:13:18',1),(7,'Stilgar','stilgar@gm.com','$2b$10$Mc4uoH9MUpz9A3kpyqfLq.oRgsi8hRfQUXUzaKbImsarNk.FeUHDy','2022-01-10 14:13:41','2022-01-10 14:13:41',1),(8,'Alia','alia@gm.com','$2b$10$pRnS75bNw5WCcIcFZeE2OONFPQGa5x/aWhJCRFqcGY5JFFq/B6Mca','2022-01-10 14:13:59','2022-01-10 14:13:59',1),(9,'Gurney','gurney@gm.com','$2b$10$E3TVajGSpxR.GVMWKeG4.eu/H8lJZ2a3G0M./xEGqRViZdHfGSKZa','2022-01-10 14:14:21','2022-01-10 14:14:21',1),(10,'Liet','liet@gm.com','$2b$10$XUnCkUmNURriMEWXFu7nhe9BV.0WQ3NQbASxRC574HI76tKt5VqbK','2022-01-10 14:14:38','2022-01-10 14:14:38',1),(11,'Ghani','ghani@gm.com','$2b$10$qmIZtj8u9hbssKUoWZex8u5yEmT1oTUUCIiW/xqq.s67UGeSYjfYO','2022-01-10 14:35:24','2022-01-20 15:08:30',1),(12,'Farad','farad@gm.com','$2b$10$.Q4de6ibA9zVccdTOHT45urEEl6v/.66yiHdxEQxKvoyZxutyqIhW','2022-01-13 14:58:08','2022-01-13 14:58:08',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-21 14:53:49
