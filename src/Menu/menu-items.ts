

// Assuming MenuItem is defined in a file named 'types.ts' in the same directory
import { MenuItem } from './types';

const veg_appetizers: MenuItem[] = [
    {
      name: "Gobi 65",
      price: 9.99,
    },
    {
      name: "Cut Mirchi",
      price: 6.99,
    },
    {
      name: "Kaaram Samosa",
      price: 6.99,
    },
    {
      name: "Boiled Peanut Masala",
      price: 6.99,
    },
    {
      name: "Button Mushroom Fry",
      price: 10.99,
    },
    {
      name: "Pepper Baby Corn",
      price: 9.99,
    },
    {
      name: "Masala Mirchi Bajji",
      price: 9.99,
    },
    {
      name: "Chili Paneer",
      price: 10.99,
    },
  ];

  const non_veg_appetizers: MenuItem[] = [
    {
      name: "Anda Masala",
      price: 9.99,
    },
    {
      name: "Kaju Chicken Pakoda",
      price: 9.99,
    },
    {
      name: "Chicken 555",
      price: 12.99,
    },
    {
      name: "Karvepaku Chicken Roast",
      price: 12.99,
    },
    {
      name: "Cup Chicken",
      price: 10.99,
    },
    {
      name: "Mutton Ghee Roast",
      price: 16.99,
    },
    {
      name: "Shrimp 65",
      price: 13.99,
    },
    {
      name: "Ring Cut Fish Fry(Bone-in)",
      price: 12.99,
    },
    {
      name: "Boneless Fish Pakoda",
      price: 12.99,
    },
  ];

  const bagaras: MenuItem[] = [
    // generate key
    {
      name: "Guthivankaya Bagara",
      price: 11.99,
    },
    {
      name: "Button Mushroom Bagara",
      price: 12.99,
    },
    {
      name: "Egg Roast Bagara",
      price: 11.99,
    },
    {
      name: "Chicken Fry piece Bagara",
      price: 14.99,
    },
    {
      name: "Chicken Ghee Roast Bagara",
      price: 14.99,
    },
    {
      name: "Mutton Fry piece Bagara",
      price: 15.99,
    },
    {
      name: "Shrimp Fry pIece Bagara",
      price: 16.99,
    },
    {
      name: "Andhra Chicken Curry with Bagara",
      price: 14.99,
    },
    {
      name: "Telangana Mutton Curry with Bagara",
      price: 16.99,
    },
  ];

  const biryanis: MenuItem[] = [
    {
      name: "Special Paneer Biryani",
      price: 11.99,
    },
    {
      name: "Guthivankaya Biryani",
      price: 11.99,
    },
    {
      name: "Button Mushrrom Biryani",
      price: 12.99,
    },
    {
      name: "Egg Roast Biryani",
      price: 11.99,
    },
    {
      name: "Boneless Chicken Biryani",
      price: 13.99,
    },
    {
      name: "Bagara's Special Chicken Biryani",
      price: 14.99,
    },
    {
      name: "Meghana Chicken Fry Piece Biryani",
      price: 14.99,
    },
    {
      name: "Hyd Chicken Dum Biryani",
      price: 11.99,
    },
    {
      name: "Mutton Ghee Roast Biryani",
      price: 15.99,
    },
    {
      name: "Shrimp Biryani",
      price: 15.99,
    },
  ];

  const speciality_rice: MenuItem[] = [
    {
      name: "Jeera Rice",
      price: 9.99,
    },
    {
      name: "Mint Rice",
      price: 9.99,
    },
    {
      name: "Gongura Rice",
      price: 9.99,
    },
    {
      name: "Mudha Pappu Avakaya Annam",
      price: 9.99,
    },
    {
      name: "Cut Mango Pickel Rice",
      price: 9.99,
    },
    {
      name: "Sambar Rice",
      price: 9.99,
    },
    {
      name: "Sambar Rice with Chicken Fry",
      price: 9.99,
    },
    {
      name: "Curd Rice",
      price: 9.99,
    },
  ];

  const breafast_items: MenuItem[] = [
    {
      name: "Poori With Chicken Curry",
      price: 10.99,
    },
    {
      name: "Poori With Mutton Curry",
      price: 12.99,
    },
    {
      name: "Roti With Chicken Curry",
      price: 10.99,
    },
    {
      name: "Roti With Mutton Curry",
      price: 12.99,
    },
  ];

  const desserts: MenuItem[] = [
    {
      name: "Gulab Jamun",
      price: 4.99,
    },
    {
      name: "Shahi Ka Tukda",
      price: 5.99,
    },
    {
      name: "Royal Falooda",
      price: 7.99,
    },
  ];

  const drinks: MenuItem[] = [
    {
      name: "Badam Milk",
      price: 4.99,
    },
    {
      name: "Sweet Lassi",
      price: 3.99,
    },
    {
      name: "Masala Chaas",
      price: 3.99,
    },
    {
      name: "Mango Lassi",
      price: 3.99,
    },
    {
      name: "Sapota Juice",
      price: 4.99,
    },
    {
      name: "Sweet Lime Soda",
      price: 4.99,
    },
    {
      name: "Salt Lime Soda",
      price: 4.99,
    },
    {
      name: "Jeera Masala Soda",
      price: 4.99,
    },
    {
      name: "Thumbs Up",
      price: 2.49,
    },
    {
      name: "Coke",
      price: 1.99,
    },
    {
      name: "Sprite",
      price: 1.99,
    },
    {
      name: "Fanta",
      price: 1.99,
    },
    {
      name: "Water Bottle",
      price: 1.99,
    },
  ];

  const bagaras_thali: Array<string> = [
    "Gobi-65",
    "Guthivankaya Curry",
    "Button Mushrrom",
    "Bagara Rice",
    "Biryani Rice",
    "Dessert",
    "Badam Milk",
  ];

  const bagaras_non_veg_thali: Array<string> = [
    "Kaju Chicken Pakoda",
    "Chicken Fry Piece",
    "Shrimp Fry",
    "Andhra Chicken Curry",
    "Telangana Mutton Curry",
    "Bagara Rice",
    "Biryani Rice",
    "Dessert",
    "Badam Milk",
  ];

  const speciality_rice_thali: Array<string> = [
    "Jeera Rice",
    "Mint Rice",
    "Gongura Rice",
    "Sambar Rice",
    "Curd Rice",
    "Papad",
    "Lemon Pickel",
  ];

  const thali: MenuItem[] = [
    {
      name: "Bagara Veg Thali",
      price: 13.99,
      // items: bagaras_thali.join(', '),
    },
    {
      name: "Bagara Non-Veg Thali",
      price: 16.99,
      // items: bagaras_non_veg_thali.join(', '),
    },
    {
      name: "Speciality Rice Thali",
      price: 14.99,
      // items: speciality_rice_thali.join(', '),
    },
  ];

  const friday_special: MenuItem[] = [
    {
      name: "Ghee Mutton Biryani",
      price: 14.99,
    },
    {
      name: "Haleem-Small",
      price: 6.99,
    },
    {
      name: "Haleem-Medium",
      price: 13.99,
    },
    {
      name: "Haleem-Large",
      price: 19.99,
    },
  ];

  const saturday_special: MenuItem[] = [
    {
      name: "Raju Gari Kodi Pulav",
      price: 11.99,
    },
    {
      name: "Mutton Kheema Biryani",
      price: 15.99,
    },
  ];

  const sunday_special: MenuItem[] = [
    {
      name: "Nellore Chepala Pulusu",
      price: 15.99,
    },
    {
      name: "Doopudu Pothu Biryani(Mutton)",
      price: 15.99,
    },
  ];

  export {
    veg_appetizers,
    non_veg_appetizers,
    bagaras,
    biryanis,
    speciality_rice,
    breafast_items,
    desserts,
    drinks,
    bagaras_thali,
    bagaras_non_veg_thali,
    speciality_rice_thali,
    friday_special,
    saturday_special,
    sunday_special,
    thali,
  };