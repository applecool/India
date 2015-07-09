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
  }

]
