-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 30, 2025 at 09:59 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('demo_cache_user1@gmail.com|127.0.0.1', 'i:1;', 1748931740),
('demo_cache_user1@gmail.com|127.0.0.1:timer', 'i:1748931739;', 1748931739);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_reset_tokens`
--

INSERT INTO `password_reset_tokens` (`email`, `token`, `created_at`) VALUES
('admin@gmail.com', '$2y$12$ZUZN.Drp05he3SwT9oqP2.k5MtAEugSz8b9NLR9ByZpUiKTQRKFUe', '2025-05-08 04:30:18'),
('harish.manori.uksaps@gmail.com', '$2y$12$mC/29OS..EbqUDncT7aVROqs/ZN0d4g35mRwk2XRHIMi.hLK0TLAS', '2025-04-29 03:34:01'),
('user1@gmail.com', '$2y$12$PbzpQur8bxotc39CXPMCC.w3By65xGnbst82QypM0Fu5IDxhBezhC', '2025-03-22 05:11:27');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('bw9emiL9XMXavILzSqxUEa5bydCUseGM1T4VRYmN', 2, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiZGhzNWJuZHhUU2JYWEFkWjVXeEc3UjFjQWlwbGM5TDB5Tk1jck1ibCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjI7fQ==', 1753858109),
('MhJcm2cAJ7FnmkpTVa1qTQnbsfbSfrs7LH2Rhg9u', 2, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiVGlkVE9ieVlrblE2aWhuTlBhVmpMeHpYQmN2UmNvajVpWmNJNklhViI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9kYXNoYm9hcmQiO31zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToyO30=', 1752132753),
('qtJZpqFNVtybzUdtcjdED2p5Ir3BbNw0LfCI9Li7', 2, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiN21DREQyNk9PRUIxUXRJb01VaXhrUnhxZlRkZ2RLWUxGdGE1OWJuTyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjI7fQ==', 1753860499);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'user',
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'user 1', 'harish.manori.uksaps@gmail.com', NULL, '$2y$12$rxhgtOPdzOLro2oq3I6wtOC06OxFgIaRLBG1lvjpLHydhUe9j/qVy', 'user', NULL, '2025-03-20 00:19:13', '2025-04-01 04:15:02'),
(2, 'admin', 'admin@gmail.com', NULL, '$2y$12$IPesfLe3OQpMiE7eHajWg.ck0ZQu9myJPlif6P3MoVs6f0j8yloZi', 'admin', 'X7jtGRAMvLrB4nwmA5dMllTgTT4kA1Z9NBHoRZXeBnjabWsGWvJ0abKMhNG1', '2025-03-20 00:19:59', '2025-03-20 00:19:59'),
(3, 'user 2', 'user2@gmail.com', NULL, '$2y$12$mli.7i27wZKneJ6eRvPliuZ4Co70mzOBliWiEcE4zEB/7pql9fyOO', 'user', NULL, '2025-04-03 00:42:13', '2025-04-03 00:42:13'),
(4, 'user3', 'user3@gmail.com', NULL, '$2y$12$I3m6g0msVhU5DE/vj8mRcehZZUNKHH6RT/TG4P167t7don35Fl1Z2', 'user', NULL, '2025-04-03 00:52:21', '2025-04-03 00:52:21'),
(5, 'user4', 'user4@gmail.com', NULL, '$2y$12$SPJy0XbxuLJcXZS3Jnlu5.HThO0RPLoImRMatqzBDr9i.4w62S29a', 'user', NULL, '2025-04-03 01:12:33', '2025-04-03 01:12:33'),
(6, 'user5', 'user5@gmail.com', NULL, '$2y$12$I8knEHWfUIHus5Gf4Q6kbOGcKbf903kxC1Qdxzxj2dMy8ChWJ06Xi', 'user', NULL, '2025-04-03 01:13:39', '2025-04-03 01:13:39'),
(7, 'user6', 'user6@gmail.com', NULL, '$2y$12$RXEq7nESYIqt12ajUH0ok.lipTh3Bs86FghknaPsSdomYp9NWD5UK', 'user', NULL, '2025-04-03 04:08:41', '2025-04-03 04:08:41'),
(8, 'user7', 'user7@gmail.com', NULL, '$2y$12$zY2vlsWCIEmQPDzo9fdDKe0qwDtZi3.mvIcO9LOYTrXZjUFCJWYe.', 'user', NULL, '2025-04-03 04:10:32', '2025-04-03 04:10:32'),
(9, 'User8', 'user8@gmail.com', NULL, '$2y$12$l4MtrNzcKemHyn77NCHkjeHtH6ry0YCG8eNIgfBNPhYE9qCY.B5Iy', 'user', NULL, '2025-04-03 05:34:24', '2025-04-03 05:34:24'),
(10, 'user9', 'user9@gmail.com', NULL, '$2y$12$D7rcs/Y7vo6dtst/E4F5luvl/xqWDdhpNBOKvOuwctoMmHMI.YIlm', 'user', NULL, '2025-04-03 06:04:00', '2025-04-03 06:04:00'),
(11, 'user 10', 'user10@gmail.com', NULL, '$2y$12$9fTEizHNq1n/AGUsagItu.QJ5Qutdmlr8d4U4xPmY0WPxY8.sSM4i', 'user', NULL, '2025-04-16 06:15:37', '2025-04-16 06:15:37'),
(12, 'user11', 'user11@gmail.com', NULL, '$2y$12$mRjLUgZSq4DgghmOADvxKu89v5PWCjUK84MUgrAll4TBJTKCaE1TS', 'user', NULL, '2025-04-16 06:16:04', '2025-04-16 06:16:04'),
(13, 'user12', 'user12@gmail.com', NULL, '$2y$12$pQgQVOwii1fzWNANWz9X3umO0/WX0XSwU5rwX1zUr09qNNFRApG5.', 'user', NULL, '2025-04-17 01:05:29', '2025-04-17 01:05:29'),
(14, 'user14', 'user14@gmail.com', NULL, '$2y$12$Gme2GTDA9vqRCJvEN55YOu0k/vZ1fwo9l4ln.c3FrPFd/IfS5TJMG', 'user', NULL, '2025-04-28 00:14:30', '2025-04-28 00:14:30'),
(15, 'user15', 'user15@gmail.com', NULL, '$2y$12$ZtkN0GU4bZLq9VRWSW5Qju8k9RpYmIvO6.6wOB510Ro3g3b4PpZFW', 'user', NULL, '2025-04-29 00:21:55', '2025-04-29 00:21:55'),
(16, 'user16', 'user16@gmail.com', NULL, '$2y$12$GFwr4NThQrZSGbl2Qq1ogedblH96ZORQ2wNEGDuBBoMrqQ5Eo5s0m', 'user', NULL, '2025-04-29 01:52:53', '2025-04-29 01:52:53'),
(17, 'user17', 'user17@gmail.com', NULL, '$2y$12$ApDzwQkNO8zjSR/ZeKPlaOVl7AOT5CERV4ut9bF/kAhDUobGLweaC', 'user', NULL, '2025-04-29 02:50:48', '2025-04-29 02:50:48'),
(18, 'fghgh', 'harish.hhhh.uksaps@gmail.com', NULL, '$2y$12$EhmshHGOrV3xabHdPzQGau9536zim8x0yU1wU5nxz4rdILA4hd55.', 'user', NULL, '2025-07-10 01:31:44', '2025-07-10 01:31:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
