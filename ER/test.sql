-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 27, 2021 at 07:44 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `canceled_order`
--

CREATE TABLE `canceled_order` (
  `id` int(20) NOT NULL,
  `order_id` int(20) NOT NULL,
  `dperson_id` int(2) NOT NULL,
  `customer_id` int(20) NOT NULL,
  `customer_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `canceled_order`
--

INSERT INTO `canceled_order` (`id`, `order_id`, `dperson_id`, `customer_id`, `customer_name`) VALUES
(1, 800004, 3001, 100010, 'Henry'),
(2, 800003, 3001, 100005, 'Madu Mahendran');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(10) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `ic_no` varchar(10) NOT NULL,
  `phone_no` int(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(500) NOT NULL,
  `address` varchar(100) NOT NULL,
  `street` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `district` varchar(50) NOT NULL,
  `gender` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `firstname`, `lastname`, `ic_no`, `phone_no`, `email`, `username`, `password`, `address`, `street`, `city`, `district`, `gender`) VALUES
(100001, 'Customer', '1', '1111111111', 776715896, 'fdasf@gmail.com', 'Customer1', '$2b$10$lMgHhCMNHldaHXvzH2/AiOfkAiC2g4Ao6nGrQI6d9mWbPYhTOr4dO', 'colombo', '', '', '', ''),
(100003, 'Fredrick', 'Fredrick', '782394857v', 771945036, 'fredrickpaul@gmail.com', 'Fredrick', '$2b$10$jSXGBoHS5omEFzCc9EZYP.3/PyfW2SfTie/fHzGNF1Rqk3Nui35f2', 'Colombo West', '', '', '', ''),
(100004, 'George', 'Glen', '769347518v', 758304728, 'georgeglen@gmail.com', 'George', '$2b$10$lVqa6yERzYEioK1ttZ9wMevQLN.8CWEGDk47yTSrxwYGwYyR/nOkK', 'Kandy', '', '', '', ''),
(100005, 'Madu', 'Mahendran', '1234567889', 712568974, 'madu@gmail.com', 'Madu', '$2b$10$lTN4eQ4uMkdkTaMrUrfR8eRvICECOWIXwN4VlQWiRCy6qkk2.4RRO', 'Kandy', '', '', '', ''),
(100006, 'abctesting', '', '907405762v', 776715896, 'abctesting@gmail.com', 'abctt', '$2b$10$DKFhzC/HSUPHzp/gP.RGE..4Mm.IiT0I9QLR75xdIEx1NxbL5bZAa', 'colombo', '', '', '', ''),
(100007, 'abctesting', 'dd', '1111111111', 776715896, 'abctest2@gmail.com', 'abtt2', '$2b$10$cFrtVEI0wMHhiMw/YDX9POtTpeafzY3XKYPkxyCY40T0fE162aKu2', 'colombo', '', '', '', ''),
(100009, 'abc3', '', '907405762v', 776715896, 'abc3@gmail.com', 'abc3', '$2b$10$iyR.0dG5Rrp6Eu5Mn./uW.ISrfyqOnucBageIWZV9vLeaKm9zNqu6', 'colombo', '', '', '', ''),
(100010, 'Henry', '', '878724596v', 776715896, 'abc5@gmail.com', 'Henry', '$2b$10$Jz2zkOcCuQofosCBF5ZsJ.wrM2FFPPzQz89s4CYCWQocodLNdkaZi', 'colombo', '', '', '', ''),
(100011, 'Dedunu', 'De Silva', '199349041v', 116349012, 'dedunu@gmail.com', 'dedunu', '$2b$10$3EU32ji9i47f7dYMh/TJuexv5Iqg6Yo3uzj2/csqeaz1yOnd83qYS', 'No:67/7B, Matara Rd, Kamburupitiya', '', '', '', 'female'),
(100012, 'Milinda ', 'Sadaruwan', '199969901v', 717328458, 'milinda@gmail.com', 'milinda', '$2b$10$9Jp91eSlpUlvx2UDUbGGneoKG.NLXnTXIA2H2issvbzU5UxVv/Mq2', 'No:34/67B, Panadura Road, Horana', '', '', '', 'male');

-- --------------------------------------------------------

--
-- Table structure for table `customized_order`
--

CREATE TABLE `customized_order` (
  `order_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `supplier_id` int(11) NOT NULL,
  `timber_type` varchar(100) NOT NULL,
  `timber_quality` varchar(50) NOT NULL,
  `features` varchar(500) NOT NULL,
  `status_code` varchar(100) NOT NULL,
  `thumb` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customized_order`
--

INSERT INTO `customized_order` (`order_id`, `name`, `customer_id`, `supplier_id`, `timber_type`, `timber_quality`, `features`, `status_code`, `thumb`) VALUES
(1, 'Wood table', 100005, 14, 'Jak', 'Number 2', 'Add a drawer to the table', '', '/Img/item6.jpg'),
(2, 'School chair', 100003, 7, 'Teak', 'Number 2', '', 'Preparing', '/Img/item5.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `delivery`
--

CREATE TABLE `delivery` (
  `id` int(50) NOT NULL,
  `dperson_id` int(50) NOT NULL,
  `order_id` int(50) NOT NULL,
  `feedback` varchar(255) NOT NULL,
  `ratings` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `delivery`
--

INSERT INTO `delivery` (`id`, `dperson_id`, `order_id`, `feedback`, `ratings`) VALUES
(200001, 3001, 800001, 'Great delivery Service', 4),
(200002, 3001, 800002, 'Great Delivery Service', 4);

-- --------------------------------------------------------

--
-- Table structure for table `delivery_notification`
--

CREATE TABLE `delivery_notification` (
  `id` int(10) NOT NULL,
  `customer_id` int(10) NOT NULL,
  `order_id` int(10) NOT NULL,
  `customer_name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `telephone` int(11) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `delivery_notification`
--

INSERT INTO `delivery_notification` (`id`, `customer_id`, `order_id`, `customer_name`, `address`, `telephone`, `description`) VALUES
(1, 100003, 800001, 'Fredrick Paul', 'Colombo West', 771945036, 'Nothing'),
(2, 100003, 800002, 'Fredrick Paul', 'Colombo West', 771945036, 'This is urgent order'),
(3, 100005, 800003, 'Madu Mahendran', 'Kandy', 712568974, 'I want this order within two weeks'),
(4, 100010, 800004, 'Henry', 'colombo', 776715896, 'I waiting for my order.');

-- --------------------------------------------------------

--
-- Table structure for table `delivery_person`
--

CREATE TABLE `delivery_person` (
  `id` int(10) NOT NULL,
  `firstname` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  `ic_no` varchar(10) NOT NULL,
  `phone_no` varchar(10) NOT NULL,
  `address` varchar(255) NOT NULL,
  `email` varchar(30) NOT NULL,
  `vehicle_no` varchar(50) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(600) NOT NULL,
  `availability` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `delivery_person`
--

INSERT INTO `delivery_person` (`id`, `firstname`, `lastname`, `ic_no`, `phone_no`, `address`, `email`, `vehicle_no`, `username`, `password`, `availability`) VALUES
(3001, 'Darshana ', 'Madushan', '199756891v', '712783023', 'No:78/23B, Highlevel Road, Homagama', 'darshana@gmail.com', 'ABC4578', 'DP3001', '12345678', 1),
(3002, 'Janith', 'Ishara', '199753252v', '0717328951', '\"Apsara\", Katukurunda, Moratuwa', 'janith@gmail.com', 'WSD9056', 'DP3002', '12345678', 1),
(3003, 'Aruna', 'Kumara', '197745801v', '717328952', '\"Aruna\", Matara Road, Kamburuoitiya', 'aruna@gmail.com', 'JKP6740', 'DP3003', '12345678', 1),
(3004, 'Kasun ', 'Perara', '198250236v', '717328953', 'No:23/67B, Highlevel Rd, Kirulapana', 'kasun@gmil.com', 'HHB9092', 'DP3004', '12345678', 1),
(3005, 'Mahesh', 'Marasinghe', '198767340v', '717328954', '\"Nethmi\", Udaha Waththa, Aparekka, Matara', 'mahesh@gmail.com', 'DFG0345', 'DP3005', '12345678', 1),
(3006, 'Nirash', 'Prakash', '199056321v', '717328955', 'No:123, Ihala Vitiyala, Karagoda uyangoda', 'nirash@gmail.com', 'OIP5639', 'DP3006', '12345678', 0),
(3007, 'Sumith', 'Perera', '197256092v', '717328956', '\"122\", Thanna, Katutholla', 'sumith@gmail.com', 'XXZ7834', 'DP3007', '12345678', 1),
(3008, 'Thilina', 'Malshan', '199569967v', '717328957', 'No:34/5B, Akuressa Rd, Matara', 'thilina@gmail.com', 'FGH4523', 'DP3008', '12345678', 0),
(3009, 'Kushan', 'Udara', '199469918v', '717328957', '\"Sarani\", Katutholla, kamburupitiya', 'kushan@gmail.com', 'LKD8978', 'DP3009', '12345678', 0),
(3010, 'Vidura', 'Deshan', '197967903v', '717328958', 'No:4/20b, Horana Road, Panadura', 'vidura@gmail.com', 'FGH9045', 'DP3010', '12345678', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(10) NOT NULL,
  `customer_id` int(10) NOT NULL,
  `ship_method` varchar(20) NOT NULL,
  `date` datetime NOT NULL,
  `status` varchar(20) NOT NULL,
  `status_code` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `customer_id`, `ship_method`, `date`, `status`, `status_code`) VALUES
(800001, 100003, 'VISA', '2021-07-21 02:04:09', 'Delivered', 0),
(800002, 100003, 'VISA', '2021-08-01 00:00:00', 'Preparing', 0),
(800003, 100005, 'VISA', '2021-08-11 00:00:00', 'Preparing', 0),
(800004, 100010, 'VISA', '2021-08-03 00:00:00', 'Preparing', 0);

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `order_id` int(20) NOT NULL,
  `item_number` int(20) NOT NULL,
  `product_id` int(20) NOT NULL,
  `supplier_id` int(20) NOT NULL,
  `quantity` int(20) NOT NULL,
  `rating` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`order_id`, `item_number`, `product_id`, `supplier_id`, `quantity`, `rating`) VALUES
(800001, 1, 500002, 14, 2, 2),
(800001, 2, 500003, 10, 1, 5),
(800002, 1, 500007, 14, 1, 0),
(800003, 1, 500003, 0, 1, 4),
(800003, 2, 500006, 0, 1, 0),
(800004, 1, 500003, 9, 1, 3),
(800004, 2, 500007, 7, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) NOT NULL,
  `name` varchar(30) NOT NULL,
  `supplier_id` int(11) NOT NULL,
  `description` varchar(60) NOT NULL,
  `timber_type` varchar(100) NOT NULL,
  `timber_quality` varchar(100) NOT NULL,
  `price` int(10) NOT NULL,
  `available_quantity` int(10) NOT NULL,
  `currency` varchar(5) NOT NULL,
  `thumb` varchar(100) NOT NULL,
  `total_ratings` int(10) NOT NULL,
  `total_people_rated` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `supplier_id`, `description`, `timber_type`, `timber_quality`, `price`, `available_quantity`, `currency`, `thumb`, `total_ratings`, `total_people_rated`) VALUES
(500001, 'Table', 7, 'Good Choice for house', '', '', 3000, 10, 'Rs', '/Img/item5.jpeg', 0, 0),
(500002, 'Square Table', 14, 'Good for school', 'Jak', 'Number 1', 1650, 6, 'Rs', '/Img/item6.jpg', 0, 0),
(500003, 'Round Table', 14, 'Made with Teak', 'Teak', 'Number 1', 3780, 3, 'Rs', '/Img/item3.png', 7, 2),
(500004, 'Wood Bench', 14, 'Made with Teak', 'Mahogani', 'Number 2\r\n', 2900, 3, 'Rs', '/Img/item4.jpg', 0, 0),
(500005, 'Wood Table', 0, 'Small shinny', '', '', 8900, 2, 'Rs', '/Img/item5.jpeg', 0, 0),
(500006, 'Square Table', 0, 'Good for school', '', '', 4560, 7, 'Rs', '/Img/item6.jpg', 0, 0),
(500007, 'Wood Bench', 14, 'Made with Teak', 'Teak', 'Number 2', 4700, 20, 'Rs', '/Img/item4.jpg', 2, 1),
(500008, 'Round Table', 0, 'Good for school', '', '', 2800, 11, 'Rs', '/Img/item3.png', 0, 0),
(500009, 'Wood Chair', 0, 'Made with Teak', '', '', 3000, 16, 'Rs', '/Img/item2.jpg', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `shoppingcart`
--

CREATE TABLE `shoppingcart` (
  `id` int(10) NOT NULL,
  `customer_id` int(10) NOT NULL,
  `product_id` int(10) NOT NULL,
  `quantity` int(10) NOT NULL,
  `data_added` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shoppingcart`
--

INSERT INTO `shoppingcart` (`id`, `customer_id`, `product_id`, `quantity`, `data_added`) VALUES
(400000, 100003, 500002, 4, '2021-07-15 00:00:00'),
(400002, 100001, 500006, 4, '2021-07-08 00:00:00'),
(400003, 100004, 500003, 4, '2021-07-06 00:00:00'),
(400018, 100004, 500001, 2, '2021-08-01 19:51:11'),
(400019, 100004, 500002, 1, '2021-08-01 19:51:15'),
(400020, 100004, 500004, 1, '2021-08-01 19:51:21'),
(400022, 100004, 500009, 1, '2021-08-01 19:51:39'),
(400028, 100003, 500003, 1, '2021-08-04 12:16:05'),
(400031, 100005, 500001, 10, '2021-08-06 19:25:52'),
(400032, 100005, 500004, 1, '2021-08-06 23:47:25'),
(400033, 100005, 500003, 1, '2021-08-16 11:10:25');

-- --------------------------------------------------------

--
-- Table structure for table `status_code`
--

CREATE TABLE `status_code` (
  `deliver_id` varchar(10) NOT NULL,
  `dperson_id` int(50) NOT NULL,
  `customer_id` varchar(50) NOT NULL,
  `order_id` int(20) NOT NULL,
  `customer_name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `telephone` int(20) NOT NULL,
  `status` varchar(20) NOT NULL,
  `delivery_charges` int(255) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `status_code`
--

INSERT INTO `status_code` (`deliver_id`, `dperson_id`, `customer_id`, `order_id`, `customer_name`, `address`, `telephone`, `status`, `delivery_charges`, `date`, `time`) VALUES
('1', 3001, '100003', 800001, 'Fredrick Paul', 'Colombo West', 771945036, '2', 5600, '2021-08-03', '15:11:44'),
('2', 3001, '100003', 800002, 'Fredrick Paul', 'Colombo West', 771945036, '2', 6200, '2021-08-18', '12:15:58');

-- --------------------------------------------------------

--
-- Table structure for table `supplier`
--

CREATE TABLE `supplier` (
  `id` int(10) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `ic_no` varchar(10) NOT NULL,
  `phone_no` int(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(500) NOT NULL,
  `address` varchar(100) NOT NULL,
  `street` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `district` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supplier`
--

INSERT INTO `supplier` (`id`, `firstname`, `lastname`, `gender`, `ic_no`, `phone_no`, `email`, `username`, `password`, `address`, `street`, `city`, `district`) VALUES
(7, 'suppy', 'don', 'female', '1111111111', 776715896, 'fdasf@gmail.com', 'beees', 'tttt', 'colombo', '', '', ''),
(8, 'ram', 'don', 'male', '1111111111', 776715896, 'fdasf@gmail.com', 'asdf', 'qqqqqqqq', 'colombo', '', '', ''),
(9, 'ram', 'don', 'male', '1111111111', 776715896, 'fdasf@gmail.com', 'dsfg6777', '11111111', 'colombo', '', '', ''),
(10, 'ram', 'don', 'male', '1111111111', 776715896, 'fdasf@gmail.com', 'Nimal', 'gggggggg', 'colombo', '', '', ''),
(11, 'hein', 'gg', 'male', '1111111111', 776715896, 'fdasf@gmail.com', 'hein', 'aaaaaaaa', 'asfd', '', '', ''),
(12, 'ram', 'don', 'male', '1111111111', 776715896, 'fdasf@gmail.com', 'dsfg', 'aaaaaaaa', 'colombo', '', '', ''),
(13, 'ram', 'don', 'male', '1111111111', 776715896, 'fdasf@gmail.com', 'dsfg', 'bbbbbbbb', 'colombo', '', '', ''),
(14, 'Manoj', 'Mahendran', 'male', '1234567821', 1564872565, 'manoj@gmail.com', 'md', '12345678', 'No 45/8', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(500) NOT NULL,
  `userrole` varchar(15) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `userrole`) VALUES
(9, 'DavRoy', '$2b$10$/LjNNKZgYjyo8yylk7TayuQ6zc/IUAT5ONpKCYXbaT87Jftz.GY1W', 'customer'),
(10, 'DavRoy', '$2b$10$vAlXvw9bXISce9gC4ns9w.5n/rQr4VuSRxSd4gdoGZw8C1fJtGRj6', 'customer'),
(11, 'dsfg6777', '$2b$10$TwOH.mhPUGbKLMAiC8U4nOUYOn5YRdyGZtr9I.iJT.FOPV0aPW80K', 'supplier'),
(12, 'Peter', '$2b$10$dgIhyZpueuYmRLWHKS0vuePk/25wpOWVFuk4xEJzzYNfn1eiCzU9K', 'customer'),
(13, 'dsfg', '$2b$10$Yw1nbjWXjD4iD7I9UDaAR.D.RaBrk4ReVMH.Uw6j6uH3LwPBlQQ5S', 'customer'),
(14, 'dsfg', '$2b$10$HXGp29J0PwtxIj3bfnSuqe7eZbX/p1EGiJ5JHOQAkWO5B7HZIo/je', 'customer'),
(15, 'aqqqqq', '$2b$10$YUw.nHrLZnlbvAXdi1iGoOb2VyjVgDrfvJcCa9y26QzQN8LfEkYeO', 'customer'),
(16, 'Nimal', '$2b$10$IEw/R5C09rdXARn2wB9GRORrGT2i9cjbpwKUGA7elrUvFXInIP.M.', 'supplier'),
(17, 'hein', '$2b$10$VqjYw8JzrFRGSoWPeLRqVOtZknvbLH8Z1iB3jLPOc3842YPgLPVZW', 'supplier'),
(18, 'test', '$2b$10$lKEHhnRnNjOaGvs7fbkDY.xbD7QONwwhoh77wcowxa9Kvn35ew.mK', 'customer'),
(19, 'aqqqqq', '$2b$10$oQcsfZGbiI91s3Brl1SLRepVyhpqGYjBbmGtWQo50CDSKQ3.XMP7G', 'customer'),
(20, 'dsfg', '$2b$10$LBqwKab1E3kZ9oO2kA3NVOffnijQpM5l/xektPxK57Qkq0VkqASyu', 'supplier'),
(21, 'dsfg', '$2b$10$H8cvCK1qoIVe1REifK4x0uRdf39c.yQyYM.ubQ56Y9SFL8Sgx5F6.', 'supplier'),
(22, 'Beedon', '$2b$10$SvatZ9quCjxNK7qzsc6g0.u1p4orpnkqwmp2p.faCYG4ynlVXcM8G', 'customer'),
(23, 'Madu', '$2b$10$lTN4eQ4uMkdkTaMrUrfR8eRvICECOWIXwN4VlQWiRCy6qkk2.4RRO', 'deliveryman'),
(24, 'md', '$2b$10$Wvtt4Hts9JdvsGKX2YRCFepndAl.XwqFjmRs6aE.1MBznTOjvJnf6', 'supplier'),
(25, 'abctt', '$2b$10$DKFhzC/HSUPHzp/gP.RGE..4Mm.IiT0I9QLR75xdIEx1NxbL5bZAa', 'customer'),
(26, 'abtt2', '$2b$10$cFrtVEI0wMHhiMw/YDX9POtTpeafzY3XKYPkxyCY40T0fE162aKu2', 'customer'),
(28, 'abc3', '$2b$10$iyR.0dG5Rrp6Eu5Mn./uW.ISrfyqOnucBageIWZV9vLeaKm9zNqu6', 'customer'),
(29, 'Henry', '$2b$10$Jz2zkOcCuQofosCBF5ZsJ.wrM2FFPPzQz89s4CYCWQocodLNdkaZi', 'customer'),
(34, 'DP3005', '$2b$10$iT4JmnfpINzmu4FZ4yIc1OrS1NvhJJho9Pe3bkw6osjQlENIv/2sK', 'deliveryman'),
(32, 'DP3003', '$2b$10$vlqxXHa5UVOreNsLLhKYC.uaKVTloySKnCy1H8h1OoGBVmvEybfRC', 'deliveryman'),
(33, 'DP3004', '$2b$10$1tZbno9Wdiw.obFrw/DpxObL/SlSYPYrNxUA4Ff.pJssXsz.eB7L6', 'deliveryman'),
(30, 'DP3001', '$2b$10$y51xkGGW75EK70d3cdEzwOixC0jpGb7sb4CVmXwARKzBLWAUG48de', 'deliveryman'),
(31, 'DP3002', '$2b$10$80B.Sx1F.DV/iY/sVMSjiOHZkUH8U.nhw8ECVm1bfsQFRb0hxH6N.', 'deliveryman'),
(35, 'DP3006', '$2b$10$IF4HV1kWpTu39aeQf40hFe6h1cxyXhG0huj8l9xnfbtiJH0HT2hDG', 'deliveryman'),
(36, 'DP3007', '$2b$10$okcGzAQXsaUC9pdZquVw8ey1.BIemA09ZjbjydN1pt.gewgkihW5G', 'deliveryman'),
(37, 'DP3008', '$2b$10$n/G5F7yQAdwmcNGHsVkqtOEFuMdiHL7HpsacCsJxz0ctH/xBSpLR.', 'deliveryman'),
(38, 'DP3009', '$2b$10$VUIbbZXklXaFm.dXW5VQz.EwQcdvzPb0Iv7bpLbzg6GScwWrCs//W', 'deliveryman'),
(39, 'DP3010', '$2b$10$qHbs1XHn.k48gnUqcC2vtekz3bcCCHcJqQvUSHxJD1lt5ygQtseAS', 'deliveryman'),
(3017, 'milinda', '$2b$10$9Jp91eSlpUlvx2UDUbGGneoKG.NLXnTXIA2H2issvbzU5UxVv/Mq2', 'customer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `canceled_order`
--
ALTER TABLE `canceled_order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `dperson_id` (`dperson_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `customized_order`
--
ALTER TABLE `customized_order`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `delivery`
--
ALTER TABLE `delivery`
  ADD PRIMARY KEY (`id`),
  ADD KEY `dperson_id` (`dperson_id`),
  ADD KEY `feedback` (`feedback`);

--
-- Indexes for table `delivery_notification`
--
ALTER TABLE `delivery_notification`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `delivery_person`
--
ALTER TABLE `delivery_person`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `order_fk` (`customer_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`order_id`,`product_id`),
  ADD KEY `order-item-productid-fk` (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shoppingcart`
--
ALTER TABLE `shoppingcart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk` (`customer_id`),
  ADD KEY `fk2` (`product_id`);

--
-- Indexes for table `status_code`
--
ALTER TABLE `status_code`
  ADD PRIMARY KEY (`deliver_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `customer_name` (`customer_name`),
  ADD KEY `dperson_id` (`dperson_id`);

--
-- Indexes for table `supplier`
--
ALTER TABLE `supplier`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `canceled_order`
--
ALTER TABLE `canceled_order`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100013;

--
-- AUTO_INCREMENT for table `customized_order`
--
ALTER TABLE `customized_order`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `delivery`
--
ALTER TABLE `delivery`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=200003;

--
-- AUTO_INCREMENT for table `delivery_notification`
--
ALTER TABLE `delivery_notification`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `delivery_person`
--
ALTER TABLE `delivery_person`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3013;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=800005;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=500010;

--
-- AUTO_INCREMENT for table `shoppingcart`
--
ALTER TABLE `shoppingcart`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=400034;

--
-- AUTO_INCREMENT for table `supplier`
--
ALTER TABLE `supplier`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3018;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `order_fk` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`);

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order-item-productid-fk` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `order_item_k` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`);

--
-- Constraints for table `shoppingcart`
--
ALTER TABLE `shoppingcart`
  ADD CONSTRAINT `fk` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`),
  ADD CONSTRAINT `fk2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
