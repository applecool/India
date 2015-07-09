//Resource: https://en.wikipedia.org/wiki/List_of_most_populous_cities_in_India
var cities = [
  {
    "city": "Mumbai",
    "state": "Maharashtra"
  },
  {
    "city": "Delhi",
    "state": "Delhi"
  },
  {
    "city": "Bangalore",
    "state": "Karnataka"
  },
  {
    "city": "Hyderabad",
    "state": "Telangana"
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat"
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu"
  },
  {
    "city": "Kolkata",
    "state": "West Bengal"
  },
  {
    "city": "Surat",
    "state": "Gujarat"
  },
  {
    "city": "Pune",
    "state": "Maharashtra"
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan"
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Kanpur",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Nagpur",
    "state": "Maharashtra"
  },
  {
    "city": "Indore",
    "state": "Madhya Pradesh"
  },
  {
    "city": "Thane",
    "state": "Maharashtra"
  },
  {
    "city": "Bhopal",
    "state": "Madhya Pradesh"
  },
  {
    "city": "Visakhapatnam",
    "state": "Andhra Pradesh"
  },
  {
    "city": "Pimpri-Chinchwad",
    "state": "Maharashtra"
  },
  {
    "city": "Patna",
    "state": "Bihar"
  },
  {
    "city": "Vadodara",
    "state": "Gujarat"
  },
  {
    "city": "Ghaziabad",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Ludhiana",
    "state": "Punjab"
  },
  {
    "city": "Agra",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Nashik",
    "state": "Maharashtra"
  },
  {
    "city": "Faridabad",
    "state": "Haryana"
  },
  {
    "city": "Meerut",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Rajkot",
    "state": "Gujarat"
  },
  {
    "city": "Kalyan-Dombivali",
    "state": "Maharashtra"
  },
  {
    "city": "Vasai-Virar",
    "state": "Maharashtra"
  },
  {
    "city": "Varanasi",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Srinagar",
    "state": "Jammu and Kashmir"
  },
  {
    "city": "Aurangabad",
    "state": "Maharashtra"
  },
  {
    "city": "Dhanbad",
    "state": "Jharkhand"
  },
  {
    "city": "Amritsar",
    "state": "Punjab"
  },
  {
    "city": "Navi Mumbai",
    "state": "Maharashtra"
  },
  {
    "city": "Allahabad",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Ranchi",
    "state": "Jharkhand"
  },
  {
    "city": "Howrah",
    "state": "West Bengal"
  },
  {
    "city": "Coimbatore",
    "state": "Tamil Nadu"
  },
  {
    "city": "Jabalpur",
    "state": "Madhya Pradesh"
  },
  {
    "city": "Gwalior",
    "state": "Madhya Pradesh"
  },
  {
    "city": "Vijayawada",
    "state": "Andhra Pradesh"
  },
  {
    "city": "Jodhpur",
    "state": "Rajasthan"
  },
  {
    "city": "Madurai",
    "state": "Tamil Nadu"
  },
  {
    "city": "Raipur",
    "state": "Chhattisgarh"
  },
  {
    "city": "Kota",
    "state": "Rajasthan"
  },
  {
    "city": "Guwahati",
    "state": "Assam"
  },
  {
    "city": "Chandigarh",
    "state": "Chandigarh"
  },
  {
    "city": "Solapur",
    "state": "Maharashtra"
  },
  {
    "city": "Hubballi-Dharwad",
    "state": "Karnataka"
  },
  {
    "city": "Bareilly",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Moradabad",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Mysore",
    "state": "Karnataka"
  },
  {
    "city": "Gurgaon",
    "state": "Haryana"
  },
  {
    "city": "Aligarh",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Jalandhar",
    "state": "Punjab"
  },
  {
    "city": "Tiruchirappalli",
    "state": "Tamil Nadu"
  },
  {
    "city": "Bhubaneswar",
    "state": "Orissa"
  },
  {
    "city": "Salem",
    "state": "Tamil Nadu"
  },
  {
    "city": "Mira-Bhayandar",
    "state": "Maharashtra"
  },
  {
    "city": "Warangal",
    "state": "Telangana"
  },
  {
    "city": "Thiruvananthapuram",
    "state": "Kerala"
  },
  {
    "city": "Guntur",
    "state": "Andhra Pradesh"
  },
  {
    "city": "Bhiwandi",
    "state": "Maharashtra"
  },
  {
    "city": "Saharanpur",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Gorakhpur",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Bikaner",
    "state": "Rajasthan"
  },
  {
    "city": "Amravati",
    "state": "Maharashtra"
  },
  {
    "city": "Noida",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Jamshedpur",
    "state": "Jharkhand"
  },
  {
    "city": "Bhilai",
    "state": "Chhattisgarh"
  },
  {
    "city": "Cuttak",
    "state": "Orissa"
  },
  {
    "city": "Firozabad",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Kochi",
    "state": "Kerala"
  },
  {
    "city": "Bhavnagar",
    "state": "Gujarat"
  },
  {
    "city": "Dehradun",
    "state": "Uttarakhand"
  },
  {
    "city": "Durgapur",
    "state": "West Bengal"
  },
  {
    "city": "Asansol",
    "state": "West Bengal"
  },
  {
    "city": "Nanded",
    "state": "Maharashtra"
  },
  {
    "city": "Kolhapur",
    "state": "Maharashtra"
  },
  {
    "city": "Ajmer",
    "state": "Rajasthan"
  },
  {
    "city": "Gulbarga",
    "state": "Karnataka"
  },
  {
    "city": "Jamnagar",
    "state": "Gujarat"
  },
  {
    "city": "Ujjain",
    "state": "Madhya Pradesh"
  },
  {
    "city": "Loni",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Siliguri",
    "state": "West Bengal"
  },
  {
    "city": "Jhansi",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Ulhasnagar",
    "state": "Maharashtra"
  },
  {
    "city": "Nellore",
    "state": "Andhra Pradesh"
  },
  {
    "city": "Jammu",
    "state": "Jammu and Kashmir"
  },
  {
    "city": "Sangli-Miraj and Kupwad",
    "state": "Maharashtra"
  },
  {
    "city": "Belgaum",
    "state": "Karnataka"
  },
  {
    "city": "Mangalore",
    "state": "Karnataka"
  },
  {
    "city": "Ambattur",
    "state": "Tamil Nadu"
  },
  {
    "city": "Tirunelveli",
    "state": "Tamil Nadu"
  },
  {
    "city": "Malegaon",
    "state": "Maharashtra"
  },
  {
    "city": "Gaya",
    "state": "Bihar"
  },
  {
    "city": "Jalgaon",
    "state": "Maharashtra"
  },
  {
    "city": "Udaipur",
    "state": "Rajasthan"
  },
  {
    "city": "Maheshtala",
    "state": "West Bengal"
  },
  {
    "city": "Tirupur",
    "state": "Tamil Nadu"
  },
  {
    "city": "Davanagere",
    "state": "Karnataka"
  },
  {
    "city": "Kozhikode",
    "state": "Kerala"
  },
  {
    "city": "Akola",
    "state": "Maharashtra"
  },
  {
    "city": "Kurnool",
    "state": "Andhra Pradesh"
  },
  {
    "city": "Rajpur Sonarpur",
    "state": "West Bengal"
  },
  {
    "city": "Bokaro",
    "state": "Jharkhand"
  },
  {
    "city": "South Dumdum",
    "state": "West Bengal"
  },
  {
    "city": "Bellary",
    "state": "Karnataka"
  },
  {
    "city": "Patiala",
    "state": "Punjab"
  },
  {
    "city": "Gopalpur",
    "state": "West Bengal"
  },
  {
    "city": "Agartala",
    "state": "Tripura"
  },
  {
    "city": "Bhagalpur",
    "state": "Bihar"
  },
  {
    "city": "Muzaffarnagar",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Bhatpara",
    "state": "West Bengal"
  },
  {
    "city": "Panihati",
    "state": "West Bengal"
  },
  {
    "city": "Latur",
    "state": "Maharashtra"
  },
  {
    "city": "Dhule",
    "state": "Maharashtra"
  },
  {
    "city": "Rohtak",
    "state": "Haryana"
  },
  {
    "city": "Korba",
    "state": "Chhattisgarh"
  },
  {
    "city": "Bhilwara",
    "state": "Rajasthan"
  },
  {
    "city": "Brahmapur",
    "state": "Orissa"
  },
  {
    "city": "Muzaffarpur",
    "state": "Bihar"
  },
  {
    "city": "Ahmednagar",
    "state": "Maharashtra"
  },
  {
    "city": "Mathura",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Kollam",
    "state": "Kerala"
  },
  {
    "city": "Avadi",
    "state": "Tamil Nadu"
  },
  {
    "city": "Rajahmundry",
    "state": "Andhra Pradesh"
  },
  {
    "city": "Kadapa",
    "state": "Andhra Pradesh"
  },
  {
    "city": "Kamarhati",
    "state": "West Bengal"
  },
  {
    "city": "Bilaspur",
    "state": "Chhattisgarh"
  },
  {
    "city": "Shahjahanpur",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Bijapur",
    "state": "Karnataka"
  },
  {
    "city": "Rampur",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Shivamogga(Shimoga)",
    "state": "Karnataka"
  },
  {
    "city": "Chandrapur",
    "state": "Maharashtra"
  },
  {
    "city": "Junagadh",
    "state": "Gujarat"
  },
  {
    "city": "Thrissur",
    "state": "Kerala"
  },
  {
    "city": "Alwar",
    "state": "Rajasthan"
  },
  {
    "city": "Bardhaman",
    "state": "West Bengal"
  },
  {
    "city": "Kulti",
    "state": "West Bengal"
  },
  {
    "city": "Kakinada",
    "state": "Andhra Pradesh"
  },
  {
    "city": "Nizamabad",
    "state": "Telangana"
  },
  {
    "city": "Parbhani",
    "state": "Maharashtra"
  },
  {
    "city": "Tumkur",
    "state": "Karnataka"
  },
  {
    "city": "Hisar",
    "state": "Haryana"
  },
  {
    "city": "Ozhukarai",
    "state": "Pudicherry"
  },
  {
    "city": "Bihar Sharif",
    "state": "Bihar"
  },
  {
    "city": "Panipat",
    "state": "Haryana"
  },
  {
    "city": "Darbhanga",
    "state": "Bihar"
  },
  {
    "city": "Bally",
    "state": "West Bengal"
  },
  {
    "city": "Aizawi",
    "state": "Mizoram"
  },
  {
    "city": "Dewas",
    "state": "Madhya Pradesh"
  },
  {
    "city": "Ichakaranji",
    "state": "Maharashtra"
  },
  {
    "city": "Tirupati",
    "state": "Andhra Pradesh"
  },
  {
    "city": "Karnal",
    "state": "Haryana"
  },
  {
    "city": "Bathinda",
    "state": "Punjab"
  },
  {
    "city": "Jalna",
    "state": "Maharashtra"
  },
  {
    "city": "Barasat",
    "state": "West Bengal"
  },
  {
    "city": "Kirari Suleman Nagar",
    "state": "Delhi"
  },
  {
    "city": "Purnia",
    "state": "Bihar"
  },
  {
    "city": "Satna",
    "state": "Madhya Pradesh"
  },
  {
    "city": "Mau",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Sonipat",
    "state": "Haryana"
  },
  {
    "city": "Farrukhabad",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Sagar",
    "state": "Madhya Pradesh"
  },
  {
    "city": "Rourkela",
    "state": "Orissa"
  },
  {
    "city": "Durg",
    "state": "Chhattisgarh"
  },
  {
    "city": "Imphal",
    "state": "Manipur"
  },
  {
    "city": "Ratlam",
    "state": "Madhya Pradesh"
  },
  {
    "city": "Hapur",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Anantapur",
    "state": "Andhra Pradesh"
  },
  {
    "city": "Arrah",
    "state": "Bihar"
  },
  {
    "city": "Karimnagar",
    "state": "Telangana"
  },
  {
    "city": "Etawah",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Ambernath",
    "state": "Maharashtra"
  },
  {
    "city": "North Dumdum",
    "state": "West Bengal"
  },
  {
    "city": "Bharatpur",
    "state": "Rajasthan"
  },
  {
    "city": "Begusarai",
    "state": "Bihar"
  },
  {
    "city": "New Delhi",
    "state": "Delhi"
  },
  {
    "city": "Gandhidham",
    "state": "Gujarat"
  },
  {
    "city": "Baranagar",
    "state": "West Bengal"
  },
  {
    "city": "Tiruvottiyur",
    "state": "Tamil Nadu"
  },
  {
    "city": "Puducherry",
    "state": "Puducherry"
  },
  {
    "city": "Sikar",
    "state": "Rajasthan"
  },
  {
    "city": "Thoothukudi",
    "state": "Tamil Nadu"
  },
  {
    "city": "Rewa",
    "state": "Madhya Pradesh"
  },
  {
    "city": "Mirzapur",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Raichur",
    "state": "Karnataka"
  },
  {
    "city": "Pali",
    "state": "Rajasthan"
  },
  {
    "city": "Khammam",
    "state": "Telangana"
  },
  {
    "city": "Vizianagaram",
    "state": "Andhra Pradesh"
  },
  {
    "city": "Katihar",
    "state": "Bihar"
  },
  {
    "city": "Haridwar",
    "state": "Uttarakhand"
  },
  {
    "city": "Sri Ganganagar",
    "state": "Rajasthan"
  },
  {
    "city": "Karawal Nagar",
    "state": "Delhi"
  },{
    "city": "Nagercoil",
    "state": "Tamil Nadu"
  },
  {
    "city": "Mango",
    "state": "Jharkhand"
  },
  {
    "city": "Bulandshahr",
    "state": "Uttar Pradesh"
  },
  {
    "city": "Thanjavur",
    "state": "Tamil Nadu"
  }


]
