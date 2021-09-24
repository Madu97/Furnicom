-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 24, 2021 at 10:51 AM
-- Server version: 5.7.24
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
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

DROP TABLE IF EXISTS `canceled_order`;
CREATE TABLE IF NOT EXISTS `canceled_order` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `order_id` int(20) NOT NULL,
  `dperson_id` int(2) NOT NULL,
  `customer_id` int(20) NOT NULL,
  `customer_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `dperson_id` (`dperson_id`),
  KEY `customer_id` (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

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

DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
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
  `profile_picture` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=100013 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `firstname`, `lastname`, `ic_no`, `phone_no`, `email`, `username`, `password`, `address`, `street`, `city`, `district`, `profile_picture`) VALUES
(100001, 'Customer', '1', '1111111111', 776715896, 'fdasf@gmail.com', 'Customer1', '$2b$10$lMgHhCMNHldaHXvzH2/AiOfkAiC2g4Ao6nGrQI6d9mWbPYhTOr4dO', 'colombo', '', '', '', ''),
(100003, 'Fredrick', 'Paul', '782394857v', 771945036, 'fredrickpaul@gmail.com', 'Fredrick', '$2b$10$jSXGBoHS5omEFzCc9EZYP.3/PyfW2SfTie/fHzGNF1Rqk3Nui35f2', 'Colombo West', '', '', '', ''),
(100004, 'George', 'Glen', '769347518v', 758304799, 'georgeglen@gmail.com', 'George', '$2b$10$lVqa6yERzYEioK1ttZ9wMevQLN.8CWEGDk47yTSrxwYGwYyR/nOkK', 'Kandy', '', '', '', ''),
(100005, 'Madusha', 'Mahendran', '1234567889', 712568974, 'madu@gmail.com', 'Madu', '$2b$10$lTN4eQ4uMkdkTaMrUrfR8eRvICECOWIXwN4VlQWiRCy6qkk2.4RRO', 'Kandy', 'Mawatha Rd', 'Hill city', 'Kandy', '1632207446113-customer.jpg'),
(100006, 'abctesting', '', '907405762v', 776715896, 'abctesting@gmail.com', 'abctt', '$2b$10$DKFhzC/HSUPHzp/gP.RGE..4Mm.IiT0I9QLR75xdIEx1NxbL5bZAa', 'colombo', '', '', '', ''),
(100009, 'admin', '', '907405762v', 776715896, 'abc3@gmail.com', 'abc3', '$2b$10$iyR.0dG5Rrp6Eu5Mn./uW.ISrfyqOnucBageIWZV9vLeaKm9zNqu6', 'colombo', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `customized_order`
--

DROP TABLE IF EXISTS `customized_order`;
CREATE TABLE IF NOT EXISTS `customized_order` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `supplier_id` int(11) NOT NULL,
  `timber_type` varchar(100) NOT NULL,
  `timber_quality` varchar(50) NOT NULL,
  `features` varchar(500) NOT NULL,
  `quantity` int(20) NOT NULL,
  `status_code` varchar(100) NOT NULL,
  `thumb` varchar(100) NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=70019 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customized_order`
--

INSERT INTO `customized_order` (`order_id`, `name`, `customer_id`, `supplier_id`, `timber_type`, `timber_quality`, `features`, `quantity`, `status_code`, `thumb`) VALUES
(70001, 'Wood table', 100005, 14, 'Jak', 'Number 2', 'Add a drawer to the table', 1, '1', 'item1.jpg'),
(70002, 'School chair', 100003, 7, 'Teak', 'Number 2', '', 0, '2', 'item1.jpg'),
(70003, 'Wood chair', 100003, 14, 'Jak', 'Number 2', 'Add handles. ', 5, '5', 'item2.jpg'),
(70009, 'Round Chair', 100005, 14, 'Teak', 'Number-1', 'fghfgh', 4, '1', 'item2.jpg'),
(70018, 'Wood Round Chair', 100005, 14, 'Teak', 'Number-1', 'Paint with varnish', 2, '2', '1632196557751-banner2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `delivery`
--

DROP TABLE IF EXISTS `delivery`;
CREATE TABLE IF NOT EXISTS `delivery` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `dperson_id` int(50) NOT NULL,
  `order_id` int(50) NOT NULL,
  `feedback` varchar(255) NOT NULL,
  `ratings` int(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `dperson_id` (`dperson_id`),
  KEY `feedback` (`feedback`)
) ENGINE=InnoDB AUTO_INCREMENT=200003 DEFAULT CHARSET=utf8mb4;

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

DROP TABLE IF EXISTS `delivery_notification`;
CREATE TABLE IF NOT EXISTS `delivery_notification` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `customer_id` int(10) NOT NULL,
  `order_id` int(10) NOT NULL,
  `description` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `delivery_person`
--

DROP TABLE IF EXISTS `delivery_person`;
CREATE TABLE IF NOT EXISTS `delivery_person` (
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
  `profile_picture` varchar(100) NOT NULL,
  `availability` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `delivery_person`
--

INSERT INTO `delivery_person` (`id`, `firstname`, `lastname`, `ic_no`, `phone_no`, `address`, `email`, `vehicle_no`, `username`, `password`, `profile_picture`, `availability`) VALUES
(3001, 'Amal', 'Madushan', '199756891v', '712783023', 'No:78/23B, Highlevel Road, Homagama', 'darshana@gmail.com', 'ABC4578', 'DP3001', '12345678', '1631888266209-delivery.jpg', 1),
(3002, 'Janith', 'Ishara', '199753252v', '0717328951', '\"Apsara\", Katukurunda, Moratuwa', 'janith@gmail.com', 'WSD9056', 'DP3002', '12345678', 'delivery.jpg', 1),
(3003, 'Aruna', 'Kumara', '197745801v', '717328952', '\"Aruna\", Matara Road, Kamburuoitiya', 'aruna@gmail.com', 'JKP6740', 'DP3003', '12345678', 'delivery.jpg', 0),
(3004, 'Kasun ', 'Perara', '198250236v', '717328953', 'No:23/67B, Highlevel Rd, Kirulapana', 'kasun@gmil.com', 'HHB9092', 'DP3004', '12345678', 'delivery.jpg', 0),
(3005, 'Mahesh', 'Marasinghe', '198767340v', '717328954', '\"Nethmi\", Udaha Waththa, Aparekka, Matara', 'mahesh@gmail.com', 'DFG0345', 'DP3005', '12345678', 'delivery.jpg', 1),
(3006, 'Nirash', 'Prakash', '199056321v', '717328955', 'No:123, Ihala Vitiyala, Karagoda uyangoda', 'nirash@gmail.com', 'OIP5639', 'DP3006', '12345678', 'delivery.jpg', 0),
(3007, 'Sumith', 'Perera', '197256092v', '717328956', '\"122\", Thanna, Katutholla', 'sumith@gmail.com', 'XXZ7834', 'DP3007', '12345678', 'delivery.jpg', 1),
(3008, 'Thilina', 'Malshan', '199569967v', '717328957', 'No:34/5B, Akuressa Rd, Matara', 'thilina@gmail.com', 'FGH4523', 'DP3008', '12345678', 'delivery.jpg', 1),
(3009, 'Kushan', 'Udara', '199469918v', '717328957', '\"Sarani\", Katutholla, kamburupitiya', 'kushan@gmail.com', 'LKD8978', 'DP3009', '12345678', 'delivery.jpg', 1),
(3010, 'Vidura', 'Deshan', '197967903v', '717328958', 'No:4/20b, Horana Road, Panadura', 'vidura@gmail.com', 'FGH9045', 'DP3010', '12345678', 'delivery.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `dperson_status`
--

DROP TABLE IF EXISTS `dperson_status`;
CREATE TABLE IF NOT EXISTS `dperson_status` (
  `deliver_id` int(20) NOT NULL AUTO_INCREMENT,
  `dperson_id` int(20) NOT NULL,
  `customer_id` varchar(20) NOT NULL,
  `order_id` int(20) NOT NULL,
  `customer_name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `telephone` int(20) NOT NULL,
  `status` varchar(20) NOT NULL,
  `delivery_charges` int(255) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`deliver_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dperson_status`
--

INSERT INTO `dperson_status` (`deliver_id`, `dperson_id`, `customer_id`, `order_id`, `customer_name`, `address`, `telephone`, `status`, `delivery_charges`, `date`) VALUES
(1, 3001, '100003', 800001, 'Fredrick Paul', 'Colombo West', 771945036, '2', 5600, '2021-08-03'),
(2, 3001, '100003', 80002, 'Fredrick Paul', 'Colombo West', 771045036, '1', 6200, '2021-08-18'),
(11, 3004, '100005', 800030, 'a', 'Mawatha Rd,Kandy', 771234567, '2', 1, '2021-09-21');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` int(10) NOT NULL AUTO_INCREMENT,
  `payment_id` varchar(500) NOT NULL,
  `customer_id` int(10) NOT NULL,
  `ship_method` varchar(20) NOT NULL,
  `date` datetime NOT NULL,
  `status` varchar(20) NOT NULL,
  `status_code` int(5) NOT NULL,
  `delivery_person_id` int(10) NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `order_fk` (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=800031 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `payment_id`, `customer_id`, `ship_method`, `date`, `status`, `status_code`, `delivery_person_id`) VALUES
(800017, '40037339CE877134L', 100005, 'VISA', '2021-08-30 19:36:26', 'Preparing', 1, 0),
(800018, '3YL47440P4794761E', 100005, 'VISA', '2021-08-30 19:36:26', 'Preparing', 3, 0),
(800019, '1Y200349WX551141S', 100005, 'VISA', '2021-09-06 11:56:55', 'Preparing', 4, 0),
(800030, '0HP00041NE6918112', 100005, 'VISA', '2021-09-21 09:22:23', 'Preparing', 1, 3004);

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
CREATE TABLE IF NOT EXISTS `order_items` (
  `order_id` int(20) NOT NULL AUTO_INCREMENT,
  `payment_id` varchar(500) NOT NULL,
  `item_number` int(20) NOT NULL,
  `product_id` int(20) NOT NULL,
  `supplier_id` int(20) NOT NULL,
  `quantity` int(20) NOT NULL,
  `rating` int(5) NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `order-item-productid-fk` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=800033 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`order_id`, `payment_id`, `item_number`, `product_id`, `supplier_id`, `quantity`, `rating`) VALUES
(800032, '0HP00041NE6918112', 1, 500031, 19, 3, 4),
(900017, '40037339CE877134L', 1, 500008, 14, 1, 3),
(900018, '3YL47440P4794761E', 1, 500006, 14, 2, 0),
(900019, '1Y200349WX551141S', 1, 500004, 19, 2, 0);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
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
  `total_people_rated` int(10) NOT NULL,
  `dimage` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=500032 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `supplier_id`, `description`, `timber_type`, `timber_quality`, `price`, `available_quantity`, `currency`, `thumb`, `total_ratings`, `total_people_rated`, `dimage`) VALUES
(500001, 'Table', 7, 'Good Choice for house', 'Jak', 'Number 1', 3000, 10, 'Rs', '/Img/item5.jpeg', 0, 0, 'chair1.glb'),
(500002, 'Square Table', 14, 'Good for school', 'Jak', 'Number 1', 1650, 6, 'Rs', '/Img/item6.jpg', 8, 2, 'chair1.glb'),
(500003, 'Round Table', 14, 'Made with Teak', 'Teak', 'Number 1', 3780, 3, 'Rs', '/Img/item3.png', 7, 2, 'chair1.glb'),
(500004, 'Wood Bench', 14, 'Made with Teak', 'Mahogani', 'Number 2\r\n', 2900, 3, 'Rs', '/Img/item4.jpg', 2, 1, 'chair1.glb'),
(500005, 'Wood Table', 7, 'Small shinny', 'Teak', 'Number 2', 8900, 2, 'Rs', '/Img/item5.jpeg', 0, 0, 'chair1.glb'),
(500006, 'Square Table', 7, 'Good for school', 'Mahogani', 'Number 1', 4560, 7, 'Rs', '/Img/item6.jpg', 0, 0, 'chair1.glb'),
(500007, 'Wood Bench', 14, 'Made with Teak', 'Teak', 'Number 2', 4700, 20, 'Rs', '/Img/item4.jpg', 2, 1, 'chair1.glb'),
(500008, 'Round Table', 7, 'Good for school', 'Teak', 'Number 2', 2800, 11, 'Rs', '/Img/item3.png', 0, 0, 'chair1.glb'),
(500009, 'Wood Chair', 7, 'Made with Teak', 'Jak', 'Number 1', 3000, 16, 'Rs', '/Img/item2.jpg', 0, 0, 'chair1.glb'),
(500011, 'Steel Chair', 10, 'Good Choice for Home.', 'Teak', 'Number-2', 7800, 3, 'Rs', '/Img/1632055884315-homepagepic.jpg', 0, 0, 'chair1.glb'),
(500031, 'Office Chair', 14, 'Good for Office.', 'Teak', 'Number-1', 7800, 0, 'Rs', '/Img/1632196139756-chair5.jpg', 0, 0, '1632196145984-chair5.glb');

-- --------------------------------------------------------

--
-- Table structure for table `shoppingcart`
--

DROP TABLE IF EXISTS `shoppingcart`;
CREATE TABLE IF NOT EXISTS `shoppingcart` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `customer_id` int(10) NOT NULL,
  `product_id` int(10) NOT NULL,
  `quantity` int(10) NOT NULL,
  `data_added` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk` (`customer_id`),
  KEY `fk2` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=400052 DEFAULT CHARSET=latin1;

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
(400051, 100005, 500008, 4, '2021-09-21 12:27:54');

-- --------------------------------------------------------

--
-- Table structure for table `status_code`
--

DROP TABLE IF EXISTS `status_code`;
CREATE TABLE IF NOT EXISTS `status_code` (
  `id` int(20) NOT NULL,
  `status` varchar(50) NOT NULL,
  `code` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `status_code`
--

INSERT INTO `status_code` (`id`, `status`, `code`) VALUES
(1, 'Preparing', 1),
(2, 'Hand over to the company', 2),
(3, 'Order dispatched', 3),
(4, 'On the way', 4),
(5, 'Delivered', 5);

-- --------------------------------------------------------

--
-- Table structure for table `supplier`
--

DROP TABLE IF EXISTS `supplier`;
CREATE TABLE IF NOT EXISTS `supplier` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
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
  `district` varchar(50) NOT NULL,
  `profile_picture` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supplier`
--

INSERT INTO `supplier` (`id`, `firstname`, `lastname`, `gender`, `ic_no`, `phone_no`, `email`, `username`, `password`, `address`, `street`, `city`, `district`, `profile_picture`) VALUES
(7, 'suppy', 'don', 'female', '1111111111', 776715896, 'fdasf@gmail.com', 'beees', 'tttt', 'colombo', '', '', '', ''),
(8, 'ram', 'don', 'male', '1111111111', 776715896, 'fdasf@gmail.com', 'asdf', 'qqqqqqqq', 'colombo', '', '', '', ''),
(9, 'ram', 'don', 'male', '1111111111', 776715896, 'fdasf@gmail.com', 'dsfg6777', '11111111', 'colombo', '', '', '', ''),
(10, 'ram', 'don', 'male', '1111111111', 776715896, 'fdasf@gmail.com', 'Nimal', 'gggggggg', 'colombo', '', '', '', ''),
(11, 'hein', 'gg', 'male', '1111111111', 776715896, 'fdasf@gmail.com', 'hein', 'aaaaaaaa', 'asfd', '', '', '', ''),
(12, 'ram', 'don', 'male', '1111111111', 776715896, 'fdasf@gmail.com', 'dsfg', 'aaaaaaaa', 'colombo', '', '', '', ''),
(13, 'ram', 'don', 'male', '1111111111', 776715896, 'fdasf@gmail.com', 'dsfg', 'bbbbbbbb', 'colombo', '', '', '', ''),
(14, 'John', 'Perera', 'male', '1234567821', 712568974, 'hd@gmail.com', 'md', '12345678', 'Kandy', '', '', '', '1631771188371-1631769652779-supplier.jpg'),
(15, 'Pasidu', 'Lakmal', '', '987721132V', 765426301, 'pasidu@gmail.com', 'Pasidu', '$2b$10$Ugbex5v5MpTrWsMqn1lsweE5DAD9LtKA6WPESAO17SYefJDiHoC6q', 'Badulla', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(500) NOT NULL,
  `userrole` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3022 DEFAULT CHARSET=latin1;

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
(23, 'Madu', '$2b$10$lTN4eQ4uMkdkTaMrUrfR8eRvICECOWIXwN4VlQWiRCy6qkk2.4RRO', 'customer'),
(24, 'md', '$2b$10$Wvtt4Hts9JdvsGKX2YRCFepndAl.XwqFjmRs6aE.1MBznTOjvJnf6', 'supplier'),
(25, 'abctt', '$2b$10$DKFhzC/HSUPHzp/gP.RGE..4Mm.IiT0I9QLR75xdIEx1NxbL5bZAa', 'customer'),
(26, 'abtt2', '$2b$10$cFrtVEI0wMHhiMw/YDX9POtTpeafzY3XKYPkxyCY40T0fE162aKu2', 'customer'),
(28, 'admin', '$2b$10$iyR.0dG5Rrp6Eu5Mn./uW.ISrfyqOnucBageIWZV9vLeaKm9zNqu6', 'admin'),
(29, 'Henry', '$2b$10$Jz2zkOcCuQofosCBF5ZsJ.wrM2FFPPzQz89s4CYCWQocodLNdkaZi', 'customer'),
(31, 'DP3002', '$2b$10$80B.Sx1F.DV/iY/sVMSjiOHZkUH8U.nhw8ECVm1bfsQFRb0hxH6N.', 'deliveryman'),
(30, 'DP3001', '$2b$10$y51xkGGW75EK70d3cdEzwOixC0jpGb7sb4CVmXwARKzBLWAUG48de', 'deliveryman'),
(34, 'DP3005', '$2b$10$iT4JmnfpINzmu4FZ4yIc1OrS1NvhJJho9Pe3bkw6osjQlENIv/2sK', 'deliveryman'),
(32, 'DP3003', '$2b$10$vlqxXHa5UVOreNsLLhKYC.uaKVTloySKnCy1H8h1OoGBVmvEybfRC', 'deliveryman'),
(33, 'DP3004', '$2b$10$1tZbno9Wdiw.obFrw/DpxObL/SlSYPYrNxUA4Ff.pJssXsz.eB7L6', 'deliveryman'),
(35, 'DP3006', '$2b$10$IF4HV1kWpTu39aeQf40hFe6h1cxyXhG0huj8l9xnfbtiJH0HT2hDG', 'deliveryman'),
(36, 'DP3007', '$2b$10$okcGzAQXsaUC9pdZquVw8ey1.BIemA09ZjbjydN1pt.gewgkihW5G', 'deliveryman'),
(37, 'DP3008', '$2b$10$n/G5F7yQAdwmcNGHsVkqtOEFuMdiHL7HpsacCsJxz0ctH/xBSpLR.', 'deliveryman'),
(38, 'DP3009', '$2b$10$VUIbbZXklXaFm.dXW5VQz.EwQcdvzPb0Iv7bpLbzg6GScwWrCs//W', 'deliveryman'),
(39, 'DP3010', '$2b$10$qHbs1XHn.k48gnUqcC2vtekz3bcCCHcJqQvUSHxJD1lt5ygQtseAS', 'deliveryman'),
(3017, 'milinda', '$2b$10$9Jp91eSlpUlvx2UDUbGGneoKG.NLXnTXIA2H2issvbzU5UxVv/Mq2', 'customer'),
(3018, 'Damith', '$2b$10$nfd1pAYIj1Z7iBoj.csJZuDZDYGogwUQik.ThAHzaf3SAVT6tIYru', 'customer'),
(3019, 'Chamodi', '$2b$10$/X9oyb7TLdkoaE1MTIf4kuOKYdMkEZIy7JyipRwpvDtc888pqVNt6', 'supplier'),
(3020, 'Damith', '$2b$10$rFnwdCLAWwan/f0MzJjojOEQu0tddKl4Qrs7/fMIEx/DEUDeIvyr.', 'customer'),
(3021, 'Kasuni', '$2b$10$ERIQ0y7NCpyI6j9o94aj8O181.qYBTO4EK6DjgWtRJ3bFvSnAauxq', 'customer');

--
-- Constraints for dumped tables
--

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
