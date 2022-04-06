-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2022 at 11:55 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

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
  `typeid` int(3) NOT NULL,
  `amount` int(7) NOT NULL,
  `partnerid` int(4) NOT NULL,
  `comment` text COLLATE utf8mb4_hungarian_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Dumping data for table `movement`
--

INSERT INTO `movement` (`id`, `date`, `typeid`, `amount`, `partnerid`, `comment`) VALUES
(1, '1999-02-03', 1, 20000, 1, 'Likes to test stuff.'),
(2, '1985-12-13', 2, -20530, 2, 'Likes to fix stuff.'),
(3, '1995-06-23', 3, -530, 3, 'Likes to unfix stuff.'),
(4, '2001-03-16', 4, 40400, 4, 'Likes to route stuff.');

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
(4, 'Router Richard', 'route@email.com', 'Routernation', '3437', 'Routers\'s city,Router str. 12', 4);

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
(1, 'taxn1', 24),
(2, 'taxn2', 20),
(3, 'taxn3', 12),
(4, 'taxn4', 52);

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

CREATE TABLE `type` (
  `id` int(3) NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `taxid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Dumping data for table `type`
--

INSERT INTO `type` (`id`, `name`, `taxid`) VALUES
(1, 'type1', 1),
(2, 'type2', 2),
(3, 'type3', 3),
(4, 'type4', 4);

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
  ADD KEY `typeid` (`typeid`);

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
-- Indexes for table `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `taxid` (`taxid`);

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
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `partner`
--
ALTER TABLE `partner`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tax`
--
ALTER TABLE `tax`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `type`
--
ALTER TABLE `type`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
  ADD CONSTRAINT `movement_ibfk_2` FOREIGN KEY (`typeid`) REFERENCES `type` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `movement_ibfk_3` FOREIGN KEY (`partnerid`) REFERENCES `partner` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `partner`
--
ALTER TABLE `partner`
  ADD CONSTRAINT `partner_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `type`
--
ALTER TABLE `type`
  ADD CONSTRAINT `type_ibfk_1` FOREIGN KEY (`taxid`) REFERENCES `tax` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
