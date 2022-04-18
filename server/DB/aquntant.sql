-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 18, 2022 at 12:07 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aquntant`
--

-- --------------------------------------------------------

--
-- Table structure for table `movement`
--

CREATE TABLE `movement` (
  `id` int(5) NOT NULL,
  `date` date NOT NULL,
  `taxid` int(3) NOT NULL,
  `amount` int(7) NOT NULL,
  `partnerid` int(4) NOT NULL,
  `comment` text COLLATE utf8mb4_hungarian_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Dumping data for table `movement`
--

INSERT INTO `movement` (`id`, `date`, `taxid`, `amount`, `partnerid`, `comment`) VALUES
(1,'2022-11-01',6,-248696,9,"Procurement of goods"),
(2,'2022-03-18',7,302286,11,"Sale"),
(4,'2022-11-21',6,-733131,4,"Procurement of goods"),
(5,'2022-04-04',4,144381,7,"Sale"),
(6,'2022-09-28',3,-822387,11,"Procurement of goods"),
(7,'2022-02-09',2,124729,11,"Sale"),
(8,'2022-07-03',5,624999,9,"Sale"),
(9,'2022-06-22',3,64760,9,"Sale"),
(10,'2022-09-28',3,887767,11,"Sale"),
(11,'2022-10-13',8,943888,9,"Sale"),
(12,'2022-03-03',2,345127,9,"Sale"),
(13,'2022-05-31',2,-827014,14,"Procurement of goods"),
(14,'2022-08-03',5,802472,6,"Sale"),
(15,'2022-05-24',3,704809,2,"Sale"),
(16,'2022-12-26',4,116005,2,"Sale"),
(17,'2022-02-26',7,-242189,1,"Procurement of goods"),
(18,'2022-02-09',1,249391,13,"Sale"),
(19,'2022-08-17',6,-61321,7,"Procurement of goods"),
(20,'2022-12-29',1,-346662,12,"Procurement of goods"),
(21,'2022-04-28',6,495080,1,"Sale"),
(22,'2022-06-04',2,520912,3,"Sale"),
(23,'2022-04-14',7,-574770,6,"Procurement of goods"),
(24,'2022-10-23',3,667578,7,"Sale"),
(25,'2022-01-01',3,-368329,8,"Procurement of goods"),
(26,'2022-02-13',8,-523194,5,"Procurement of goods"),
(27,'2022-05-09',4,-965607,5,"Procurement of goods"),
(28,'2022-07-04',2,967831,2,"Sale"),
(29,'2022-02-04',8,-771541,7,"Procurement of goods"),
(30,'2022-06-04',7,-129838,3,"Procurement of goods"),
(31,'2022-04-22',4,-139559,4,"Procurement of goods"),
(32,'2022-05-07',6,-292834,14,"Procurement of goods"),
(33,'2022-12-12',3,-124884,10,"Procurement of goods"),
(34,'2022-02-03',5,290496,13,"Sale"),
(35,'2022-04-22',1,362720,5,"Sale"),
(36,'2022-11-19',4,837524,13,"Sale"),
(37,'2022-10-15',6,298384,9,"Sale"),
(38,'2022-03-20',7,412019,11,"Sale"),
(39,'2022-12-29',6,738688,14,"Sale"),
(40,'2022-10-07',7,65854,1,"Sale");

-- --------------------------------------------------------

--
-- Table structure for table `partner`
--

CREATE TABLE `partner` (
  `id` int(4) NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `email` varchar(20) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `country` varchar(20) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `postal_code` varchar(6) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `address` varchar(50) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `userid` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Dumping data for table `partner`
--

INSERT INTO `partner` (`id`, `name`, `email`, `country`, `postal_code`, `address`, `userid`) VALUES
(1, 'Tester  Toby', 'test@email.com', 'testnation1', '420', 'Test city,test str. 21', 1),
(2, 'Bugfix Brigitte', 'bugfix@email.com', 'Fixination', '2233', 'Fixer\'s city,Fixin str. 21', 2),
(3, 'Typo Thomas', 'tpyo@email.com', 'Typonation', '2737', 'Typyoers\'s city,topy str. 12', 3),
(4, 'Router Richard', 'route@email.com', 'Routernation', '3437', 'Routers\'s city,Router str. 12', 4),
(5, 'Macy\'s', 'info@macys.com', 'US, Florida', '33166', 'Miami Springs, 2549 Arbutus Drive', 1),
(6, 'Citigroup', 'info@citigroup.com', 'US, Virginia', '22304', 'Alexandria, 2983 Perine Street', 1),
(7, 'JetBlue Airways', 'info@jetblue-airways', 'US, Georgia', '30097', 'Duluth, 168 Junior Avenue', 1),
(8, 'Caterpillar', 'info@caterpillar.com', 'US, Washington DC', '30097', 'Washington, 3912 Hickory Lane', 1),
(9, 'Hormel Foods', 'info@hormel-foods.co', 'US, Texas', '77036', 'Houston, 1706 Mulberry Street', 1),
(10, 'Cintas', 'info@cintas.com', 'Hungary', '8564', 'Ugod, Kárpát u. 27.', 3),
(11, 'Mondelez Internation', 'info@mondelez.com', 'Hungary', '9371', 'Vitnyéd, Wesselényi u. 68.', 3),
(12, 'Newell Brands', 'info@newell-brands.c', 'Hungary', '9736', 'Csepreg, Belgrád rkp. 12.', 3),
(13, 'Dominion Energy', 'info@dominion.com', 'Hungary', '2194', 'Tura, Síp utca 48.', 3),
(14, 'Realogy Holdings', 'info@realogy.com', 'Hungary', '2760', 'Nagykáta, Munkácsy Mihály út 28.', 3);

-- --------------------------------------------------------

--
-- Table structure for table `tax`
--

CREATE TABLE `tax` (
  `id` int(3) NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `percent` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Dumping data for table `tax`
--

INSERT INTO `tax` (`id`, `name`, `percent`) VALUES
(1, 'altalanos', 27),
(2, 'tej-/gabonatermek', 18),
(3, 'gyogyszer/gyogyaszat', 5),
(4, 'konyv/ujsag', 5),
(5, 'haziasitott allat es', 5),
(6, 'tojas/hal', 5),
(7, 'targyi adomentes', 0),
(8, 'alanyi adomentes', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(5) NOT NULL,
  `username` varchar(15) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `email` varchar(20) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `pass` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `pass`) VALUES
(1, 'tester1', 'test@email.com', '$2b$10$45TWVXfW4J6bEQR9O9JYluIbK7VkOiq.MD75srZSqs/YAn5lqsdde'),
(2, 'fixer1', 'bugfix@email.com', '$2b$10$HD7zOpPr9AixFb2NgxwG/eNZpj2KcL02YKspY3aa/XT/RMtYHpUFO'),
(3, 'pyot1', 'tpyo@email.com', '$2b$10$gaDopZOXuhvRlNnZUiIbJOQ/dTUnxZP58DdM10GMtHhrT.O7Q7JT2'),
(4, 'router2', 'route@email.com', '$2b$10$eLk7gq4RWtV4NtnQAo4cO.BtIL.AkJ5PaojBYkVg4Pu88pJ02yhhq'),
(5, 'borzsteszt', 'tesztnew@email.com', '$2b$10$tLRNXURXGf3BxDGFOdkcdeyqllecUlTv8u39bSH.NZIKckKm15xay'),
(6, 'react', 'react@gmail.com', '$2b$10$9W/NRQs2jxEYe4Kim8J8fOQxlIWg9QPUYrrXB8RspHN6nlO0I/pU6'),
(8, 'react3', 'react3@gmail.com', '$2b$10$BwXDOPpYLjeRZfbvWb5AC.kiWU2bSWf2DM.9HJfReTIK0a9fDrUPi'),
(11, 'react2', 'react2@gmail.com', '$2b$10$ZRBRxCnkHq1lamf8HgYcsennIkERoOEvYUuX1aM6TbdLpo9jXhGJO');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movement`
--
ALTER TABLE `movement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `partnerid` (`partnerid`),
  ADD KEY `taxid` (`taxid`) USING BTREE;

--
-- Indexes for table `partner`
--
ALTER TABLE `partner`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `userid` (`userid`);

--
-- Indexes for table `tax`
--
ALTER TABLE `tax`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Unique` (`username`,`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movement`
--
ALTER TABLE `movement`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `partner`
--
ALTER TABLE `partner`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tax`
--
ALTER TABLE `tax`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `movement`
--
ALTER TABLE `movement`
  ADD CONSTRAINT `movement_ibfk_2` FOREIGN KEY (`taxid`) REFERENCES `tax` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `movement_ibfk_3` FOREIGN KEY (`partnerid`) REFERENCES `partner` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `partner`
--
ALTER TABLE `partner`
  ADD CONSTRAINT `partner_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
