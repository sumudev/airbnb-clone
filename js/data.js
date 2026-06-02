const listings = [
  {
    id: 1,
    title: "Beachside Villa with Pool",
    location: "Candolim, Goa",
    distance: "12 km away",
    price: 12400,
    rating: 4.97,
    category: "beach",
    images: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600",
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600",
      "https://images.unsplash.com/photo-1587922546307-776227941871?w=600",
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=600",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600"
    ]
  },
  {
    id: 2,
    title: "Cozy Studio near Baga Beach",
    location: "Baga, Goa",
    distance: "15 km away",
    price: 3200,
    rating: 4.88,
    category: "beach",
    images: [
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600",
      "https://images.unsplash.com/photo-1587922546307-776227941871?w=600",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600",
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=600"
    ]
  },
  {
    id: 3,
    title: "Private Villa with Sea View",
    location: "Arambol, Goa",
    distance: "28 km away",
    price: 18900,
    rating: 4.95,
    category: "beach",
    images: [
      "https://images.unsplash.com/photo-1587922546307-776227941871?w=600",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600",
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600",
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=600",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600"
    ]
  },
  {
    id: 4,
    title: "Snow View Chalet",
    location: "Manali, HP",
    distance: "4 km away",
    price: 7800,
    rating: 4.93,
    category: "mountain",
    images: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600",
      "https://images.unsplash.com/photo-1589136777351-fdc9c9400c73?w=600"
    ]
  },
  {
    id: 5,
    title: "Apple Orchard Cottage",
    location: "Kullu, HP",
    distance: "18 km away",
    price: 4200,
    rating: 4.79,
    category: "farmstay",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600",
      "https://images.unsplash.com/photo-1589136777351-fdc9c9400c73?w=600"
    ]
  },
  {
    id: 6,
    title: "Himalayan Log Cabin",
    location: "Kasol, HP",
    distance: "25 km away",
    price: 9500,
    rating: 4.96,
    category: "mountain",
    images: [
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600",
      "https://images.unsplash.com/photo-1589136777351-fdc9c9400c73?w=600"
    ]
  },
  {
    id: 7,
    title: "Heritage Haveli Suite",
    location: "Jaipur, Rajasthan",
    distance: "6 km away",
    price: 11200,
    rating: 4.97,
    category: "heritage",
    images: [
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600",
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=600",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600"
    ]
  },
  {
    id: 8,
    title: "Desert Camp under Stars",
    location: "Jaisalmer, Rajasthan",
    distance: "42 km away",
    price: 8400,
    rating: 4.89,
    category: "trending",
    images: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600",
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=600",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600"
    ]
  },
  {
    id: 9,
    title: "Lakeside Palace Retreat",
    location: "Udaipur, Rajasthan",
    distance: "3 km away",
    price: 22000,
    rating: 4.98,
    category: "pool",
    images: [
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600",
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=600",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600"
    ]
  },
  {
    id: 10,
    title: "Houseboat on Backwaters",
    location: "Alleppey, Kerala",
    distance: "10 km away",
    price: 14800,
    rating: 4.94,
    category: "trending",
    images: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=600",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600",
      "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=600"
    ]
  },
  {
    id: 11,
    title: "Treehouse Jungle Retreat",
    location: "Wayanad, Kerala",
    distance: "34 km away",
    price: 6700,
    rating: 4.92,
    category: "treehouse",
    images: [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=600",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600",
      "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=600"
    ]
  },
  {
    id: 12,
    title: "Coffee Estate Bungalow",
    location: "Coorg, Karnataka",
    distance: "16 km away",
    price: 9100,
    rating: 4.86,
    category: "farmstay",
    images: [
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=600",
      "https://images.unsplash.com/photo-1601158935942-52255782d322?w=600",
      "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=600",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600"
    ]
  },
  {
    id: 13,
    title: "Yoga & Wellness Ashram",
    location: "Rishikesh, UK",
    distance: "2 km away",
    price: 3800,
    rating: 4.90,
    category: "trending",
    images: [
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=600",
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=600",
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600",
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600"
    ]
  },
  {
    id: 14,
    title: "Riverside Cliff Cottage",
    location: "Rishikesh, UK",
    distance: "7 km away",
    price: 5400,
    rating: 4.84,
    category: "mountain",
    images: [
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=600",
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600",
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=600",
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600"
    ]
  },
  {
    id: 15,
    title: "Farm Stay with Organic Meals",
    location: "Lonavala, MH",
    distance: "11 km away",
    price: 6200,
    rating: 4.91,
    category: "farmstay",
    images: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600"
    ]
  },
  {
    id: 16,
    title: "Boutique Heritage Villa",
    location: "Mysore, KA",
    distance: "9 km away",
    price: 13500,
    rating: 4.95,
    category: "heritage",
    images: [
      "https://images.unsplash.com/photo-1580281658626-ee379f3cce93?w=600",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600",
      "https://images.unsplash.com/photo-1598977123418-45f04b615993?w=600",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600",
      "https://images.unsplash.com/photo-1580281658626-ee379f3cce93?w=600"
    ]
  }
];