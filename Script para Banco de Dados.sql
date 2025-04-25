-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: projetos
-- ------------------------------------------------------
-- Server version	8.0.41

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
-- Table structure for table `pagamentos`
--

DROP TABLE IF EXISTS `pagamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pagamentos` (
  `idPagamentos` int NOT NULL AUTO_INCREMENT,
  `numCartao` int NOT NULL,
  `Valor` float NOT NULL,
  `data_hora_pagamento` datetime DEFAULT CURRENT_TIMESTAMP,
  `destinatario` varchar(250) DEFAULT NULL,
  `categoria` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`idPagamentos`),
  UNIQUE KEY `idPagamentos_UNIQUE` (`idPagamentos`)
) ENGINE=InnoDB AUTO_INCREMENT=228 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagamentos`
--

LOCK TABLES `pagamentos` WRITE;
/*!40000 ALTER TABLE `pagamentos` DISABLE KEYS */;
INSERT INTO `pagamentos` VALUES (109,5678,200,'2025-04-19 04:37:00','Taxistas','Transporte'),(110,1234,153.86,'2025-04-14 09:05:00','Metrô Linha Verde','Transporte'),(111,5678,122.69,'2025-04-29 01:30:00','Ônibus Central','Transporte'),(112,1234,132.37,'2025-04-13 07:07:00','Aplicativo de Carona','Alimentação'),(113,5678,138.09,'2025-04-16 01:42:00','Metrô Linha Verde','Alimentação'),(114,1234,166.75,'2025-04-15 17:59:00','Restaurante Y','Transporte'),(115,5678,5.44,'2025-04-26 16:47:00','Padaria Z','Alimentação'),(116,1234,186.37,'2025-04-11 12:17:00','Uber','Transporte'),(117,1234,16.91,'2025-04-25 02:14:00','Restaurante Y','Transporte'),(118,1234,189.33,'2025-04-22 23:22:00','Supermercado Ponto','Transporte'),(119,5678,191.77,'2025-04-18 12:29:00','Café Aroma','Transporte'),(120,5678,199.57,'2025-04-11 07:20:00','Metrô Linha Verde','Transporte'),(121,1234,17.14,'2025-04-14 11:47:00','Aplicativo de Carona','Transporte'),(122,1234,145.7,'2025-04-23 10:31:00','Café Aroma','Transporte'),(123,5678,182.2,'2025-04-29 15:03:00','Supermercado Ponto','Alimentação'),(124,1234,89.62,'2025-04-20 13:27:00','Supermercado Ponto','Alimentação'),(125,1234,13.53,'2025-04-06 18:51:00','Café Aroma','Transporte'),(126,1234,112.07,'2025-04-07 21:10:00','Supermercado Ponto','Alimentação'),(127,1234,76.6,'2025-04-06 20:27:00','Supermercado Ponto','Alimentação'),(128,5678,186.9,'2025-04-01 22:17:00','Metrô Linha Verde','Transporte'),(129,1234,93.05,'2025-04-04 06:03:00','Ônibus Central','Alimentação'),(130,5678,149.44,'2025-04-27 06:26:00','Aplicativo de Carona','Alimentação'),(131,1234,122.4,'2025-04-14 13:53:00','Uber','Alimentação'),(132,5678,84.5,'2025-04-27 00:51:00','Ônibus Central','Transporte'),(133,5678,88.26,'2025-04-23 20:13:00','Padaria Z','Alimentação'),(134,1234,123.69,'2025-04-06 03:07:00','Café Aroma','Transporte'),(135,1234,82.05,'2025-04-14 03:40:00','Padaria Z','Transporte'),(136,5678,22.46,'2025-04-11 07:46:00','Restaurante Y','Transporte'),(137,5678,25.61,'2025-04-14 04:57:00','Padaria Z','Alimentação'),(138,5678,118.34,'2025-04-04 11:57:00','Ônibus Central','Alimentação'),(139,5678,13.72,'2025-04-29 15:16:00','Supermercado Ponto','Transporte'),(140,5678,147.15,'2025-04-19 16:28:00','Aplicativo de Carona','Alimentação'),(141,5678,42.12,'2025-04-17 08:48:00','Café Aroma','Transporte'),(142,5678,199.38,'2025-04-19 23:38:00','Supermercado Ponto','Alimentação'),(143,1234,91.49,'2025-04-04 01:44:00','Restaurante Y','Alimentação'),(144,5678,166.13,'2025-04-28 00:57:00','Restaurante Y','Alimentação'),(145,5678,77.41,'2025-04-26 04:04:00','Café Aroma','Alimentação'),(146,1234,40.12,'2025-04-11 18:38:00','Restaurante Y','Alimentação'),(147,1234,20.99,'2025-04-19 05:52:00','Restaurante Y','Transporte'),(148,5678,45.66,'2025-04-18 11:54:00','Uber','Transporte'),(149,5678,89.25,'2025-04-13 10:20:00','Uber','Alimentação'),(150,1234,180.18,'2025-04-01 06:58:00','Aplicativo de Carona','Alimentação'),(151,1234,133.1,'2025-04-11 00:29:00','Ônibus Central','Transporte'),(152,1234,23.98,'2025-04-06 06:05:00','Supermercado Ponto','Transporte'),(153,1234,20.18,'2025-04-30 11:59:00','Uber','Transporte'),(154,5678,69.9,'2025-04-18 07:37:00','Ônibus Central','Alimentação'),(155,5678,111.34,'2025-04-19 14:27:00','Ônibus Central','Transporte'),(156,5678,150.08,'2025-04-27 23:37:00','Café Aroma','Alimentação'),(157,1234,108.87,'2025-04-13 12:59:00','Metrô Linha Verde','Alimentação'),(158,5678,44.46,'2025-04-03 03:18:00','Metrô Linha Verde','Transporte'),(159,5678,47.91,'2025-04-30 08:33:00','Aplicativo de Carona','Transporte'),(160,1234,187.97,'2025-04-10 16:41:00','Supermercado Ponto','Alimentação'),(161,5678,181.44,'2025-04-19 05:21:00','Metrô Linha Verde','Transporte'),(162,1234,104.93,'2025-04-15 04:05:00','Padaria Z','Alimentação'),(163,1234,84.74,'2025-04-14 14:00:00','Metrô Linha Verde','Alimentação'),(164,5678,199.01,'2025-04-23 01:00:00','Metrô Linha Verde','Transporte'),(165,1234,22.75,'2025-04-19 05:49:00','Supermercado Ponto','Alimentação'),(166,5678,119.92,'2025-04-18 12:56:00','Supermercado Ponto','Transporte'),(167,5678,171.54,'2025-04-13 12:28:00','Aplicativo de Carona','Alimentação'),(168,5678,11.37,'2025-04-10 16:03:00','Uber','Alimentação'),(169,5678,42.28,'2025-04-01 07:17:00','Aplicativo de Carona','Alimentação'),(170,1234,7.18,'2025-04-29 19:28:00','Ônibus Central','Alimentação'),(171,5678,180.99,'2025-04-05 06:41:00','Uber','Alimentação'),(172,5678,135.64,'2025-04-22 14:10:00','Café Aroma','Transporte'),(173,5678,83.49,'2025-04-01 23:50:00','Metrô Linha Verde','Alimentação'),(174,1234,15.9,'2025-04-09 22:52:00','Uber','Alimentação'),(175,1234,18.51,'2025-04-13 04:25:00','Restaurante Y','Transporte'),(176,1234,121.1,'2025-04-15 06:15:00','Uber','Transporte'),(177,1234,24.8,'2025-04-05 10:53:00','Metrô Linha Verde','Alimentação'),(178,5678,9.72,'2025-04-19 12:42:00','Ônibus Central','Transporte'),(179,5678,149.65,'2025-04-05 07:24:00','Supermercado Ponto','Transporte'),(180,1234,58.97,'2025-04-22 04:45:00','Supermercado Ponto','Transporte'),(181,5678,156.2,'2025-04-09 21:46:00','Padaria Z','Transporte'),(182,1234,75.04,'2025-04-25 19:16:00','Café Aroma','Transporte'),(183,5678,99.55,'2025-04-13 01:15:00','Padaria Z','Transporte'),(184,5678,69.86,'2025-04-27 23:21:00','Restaurante Y','Transporte'),(185,5678,53.16,'2025-04-14 14:36:00','Restaurante Y','Alimentação'),(186,5678,72.51,'2025-04-12 08:50:00','Uber','Transporte'),(187,1234,90.38,'2025-04-02 14:36:00','Café Aroma','Alimentação'),(188,5678,55.11,'2025-04-06 07:38:00','Uber','Alimentação'),(189,5678,170.62,'2025-04-01 01:44:00','Padaria Z','Transporte'),(190,1234,80.85,'2025-04-17 00:44:00','Uber','Transporte'),(191,1234,83.58,'2025-04-17 18:10:00','Ônibus Central','Alimentação'),(192,5678,87.68,'2025-04-13 23:08:00','Supermercado Ponto','Alimentação'),(193,5678,31.88,'2025-04-20 11:57:00','Supermercado Ponto','Transporte'),(194,1234,126.37,'2025-04-13 13:56:00','Restaurante Y','Alimentação'),(195,1234,168.51,'2025-04-16 22:29:00','Ônibus Central','Alimentação'),(196,5678,101.95,'2025-04-13 03:51:00','Ônibus Central','Alimentação'),(197,1234,100.89,'2025-04-21 04:39:00','Café Aroma','Alimentação'),(198,5678,52.74,'2025-04-04 16:40:00','Restaurante Y','Transporte'),(199,5678,143.2,'2025-04-12 03:59:00','Supermercado Ponto','Transporte'),(200,1234,151.21,'2025-04-27 09:16:00','Ônibus Central','Transporte'),(201,5678,38.86,'2025-04-25 01:51:00','Padaria Z','Alimentação'),(202,1234,185.45,'2025-04-23 05:54:00','Uber','Alimentação'),(203,5678,74.06,'2025-04-27 19:48:00','Uber','Alimentação'),(204,1234,21.7,'2025-04-20 05:06:00','Aplicativo de Carona','Transporte'),(205,1234,115.07,'2025-04-07 04:51:00','Aplicativo de Carona','Alimentação'),(206,5678,155.96,'2025-04-22 09:09:00','Ônibus Central','Alimentação'),(207,1234,195.21,'2025-04-20 00:52:00','Ônibus Central','Transporte'),(208,5678,102.58,'2025-04-04 07:06:00','Padaria Z','Alimentação'),(209,1234,28.51,'2025-04-12 16:02:00','Restaurante Y','Alimentação'),(210,1234,121.69,'2025-04-04 23:51:00','Aplicativo de Carona','Transporte'),(211,5678,136.18,'2025-04-23 02:32:00','Supermercado Ponto','Transporte'),(212,1234,25.59,'2025-04-20 06:22:00','Metrô Linha Verde','Alimentação'),(213,1234,29.19,'2025-04-01 10:38:00','Café Aroma','Transporte'),(214,5678,132.78,'2025-04-09 20:22:00','Ônibus Central','Transporte'),(215,5678,82.07,'2025-04-28 01:44:00','Ônibus Central','Alimentação'),(216,1234,142.7,'2025-04-05 12:23:00','Aplicativo de Carona','Transporte'),(217,1234,155.61,'2025-04-08 23:59:00','Café Aroma','Alimentação'),(218,1234,180.16,'2025-04-10 18:04:00','Aplicativo de Carona','Alimentação'),(219,1234,169.16,'2025-04-21 13:00:00','Café Aroma','Transporte'),(220,5678,11.37,'2025-04-01 00:24:00','Padaria Z','Alimentação'),(221,1234,86.97,'2025-04-25 00:08:00','Metrô Linha Verde','Alimentação'),(222,5678,190,'2025-04-14 15:46:00','Uber','Transporte'),(223,5678,36.22,'2025-04-20 20:53:00','Padaria Z','Alimentação'),(226,5678,500,NULL,NULL,'Transporte'),(227,5678,1000,'2025-04-24 17:05:19','Estudio tatuagem','Entretenimento');
/*!40000 ALTER TABLE `pagamentos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-25 10:21:49
