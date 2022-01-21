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
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'Muad\'Dib','Souris-kangourou adaptée à Arrakis. Associée à la mythologie fremen, sa silhouette étant visible sur la seconde lune de la planète. Ce petit animal est admiré par les Fremen pour sa capacité d\'adaptation au désert.','2022-01-10 14:22:00','2022-01-15 09:12:30',1),(2,'Sihaya','terme fremen désignant le printemps du désert avec des implications religieuses sur la fécondité et \"le paradis à venir\".','2022-01-10 14:23:29','2022-01-11 14:46:52',3),(3,'Arrakis','troisième planète du système de Canopus. Plus connue sous le nom de Dune. Plus tard elle se fera appeler Rakis.','2022-01-10 14:28:01','2022-01-10 14:28:01',4),(4,'Révérende Mère','à l\'origine, une rectrice du Bene Gesserit qui a transformé le \"poison d\'illumination\" dans son corps pour atteindre le plus haut degré de perception. Titre adopté par les Fremen pour leurs propres chefs religieux qui connaissent une épreuve similaire.','2022-01-10 14:29:28','2022-01-10 14:29:28',5),(5,'Ghola','Copie conforme d\'une personne (même morte) à partir du patrimoine génétique récupéré à partir de certaines de ses cellules.','2022-01-10 14:32:07','2022-01-10 14:32:07',6),(6,'Sietch','terme Fremen pour \"lieu de réunion en période de danger\". Les Fremen vécurent si longtemps dans le danger que le terme finit par désigner toute grotte habitée par une communauté tribale.','2022-01-10 14:32:57','2022-01-10 14:32:57',7),(7,'Eau de Vie','poison d\' \"illumination\". (Voir Révérende Mère.) Liquide produit par un ver des sables (voir Shai-Hulud.) lorsqu\'il meurt noyé et qui, transformé par l\'organisme de la Révérende Mère, devient un narcotique provoquant l\'orgie du tau.','2022-01-10 14:34:29','2022-01-10 14:34:29',8),(8,'Ghanima','ce que l\'on acquiert durant le combat. Plus communément : souvenir de combat destiné à éveiller la mémoire.','2022-01-10 14:36:02','2022-01-10 14:36:02',11),(10,'Fremen','libres tribus d\'Arrakis, habitants du désert, survivants des Vagabonds Zensunni. (\"Pirates des sables\", selon le Dictionnaire Impérial.)','2022-01-10 14:39:51','2022-01-10 14:39:51',10);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
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
