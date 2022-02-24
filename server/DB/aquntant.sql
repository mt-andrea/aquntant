-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 24, 2022 at 06:19 PM
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
  `typeid` int(3) NOT NULL,
  `amount` int(7) NOT NULL,
  `taxid` int(3) NOT NULL,
  `partnerid` int(4) NOT NULL,
  `comment` text COLLATE utf8mb4_hungarian_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

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
  `address` varchar(50) COLLATE utf8mb4_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tax`
--

CREATE TABLE `tax` (
  `id` int(3) NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `percent` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

CREATE TABLE `type` (
  `id` int(3) NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movement`
--
ALTER TABLE `movement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `typeid` (`typeid`,`taxid`,`partnerid`),
  ADD KEY `taxid` (`taxid`),
  ADD KEY `partnerid` (`partnerid`);

--
-- Indexes for table `partner`
--
ALTER TABLE `partner`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

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
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movement`
--
ALTER TABLE `movement`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `partner`
--
ALTER TABLE `partner`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tax`
--
ALTER TABLE `tax`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `type`
--
ALTER TABLE `type`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `movement`
--
ALTER TABLE `movement`
  ADD CONSTRAINT `movement_ibfk_1` FOREIGN KEY (`taxid`) REFERENCES `tax` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `movement_ibfk_2` FOREIGN KEY (`typeid`) REFERENCES `type` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `movement_ibfk_3` FOREIGN KEY (`partnerid`) REFERENCES `partner` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
