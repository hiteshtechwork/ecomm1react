-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 22, 2024 at 11:59 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecomm1react`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  `role` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `active`, `created_at`, `updated_at`, `deleted_at`, `role`) VALUES
(4, 'mandeep', 'man@1', '123', 0, '2024-03-21 11:56:26', '2024-03-21 11:56:26', NULL, NULL),
(5, 'sdf', 'asdf', 'asfd', 0, '2024-03-21 12:02:02', '2024-03-21 12:02:02', NULL, NULL),
(6, 'asdff', 'sadff', '$2b$10$/P.gtSpwq/.QbZe1qI4hnelJL32jtMcViDjPAGCQQD09czgK6E5cC', 0, '2024-03-21 12:57:25', '2024-03-21 12:57:25', NULL, NULL),
(7, 'hitesh', 'hites@1', '$2b$10$/ldsshrZ6RR1hKcNQgoOg.op//hWFv2X3tdx7KBHAIpOVa88wITHy', 0, '2024-03-21 13:04:24', '2024-03-21 13:04:24', NULL, NULL),
(8, 'hit', 'h@', '$2b$10$SitQ/z/L3Yjf.oUoH7a1X.I5RuYjaCaLV4fuhaLqXMR/cKb4CO6zy', 0, '2024-03-22 05:55:17', '2024-03-22 05:55:17', NULL, NULL),
(9, 'hit', 'h@', '$2b$10$ET0YRyDonFIDZdKP9GEkqOTC5.9UI3avDmKxJalFK/QjUV7aKLhAC', 0, '2024-03-22 05:55:28', '2024-03-22 05:55:28', NULL, NULL),
(10, 'hit', 'h@1', '$2b$10$82LC2TYyFxnlXMSi5y/ree1KYcZvy3Mw4709WCZylub2t/qzOgbpe', 0, '2024-03-22 05:56:20', '2024-03-22 05:56:20', NULL, NULL),
(11, 'admin', 'admin@1', '$2b$10$oz.krRCyeay1u/eB2eZcmOK2IQd1Y5f3Epwhh3awK.hAtZf1L9SWK', 0, '2024-03-22 09:54:42', '2024-03-22 09:54:42', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
