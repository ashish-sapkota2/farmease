
// province, District and crop Options for crop prediction
var province_arr = new Array("Koshi", "Madhesh", "Bagmati", "Gandaki", "Lumbini", "Karnali", "Sudurpashchim", "Dadra and Nagar Haveli", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir ", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu","Telangana ", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal");

var p_a = new Array();
p_a[0]="";
p_a[1]=" Bhojpur	| Dhankuta |	Ilam |	Jhapa |	Khotang |	Morang |	Okhaldhunga |	Panchthar |	Sankhuwasabha |	Solukhumbu |	Sunsari |	Taplejung | 	Terhathum |	Udayapur";
p_a[2]=" Saptari |	Siraha |	Dhanusa |	Mahottari |	Sarlahi |	Bara |	Parsa |	Rautahat";
p_a[3]=" Sindhuli | 	Ramechhap |	Dolakha |	Bhaktapur |	Dhading |	Kathmandu |	Kavrepalanchok |	Lalitpur |	Nuwakot |	Rasuwa |	Sindhupalchok |	Chitwan |	Makwanpur";
p_a[4]=" Baglung |	Gorkha |	Kaski |	Lamjung | Manang |	Mustang |	Myagdi |	Nawalpur |	Parbat |	Syangja |	Tanahun ";
p_a[5]=" Kapilvastu |	Parasi |	Rupandehi |	Arghakhanchi |	Gulmi |	Palpa |	Dang |	Pyuthan |	Rolpa |	Eastern | Rukum |	Banke |	Bardiya ";
p_a[6]=" Western | Rukum |	Salyan |	Dolpa |	Humla |	Jumla |	Kalikot |	Mugu |	Surkhet |	Dailekh |	Jajarkot ";
p_a[7]=" Kailali |	Achham |	Doti |	Bajhang |	Bajura |	Kanchanpur |	Dadeldhura |	Baitadi |	Darchula ";
p_a[8]=" DADRA AND NAGAR HAVELI ";
p_a[9]=" NORTH GOA | SOUTH GOA ";
p_a[10]=" AHMADABAD | AMRELI | ANAND | BANAS KANTHA | BHARUCH | BHAVNAGAR | DANG | DOHAD | GANDHINAGAR | JAMNAGAR | JUNAGADH | KACHCHH | KHEDA | MAHESANA | NARMADA | NAVSARI | PANCH MAHALS | PATAN | PORBANDAR | RAJKOT | SABAR KANTHA | SURAT | SURENDRANAGAR | TAPI | VADODARA | VALSAD ";
p_a[11]=" AMBALA | BHIWANI | FARIDABAD | FATEHABAD | GURGAON | HISAR | JHAJJAR | JIND | KAITHAL | KARNAL | KURUKSHETRA | MAHENDRAGARH | MEWAT | PALWAL | PANCHKULA | PANIPAT | REWARI | ROHTAK | SIRSA | SONIPAT |YAMUNANAGAR ";
p_a[12]=" BILASPUR | CHAMBA | HAMIRPUR | KANGRA | KINNAUR | KULLU | LAHUL AND SPITI | MANDI | SHIMLA | SIRMAUR | SOLAN | UNA ";
p_a[13]=" ANANTNAG | BADGAM | BANDIPORA | BARAMULLA | DODA | GANDERBAL | JAMMU | KARGIL | KATHUA | KISHTWAR | KULGAM | KUPWARA | LEH LADAKH | POONCH | PULWAMA | RAJAURI | RAMBAN | REASI | SAMBA | SHOPIAN | SRINAGAR | UDHAMPUR ";
p_a[14]=" BOKARO | CHATRA | DEOGHAR | DHANBAD | DUMKA | EAST SINGHBUM | GARHWA | GIRIDIH | GODDA | GUMLA | HAZARIBAGH | JAMTARA | KHUNTI | KODERMA | LATEHAR | LOHARDAGA | PAKUR | PALAMU | RAMGARH | RANCHI | SAHEBGANJ | SARAIKELA KHARSAWAN | SIMDEGA | WEST SINGHBHUM ";
p_a[15]=" BAGALKOT | BANGALORE RURAL | BELGAUM | BELLARY | BENGALURU URBAN | BIDAR | BIJAPUR | CHAMARAJANAGAR | CHIKBALLAPUR | CHIKMAGALUR | CHITRADURGA | DAKSHIN KANNAD | DAVANGERE | DHARWAD | GADAG | GULBARGA | HASSAN | HAVERI | KODAGU | KOLAR | KOPPAL | MANDYA | MYSORE | RAICHUR | RAMANAGARA | SHIMOGA | TUMKUR | UDUPI | UTTAR KANNAD | YADGIR ";
p_a[16]=" ALAPPUZHA | ERNAKULAM | IDUKKI | KANNUR | KASARAGOD | KOLLAM | KOTTAYAM | KOZHIKODE | MALAPPURAM | PALAKKAD | PATHANAMTHITTA | THIRUVANANTHAPURAM | THRISSUR | WAYANAD ";
p_a[17]=" AGAR MALWA | ALIRAJPUR | ANUPPUR | ASHOKNAGAR | BALAGHAT | BARWANI | BETUL | BHIND | BHOPAL | BURHANPUR |CHHATARPUR | CHHINDWARA | DAMOH | DATIA | DEWAS | DHAR | DINDORI | GUNA | GWALIOR | HARDA | HOSHANGABAD | INDORE | JABALPUR | JHABUA | KATNI | KHANDWA | KHARGONE | MANDLA | MANDSAUR | MORENA | NARSINGHPUR | NEEMUCH | PANNA | RAISEN | RAJGARH | RATLAM | REWA | SAGAR | SATNA | SEHORE | SEONI | SHAHDOL | SHAJAPUR | SHEOPUR | SHIVPURI | SIDHI | SINGRAULI | TIKAMGARH | UJJAIN | UMARIA | VIDISHA ";
p_a[18]=" AHMEDNAGAR | AKOLA | AMRAVATI | AURANGABAD | BEED | BHANDARA | BULDHANA | CHANDRAPUR | DHULE | GADCHIROLI | GONDIA | HINGOLI | JALGAON | JALNA | KOLHAPUR | LATUR | MUMBAI | NAGPUR | NANDED | NANDURBAR | NASHIK | OSMANABAD | PALGHAR | PARBHANI | PUNE | RAIGAD | RATNAGIRI | SANGLI | SATARA | SINDHUDURG | SOLAPUR | THANE | WARDHA | WASHIM | YAVATMAL ";
p_a[19]=" BISHNUPUR | CHANDEL | CHURACHANDPUR | IMPHAL EAST | SENAPATI | TAMENGLONG | THOUBAL | UKHRUL ";
p_a[20]=" EAST GARO HILLS | EAST JAINTIA HILLS | EAST KHASI HILLS | NORTH GARO HILLS | RI BHOI | SOUTH GARO HILLS | SOUTH WEST GARO HILLS | WEST GARO HILLS | WEST JAINTIA HILLS | WEST KHASI HILLS ";
p_a[21]=" AIZAWL | CHAMPHAI | KOLASIB | LAWNGTLAI | LUNGLEI | MAMIT | SAIHA | SERCHHIP ";
p_a[22]=" DIMAPUR | KIPHIRE | KOHIMA | LONGLENG | MOKOKCHUNG | MON | PEREN | PHEK | TUENSANG | WOKHA | ZUNHEBOTO ";
p_a[23]=" ANUGUL | BALANGIR | BALESHWAR | BARGARH | BHADRAK | BOUDH | CUTTACK | DEOGARH |DHENKANAL | GAJAPATI | GAJAPATI | GANJAM | JAGATSINGHAPUR | JAJAPUR | JHARSUGUDA | KALAHANDI | KANDHAMAL | KENDRAPARA | KENDUJHAR | KHORDHA | KORAPUT | MALKANGIRI | MAYURBHANJ | NABARANGPUR | NAYAGARH | NUAPADA | PURI | RAYAGADA |SAMBALPUR |SONEPUR | SUNDARGARH ";
p_a[24]=" KARAIKAL | MAHE | PONDICHERRY | YANAM ";
p_a[25]=" AMRITSAR | BARNALA |BATHINDA | FARIDKOT | FATEHGARH SAHIB | FAZILKA | FIROZEPUR | GURDASPUR | HOSHIARPUR | JALANDHAR |KAPURTHALA | LUDHIANA | MANSA | MOGA | MUKTSAR | NAWANSHAHR | PATHANKOT |PATIALA | RUPNAGAR | S.A.S NAGAR | SANGRUR | TARN TARAN ";
p_a[26]=" AJMER | ALWAR | BANSWARA | BARAN | BARMER | BHARATPUR | BHILWARA | BIKANER | BUNDI |CHITTORGARH | CHURU | DAUSA | DHOLPUR | DUNGARPUR | GANGANAGAR | HANUMANGARH | JAIPUR | JAISALMER | JALORE | JHALAWAR | JHUNJHUNU | JODHPUR | KARAULI | KOTA | NAGAUR | PALI | PRATAPGARH | RAJSAMAND | SAWAI MADHOPUR | SIKAR | SIROHI | TONK | UDAIPUR ";
p_a[27]=" EAST DISTRICT | NORTH DISTRICT |SOUTH DISTRICT | WEST DISTRICT ";
p_a[28]=" ARIYALUR | COIMBATORE | CUDDALORE | DHARMAPURI | DINDIGUL | ERODE | KANCHIPURAM | KANNIYAKUMARI | KARUR | KRISHNAGIRI | MADURAI | NAGAPATTINAM | NAMAKKAL | PERAMBALUR | PUDUKKOTTAI | RAMANATHAPURAM | SALEM | SIVAGANGA | THANJAVUR | THE NILGIRIS | THENI | THIRUVALLUR | TIRUCHIRAPPALLI | TIRUNELVELI | TIRUPPUR | TIRUVANNAMALAI | TUTICORIN | VELLORE | VILLUPURAM | VIRUDHUNAGAR ";
p_a[29]=" ADILABAD | HYDERABAD | KARIMNAGAR | KHAMMAM | MAHBUBNAGAR | MEDAK | NALGONDA | NIZAMABAD | RANGAREDDI | WARANGAL ";
p_a[30]=" DHALAI | GOMATI | KHOWAI | NORTH TRIPURA | SEPAHIJALA | SOUTH TRIPURA | UNAKOTI | WEST TRIPURA ";
p_a[31]=" AGRA | ALIGARH | ALLAHABAD | AMBEDKAR NAGAR | AMETHI | AMROHA | AURAIYA | AZAMGARH | BAGHPAT | BAHRAICH | BALLIA | BALRAMPUR | BANDA | BARABANKI | BAREILLY | BASTI | BIJNOR | BUDAUN | BULANDSHAHR | CHANDAULI | CHITRAKOOT | DEORIA | ETAH | ETAWAH | FAIZABAD | FARRUKHABAD | FATEHPUR | FIROZABAD | GAUTAM BUDDHA NAGAR | GHAZIABAD | GHAZIPUR | GONDA | GORAKHPUR | HAMIRPUR | HAPUR | HARDOI | HATHRAS | JALAUN | JAUNPUR | JHANSI | KANNAUJ | KANPUR DEHAT | KANPUR NAGAR | KASGANJ | KAUSHAMBI | KHERI | KUSHI NAGAR | LALITPUR | LUCKNOW | MAHARAJGANJ | MAHOBA | MAINPURI | MATHURA | MAU | MEERUT | MIRZAPUR | MORADABAD | MUZAFFARNAGAR | PILIBHIT | PRATAPGARH | RAE BARELI | RAMPUR | SAHARANPUR | SAMBHAL | SANT KABEER NAGAR | SANT RAVIDAS NAGAR | SHAHJAHANPUR | SHAMLI | SHRAVASTI | SIDDHARTH NAGAR | SITAPUR | SONBHADRA | SULTANPUR | UNNAO | VARANASI ";
p_a[32]=" ALMORA | BAGESHWAR | CHAMOLI | CHAMPAWAT | DEHRADUN | HARIDWAR | NAINITAL | PAURI GARHWAL | PITHORAGARH | RUDRA PRAYAG | TEHRI GARHWAL | UDAM SINGH NAGAR | UTTAR KASHI ";
p_a[33]=" 24 PARAGANAS NORTH | 24 PARAGANAS SOUTH | BANKURA | BARDHAMAN | BIRBHUM | COOCHBEHAR | DARJEELING | DINAJPUR DAKSHIN | DINAJPUR UTTAR | HOOGHLY | HOWRAH | JALPAIGURI | MALDAH | MEDINIPUR EAST | MEDINIPUR WEST | MURSHIDABAD | NADIA | PURULIA ";


function print_province(province_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(province_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select Province','');
	option_str.selectedIndex = 0;
	for (var i=0; i<province_arr.length; i++) {
		option_str.options[option_str.length] = new Option(province_arr[i],province_arr[i]);
	}
}

function print_city(city_id, city_index){
	var option_str = document.getElementById(city_id);
	option_str.length=0;	// Fixed by Julian Woods
	option_str.options[0] = new Option('Select District','');
	option_str.selectedIndex = 0;
	var city_arr = p_a[city_index].split("|");
	for (var i=0; i<city_arr.length; i++) {
		option_str.options[option_str.length] = new Option(city_arr[i],city_arr[i]);
	}
}



// dropdown for rainfall prediction

var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC","ANNUAL"]; 

function print_months(month_id) {
    var option_months = document.getElementById(month_id);
    option_months.length = 0;
    option_months.options[0] = new Option('Select Month', '');
    option_months.selectedIndex = 0;
    for (var i = 0; i < months.length; i++) {
        option_months.options[option_months.length] = new Option(months[i], months[i]);
    }
}


var region = ["Arghakhanchi", "Baglung", "Baitadi", "Bajang", "Banke", "Bara", "Bardiya", "Bhaktapur", "Chitawan", "Dadeldhura",
 "Dailekh", "Dang", "Darchula", "Dhading", "Dhankuta", "Dhanusa", "Dolkha", "Dolpa", "Doti", "Gorkha", "Gulmi", "Humla", "Ilam", 
 "Jhapa", "Jumla", "Kabhre", "Kailali", "Kanchanpur", "Kaski", "Kathmandu", "Lalitpur", "Lamjung", "Mahottari", "Makwanpur", "Manang",
  "Morang", "Mugu", "Mustang", "Myagdi", "Nawalparasi", "Nuwakot", "Okhaldhunga", "Palpa", "Panchther", "Parbat", "Rasuwa", "Routahat",
  "Rukum", "Rupandehi", "Salyan", "Sankhuwasabha", "Saptari", "Sarlahi", "Sindhuli", "Solukhumbu", "Sunsari", "Surkhet", "Syangja",
  "Tanahun", "Taplejung", "Terhathum", "Udayapur"];

function print_region(region_id) {
    var option_region = document.getElementById(region_id);
    option_region.length = 0;
    option_region.options[0] = new Option('Select Region', '');
    option_region.selectedIndex = 0;
    for (var i = 0; i < region.length; i++) {
        option_region.options[option_region.length] = new Option(region[i], region[i]);
    }
}


// district crop dropdown for yield prediction

// const cropOptions = {
//   Arghakhanchi: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
//       Rabi: ['Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Onion', 'Other Rabi pulses', 'Rapeseed &Mustard', 'Safflower', 'Sunflower', 'Wheat'],
//       Summer: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Rice', 'Sunflower'],
//     WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Black pepper', 'Brinjal', 'Cashewnut', 'Citrus Fruit', 'Coconut', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tobacco', 'Tomato', 'Turmeric']
//     },
//   BAGALKOT: {
// 	Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
//     Rabi: ['Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Onion', 'Other Rabi pulses', 'Rapeseed &Mustard', 'Safflower', 'Sunflower', 'Wheat'],
//     Summer: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Rice', 'Sunflower'],
// 	WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Black pepper', 'Brinjal', 'Cashewnut', 'Citrus Fruit', 'Coconut', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tobacco', 'Tomato', 'Turmeric']
//   },
//   BANGALORE_RURAL: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Paddy', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
//     Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sunflower', 'Urad', 'Wheat'],
//     Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
// 	WholeYear: ['Arcanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut', 'Coriander', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tomato', 'Tobacco', 'Turmeric']
//   },
//   BELGAUM: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
//     Rabi: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
//     Summer: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Rice', 'Sunflower'],
// 	WholeYear: ['Arecanut', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Grapes', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tomato', 'Tobacco', 'Turmeric']
//   },
//   BELLARY: {
//     Kharif: ['Castor seed', 'Cowpea(Lobia)', 'Dry ginger', 'Gram', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad', 'Cotton(lint)'],
//     Rabi: ['Bajra', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
//     Summer: ['Bajra', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
// 	WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Sannhamp', 'Sugarcane', 'Tomato', 'Turmeric']
//   },
//   BENGALURU_URBAN: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Black pepper', 'Castor seed', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Paddy', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Sunflower', 'Urad'],
//     Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Potato', 'Rapeseed &Mustard', 'Rice', 'Rice', 'Sunflower'],
//     Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
// 	WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cashewnut', 'Coconut ', 'Coriander', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tomato', 'Turmeric']
//   },
//    BIDAR: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
//     Rabi: ['Dry chillies', 'Gram', 'Groundnut', 'Jowar', 'Linseed', 'Maize', 'Onion', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Wheat'],
//     Summer: ['Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Peas & beans (Pulses)', 'Potato', 'Rice', 'Sunflower'],
// 	WholeYear: ['Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Cotton(lint)', 'Coriander', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugar cane', 'Sweet potato', 'Tomato', 'Turmeric']
//   },
//   BIJAPUR: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
//     Rabi: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Potato', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
//     Summer: ['Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Potato', 'Sunflower'],
// 	WholeYear: ['Banana', 'Beans & Mutter(Vegetable)', 'Brinjal', 'Citrus Fruit', 'Cotton(lint)', 'Dry chillies', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Sugarcane', 'Sweet potato', 'Tomato', 'Turmeric', 'Coconut']
//   },
//   CHAMARAJANAGAR: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Gram', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
//     Rabi: ['Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sunflower', 'Urad', 'Wheat'],
//     Summer: ['Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
// 	WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Tapioca', 'Tomato', 'Turmeric', 'Tobacco']
//   },
//   CHIKBALLAPUR: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Small millets', 'Sunflower'],
//     Rabi: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sunflower'],
//     Summer: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Maize', 'Onion', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
// 	WholeYear: ['Arecanut', 'Banana', 'Cashewnut', 'Coconut', 'Coriander', 'Dry ginger', 'Garlic', 'Sugarcane', 'Sweet potato', 'Turmeric']
//   },
//   CHIKMAGALUR: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Black pepper', 'Castor seed', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
//     Rabi: ['Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
//     Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Rice', 'Sunflower'],
//     WholeYear: ['Arecanut', 'Cardamom', 'Coriander', 'Garlic', 'Sugarcane', 'Turmeric', 'Black pepper', 'Coconut', 'Dry chillies', 'Banana', 'Onion', 'Potato', 'Sweet potato', 'Tapioca', 'Tobacco', 'Peas & beans (Pulses)', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Beans & Mutter(Vegetable)', 'Brinjal', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Grapes', 'Mango', 'Other Fresh Fruits', 'Pome Fruit', 'Tomato', 'Cotton(lint)', 'Dry ginger', 'Cashewnut', 'Papaya', 'Sannhamp']
//   },
//   CHITRADURGA: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
//     Rabi: ['Bajra', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Wheat'],
//     Summer: ['Bajra', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Ragi', 'Rice', 'Sunflower'],
// 	WholeYear: ['Arcanut (Processed)', 'Atcanut (Raw)', 'Arecanut', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Cotton(lint)', 'Dry chillies', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Sugarcane', 'Tomato', 'Turmeric', 'Tobacco']
//   },
//   DAKSHIN_KANNAD: {
//     Kharif: ['Black pepper', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Horse-gram', 'Moong(Green Gram)', 'Other Kharif pulses', 'Paddy', 'Rice', 'Sesamum', 'Urad'],
//     Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Moong(Green Gram)', 'Other Rabi pulses', 'Paddy', 'Rice', 'Urad'],
//     Summer:['Cowpea(Lobia)', 'Dry chillies', 'Maize', 'Paddy', 'Rice'],
// 	WholeYear: ['Arcanut (Processed)', 'Atcanut (Raw)', 'Arecanut', 'Banana', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Dry chillies', 'Dry ginger', 'Mango', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Turmeric']
//   },
//   DAVANGERE: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad', 'Cotton(lint)'],
//     Rabi: ['Bajra', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
//     Summer: ['Bajra', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Peas & beans (Pulses)', 'Ragi', 'Rice', 'Sunflower'],
// 	WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tobacco', 'Tomato', 'Turmeric']
//   },
//   DHARWAD: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
//     Rabi: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
//     Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Potato', 'Rice', 'Sunflower'],
// 	WholeYear: ['Arcanut (Processed)', 'Atcanut (Raw)', 'Arecanut', 'Banana', 'Black pepper', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tomato', 'Tobacco', 'Turmeric']
//   },
//   GADAG: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
//     Rabi: ['Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Wheat'],
//     Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Peas & beans (Pulses)', 'Rice', 'Sunflower'],
// 	WholeYear:['Arecanut', 'Banana', 'Beans & Mutter(Vegetable)', 'Brinjal', 'Citrus Fruit', 'Cotton(lint)', 'Coriander', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tomato', 'Tobacco', 'Turmeric']
//   },
//   GULBARGA: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
//     Rabi: ['Bajra', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Potato', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Wheat'],
//     Summer: ['Bajra', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Rice', 'Sunflower'],
// 	WholeYear: ['Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Cotton(lint)', 'Coriander', 'Coconut ', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tobacco', 'Tomato', 'Turmeric']
//   },
//   HAVERI: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
//     Rabi: ['Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
//     Summer: ['Bajra', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Peas & beans (Pulses)', 'Ragi', 'Rice', 'Sunflower'],
// 	WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tomato', 'Tobacco', 'Turmeric']
//   },
//   HASSAN: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Black pepper', 'Castor seed', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
//     Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sunflower', 'Urad'],
//     Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
// 	WholeYear: ['Arcanut (Processed)', 'Atcanut (Raw)', 'Arecanut', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Cotton(lint)', 'Coriander', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tomato', 'Turmeric']
//   },
//   KODAGU: {
//     Kharif: ['Arhar/Tur', 'Black pepper', 'Castor seed', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sesamum', 'Sunflower'],
//     Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Ragi', 'Rice'],
//     Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Maize', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice'],
// 	WholeYear: ['Arcanut (Processed)', 'Atcanut (Raw)', 'Arecanut', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut', 'Dry chillies', 'Dry ginger', 'Mango', 'Onion', 'Other Fresh Fruits', 'Pome Fruit', 'Potato', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tobacco', 'Tomato', 'Turmeric']
//   },
//   KOLAR: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Sunflower', 'Urad'],
//     Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sunflower'],
//     Summer: ['Dry chillies', 'Groundnut', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
// 	WholeYear: ['Arcanut (Processed)', 'Arecanut', 'Atcanut (Raw)', 'Banana', 'Beans & Mutter(Vegetable)', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Coriander', 'Dry chillies', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sugarcane', 'Tomato', 'Turmeric']
//   },
//   KOPPAL: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Peas & beans (Pulses)', 'Rice', 'Sesamum', 'Small millets', 'Sunflower', 'Urad'],
//     Rabi: ['Bajra', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
//     Summer: ['Bajra', 'Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Peas & beans (Pulses)', 'Rice', 'Sunflower'],
// 	WholeYear: ['Banana', 'Brinjal', 'Citrus Fruit', 'Cotton(lint)', 'Coconut', 'Coriander', 'Dry chillies', 'Grapes', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tomato', 'Turmeric']
//   },
//   MANDYA: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Paddy', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad', 'Potato'],
//     Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sunflower', 'Urad', 'Wheat'],
//     Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
// 	WholeYear: ['Arcanut (Processed)', 'Arecanut', 'Atcanut (Raw)', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Cotton(lint)', 'Coriander', 'Dry chillies', 'Dry ginger', 'Garlic', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tomato', 'Tobacco', 'Turmeric']
//   },
//   MYSORE: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Black pepper', 'Castor seed', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
//     Rabi: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sunflower', 'Urad', 'Wheat'],
//     Summer: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
// 	WholeYear: ['Arcanut (Processed)', 'Atcanut (Raw)', 'Arecanut', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cotton(lint)', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Coriander', 'Dry chillies', 'Dry ginger', 'Garlic', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tomato', 'Turmeric']
//   },
//   RAMANAGARA: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Sunflower', 'Urad'],
//     Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Ragi', 'Rapeseed &Mustard', 'Rice'],
//     Summer: ['Dry chillies', 'Groundnut', 'Maize', 'Peas & beans (Pulses)', 'Ragi', 'Rice', 'Sunflower'],
// 	WholeYear: ['Arecanut', 'Banana', 'Black pepper', 'Cashewnut', 'Coconut', 'Coriander', 'Dry ginger', 'Garlic', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Turmeric', 'Tobacco']
//   },
//   RAICHUR: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
//     Rabi: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
//     Summer: ['Bajra', 'Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Rice', 'Sunflower'],
// 	WholeYear: ['Banana', 'Brinjal', 'Citrus Fruit', 'Cotton(lint)', 'Coriander', 'Coconut', 'Dry chillies', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tomato', 'Tobacco', 'Turmeric']
//   },
//   SHIMOGA: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Black pepper', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
//     Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
//     Summer: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
// 	WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Mango', 'Onion', 'Other Fresh Fruits', 'Peas & beans (Pulses)', 'Pome Fruit', 'Sannhamp', 'Sugarcane', 'Tapioca', 'Tobacco', 'Tomato', 'Turmeric']
//   },
//   TUMKUR: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
//     Rabi: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
//     Summer: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
// 	WholeYear: ['Arcanut (Processed)', 'Atcanut (Raw)', 'Arecanut', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tobacco', 'Tomato', 'Turmeric']
//   },
//   UDUPI: {
//     Kharif: ['Dry chillies', 'Dry ginger', 'Groundnut', 'Horse-gram', 'Moong(Green Gram)', 'Other Kharif pulses', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Urad'],
//     Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Rapeseed &Mustard', 'Rice', 'Sunflower', 'Urad'],
//     Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Maize', 'Rice'],
// 	WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Black pepper', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut', 'Dry chillies', 'Dry ginger', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Turmeric']
//   },
//   UTTAR_KANNAD: {
//     Kharif: ['Arhar/Tur', 'Black pepper', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Other Kharif pulses', 'Paddy', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Soyabean', 'Sunflower'],
//     Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad'],
//     Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Ragi', 'Rice', 'Sunflower'],
// 	WholeYear: ['Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tomato', 'Tobacco', 'Turmeric']
//   },
//   YADGIR: {
//     Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Rice', 'Sesamum', 'Small millets', 'Sunflower'],
//     Rabi: ['Bajra', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
//     Summer: ['Bajra', 'Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Rice', 'Sunflower'],
// 	WholeYear: ['Coconut', 'Coriander', 'Mesta', 'Sugarcane', 'Sweet potato']
//   } 
// };
