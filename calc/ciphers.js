// ciphers.js

/*
new cipher(
	"English Ordinal", // cipher name
	"English", // category
	120, 57, 36, // hue, saturation, lightness
	[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122], // lowercase characters
	[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26], // values
	true, // characters with diacritic marks have the same value as regular ones, default is "true"
	true, // enabled state, default is "false"
	false, // case sensitive cipher, default is "false"
	false, // multi character/syllable cipher, default is "false"
	false, // wheel cipher, default is "false"
	"Simple cipher based on alphabetical order." // brief description
)
*/

cipherList = [
	new cipher(
		"English Standard",
		"English I",
		50, 68, 63,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800],
		true,
		true,
		false,
		false,
		false,
		"<p>This cipher is based on <span class='qgBold'>English Reduced</span> where each value is multiplied by <span class='qgBold'>10<sup>n-1</sup></span> for every <span class='qgBold'>1 to 9 loop count</span>, where <span class='qgBold'>n</span> is the current loop count. </p> <p> In simple words, the values are multiplied by <span class='qgBold'>1</span> for the <span class='qgBold'>first 1 to 9 loop</span>, by <span class='qgBold'>10</span> for the <span class='qgBold'>second loop</span>, by <span class='qgBold'>100</span> for the <span class='qgBold'>third loop</span> and so on.</p>"
	),
	new cipher(
		"Alphanumeric Qabbala",
		"English I",
		60, 33, 62,
		[48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],
		true,
		true,
		false,
		false,
		false,
		"<p><span class='qgBold'>Alphanumeric Qabbala</span> is derived from <span class='qgBold'>Base36 notation</span>, in which the letters are treated as numerals in a continuous alphanumeric sequence from 0 to Z. In other words, after 9 comes A=10, then B=11, and so on until Z=35.</p> <p>The name of the cipher itself (ʺ<span class='qgBold'>AQ</span>ʺ) already explains what it is, since A=<span class='qgBold'>10</span> and Q=<span class='qgBold'>26</span>, standing for the <span class='qgBold'>ten</span> numerals from 0 to 9, and the <span class='qgBold'>twenty-six</span> letters from A to Z.</p>"
	),
	new cipher(
		"English Ordinal",
		"English I",
		120, 65, 62,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
		true,
		true,
		false,
		false,
		false,
		"<p> Simple cipher based on <span class='qgBold'>alphabetical order</span>. </p> <p> It is a base cipher from which other ciphers such as <span class='qgBold'>Reverse</span>, <span class='qgBold'>Reduced</span> and <span class='qgBold'>Standard</span> are derived. </p>"
	),
	new cipher(
		"Satanic Gematria",
		"English I",
		0, 100, 66,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61],
		true,
		true,
		false,
		false,
		false,
		"<p><span class='qgBold'>Satanic Gematria</span> corresponds to a continuous sequence from A=<span class='qgBold'>36</span> to Z=<span class='qgBold'>61</span>. These numbers are relevant because <span class='qgBold'>666</span> is the <span class='qgBold'>36</span>th triangular number, and <span class='qgBold'>61</span> is the 18th (i.e. 6+6+6) prime number.</p> <p>The name <span class='qgBold'>Satanic Gematria</span> adds to <span class='qgBold'>666</span>, thus making Satanic Gematria a rare example of a perfectly named cipher.</p>"
	),
	new cipher(
		"English Reduced",
		"English I",
		216, 95, 73,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8],
		true,
		true,
		false,
		false,
		false,
		"<p> This cipher is based on <span class='qgBold'>English Ordinal</span> where every value is <span class='qgBold'>reduced to a single digit</span>. </p> <p> It is related to <span class='qgBold'>Numerology</span> which focuses on numbers from <span class='qgBold'>1 to 9</span> (there are no zeroes). </p> <p> In order to <span class='qgBold'>reduce</span> any value to a single digit, a number is broken into individual digits and these single digits are added together, so that a new number is obtained. This procedure is done iteratively for newly obtained numbers until a single digit value is calculated. </p> <p> Example:<br><span class='qgBold'>S</span> = 19 -> 1+9 = 10 -> 1+0 = <span class='qgBold'>1</span></p>"
	),
	new cipher(
		"Synx",
		"English I",
		180, 44, 66,
		[48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,9,10,12,14,15,18,20,21,28,30,35,36,42,45,60,63,70,84,90,105,126,140,180,210,252,315,420,630,1260],
		true,
		true,
		false,
		false,
		false,
		"<p>The <span class='qgBold'>Synx</span> cipher is based on making the 36 alphanumeric digits 0-Z correspond to the 36 divisors of <span class='qgBold'>1260</span>, the smallest natural number having exactly 36 divisors.</p> <p>The name <span class='qgBold'>Synx</span> adds to <span class='qgBold'>1260</span> in the same cipher, thus reinforcing its connection with the number on which it is based.</p>"
	),
	new cipher(
		"Divisors of 1296",
		"English II",
		30, 60, 70,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[0,1,2,3,4,6,8,9,12,16,18,24,27,36,48,54,72,81,108,144,162,216,324,432,648,1296],
		true,
		false,
		false,
		false,
		false,
		"<p>In this cipher, the 26 letters of the English alphabet are associated with the 25 divisors of 1296, the smallest natural number having exactly 25 divisors.</p> <p>In order to achieve this, the letter ʺAʺ was given the value Zero, and then the sequence of divisors will start at B=1, then C=2, until Z=1296.</p>"
	),
	new cipher(
		"Synx rip-off",
		"English II",
		270, 27, 72,
		[49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,38],
		[1,2,3,4,5,6,7,9,10,12,14,15,18,20,21,28,30,35,36,42,45,60,63,70,84,90,105,126,140,180,210,252,315,420,630,1260],
		true,
		false,
		false,
		false,
		false,
		"<p>Atlantean falsification of the Lemurian <span class='qgBold'>Synx</span> cipher, erasing Zero and adding the Ampersand (&) at the end of the alphanumeric sequence.</p>"
	),
	new cipher(
		"QWERTY",
		"English II",
		90, 60, 70,
		[113,119,101,114,116,121,117,105,111,112,97,115,100,102,103,104,106,107,108,122,120,99,118,98,110,109],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
		true,
		false,
		false,
		false,
		false,
		"<p>English Gematria system based on the QWERTY keyboard.</p>"
	),
	new cipher(
		"Numeric QWERTY",
		"English II",
		90, 60, 60,
		[49,50,51,52,53,54,55,56,57,48,113,119,101,114,116,121,117,105,111,112,97,115,100,102,103,104,106,107,108,122,120,99,118,98,110,109],
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],
		true,
		false,
		false,
		false,
		false,
		"<p>English Gematria system based on the <span class='qgBold'>alphanumeric</span> QWERTY keyboard.</p>"
	),
	new cipher(
		"Kaye Cipher",
		"English II",
		0, 55, 66,
		[48,49,50,51,52,53,54,55,56,57,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,38,128624,97,98,99,100,101,102,103,104,105,106],
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,35],
		true,
		false,
		false,
		false,
		false,
		"<p>Baconian-Rosicrucian cipher based on attributing the Elizabethan English alphabet to the sequence of values from 10 to 35, provided that the 10th letter corresponds to the value 10.</p>"
	),
	new cipher(
		"Modern Kaye",
		"English II",
		352, 56, 78,
		[48,49,50,51,52,53,54,55,56,57,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,97,98,99,100,101,102,103,104,105],
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],
		true,
		false,
		false,
		false,
		false,
		"<p>Baconian-Rosicrucian cipher based on attributing the modern English alphabet to the sequence of values from 10 to 35, provided that the 10th letter corresponds to the value 10.</p>"
	),
	new cipher(
		"Alphanumeric Primes",
		"English III",
		34, 43, 73,
		[48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149],
		true,
		false,
		false,
		false,
		false,
		"<p>In this cipher, a correspondence is made between the alphanumeric sequence 0-Z and the sequence of prime numbers, so that ʺ0ʺ = 0th prime = 1, ʺ1ʺ = 1st prime = 2, etc.</p>"
	),
	new cipher(
		"Alphanumeric Trigonal",
		"English III",
		101, 42, 64,
		[48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[0,1,3,6,10,15,21,28,36,45,55,66,78,91,105,120,136,153,171,190,210,231,253,276,300,325,351,378,406,435,465,496,528,561,595,630],
		true,
		false,
		false,
		false,
		false,
		"<p>In this cipher, a correspondence is made between the alphanumeric sequence 0-Z and the sequence of trigonal (triangular) numbers.</p>"
	),
	new cipher(
		"Alphanumeric Squares",
		"English III",
		175, 39, 61,
		[48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400,441,484,529,576,625,676,729,784,841,900,961,1024,1089,1156,1225],
		true,
		false,
		false,
		false,
		false,
		"<p>In this cipher, a correspondence is made between the alphanumeric sequence 0-Z and the sequence of tetragonal (square) numbers.</p>"
	),
	new cipher(
		"Alphanumeric Halves",
		"English III",
		59, 41, 57,
		[48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0],
		true,
		false,
		false,
		false,
		false,
		"<p>In this cipher, a correspondence is made between the alphanumeric sequence 0-Z and both positive and negative numbers, so that both 0 and Z correspond to the value Zero.</p>"
	),
	new cipher(
		"Alphanumeric Satanic I",
		"English III",
		32, 58, 62,
		[48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61],
		true,
		false,
		true,
		false,
		false,
		"<p>This cipher expands the alphanumeric sequence so that it includes the numerals 0-9, lowercase letters a-z, and uppercase letters A-Z.</p>"
	),
	new cipher(
		"Alphanumeric Satanic II",
		"English III",
		16, 58, 62,
		[48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61],
		true,
		false,
		true,
		false,
		false,
		"This cipher expands the alphanumeric sequence so that it includes the numerals 0-9, uppercase letters A-Z, and lowercase letters a-z."
	),
	new cipher(
		"Cryptographic AQ",
		"Extra",
		60, 33, 62,
		[1,48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		["0.","1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12.","13.","14.","15.","16.","17.","18.","19.","20.","21.","22.","23.","24.","25.","26.","27.","28.","29.","30.","31.","32.","33.","34.","35."],
		true,
		false,
		false,
		true,
		true,
		"<p>Cryptographic cipher based on <span class='qgBold'>Alphanumeric Qabbala</span>.</p>"
	),
	new cipher(
		"Heximal AQ",
		"Extra",
		150, 40, 60,
		[1,48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		["00.","01.","02.","03.","04.","05.","10.","11.","12.","13.","14.","15.","20.","21.","22.","23.","24.","25.","30.","31.","32.","33.","34.","35.","40.","41.","42.","43.","44.","45.","50.","51.","52.","53.","54.","55."],
		true,
		false,
		false,
		true,
		true,
		"<p>Cryptographic cipher, based on converting the values of <span class='qgBold'>Alphanumeric Qabbala</span> into base6 (Heximal) notation.</p>"
	),
	new cipher(
		"English Trigon",
		"Extra",
		30, 70, 70,
		[1,48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		["10.","20.","21.","30.","31.","32.","40.","41.","42.","43.","50.","51.","52.","53.","54.","60.","61.","62.","63.","64.","65.","70.","71.","72.","73.","74.","75.","76.","80.","81.","82.","83.","84.","85.","86.","87."],
		true,
		false,
		false,
		true,
		true,
		"<p>The 36 Paths, a new method derived from the <span class='qgBold'>English Trigon</span> (Alphanumeric Triangle).</p>"
	),
	new cipher(
		"AQ Astrology",
		"Extra",
		90, 60, 70,
		[1,48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		["☉︎","☿","♀","☽︎","♂","♃","♄","♅","♆","♇","☊","☋","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓","Ⅰ.","Ⅱ.","Ⅲ.","Ⅳ.","Ⅴ.","Ⅵ.","Ⅶ.","Ⅷ.","Ⅸ.","Ⅹ.","Ⅺ.","Ⅻ."],
		true,
		false,
		false,
		true,
		true,
		"<p>Astrological correspondences for Alphanumeric Qabbala.</p>"
	),
	new cipher(
		"Hebrew Gematria",
		"Foreign",
		50, 78, 63,
		[1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1499,1500,1502,1504,1505,1506,1508,1510,1511,1512,1513,1514,1498,1501,1503,1507,1509],
		[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,20,40,50,80,90],
		true,
		false,
		false,
		false,
		false,
		"<p> This <span class='qgBold'>Hebrew</span> cipher uses <span class='qgBold'>Standard</span> values (also known as <span class='qgBold'>Absolute</span> or <span class='qgBold'>Normative</span>). </p> <p> <span class='qgBold'>Sofit</span> (final form) letters have <span class='qgBold'>the same values</span> as initial letter forms. </p> <p> <span class='qgNote'>Read more: <a class='qgLink' target='_blank' href='https://en.wikipedia.org/wiki/Gematria#Standard_encoding'>Wikipedia - Gematria (Standard encoding)</a></span> </p>"
	),
	new cipher(
		"Greek Isopsephy",
		"Foreign",
		191, 80, 71,
		[945,946,947,948,949,989,987,950,951,952,953,954,955,956,957,958,959,960,985,961,963,962,964,965,966,967,968,969,993],
		[1,2,3,4,5,6,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,200,300,400,500,600,700,800,900],
		true,
		false,
		false,
		false,
		false,
		"<p> This <span class='qgBold'>Greek</span> cipher uses <span class='qgBold'>Standard</span> values. </p> <p> <span class='qgNote'>Read more: <a class='qgLink' target='_blank' href='https://en.wikipedia.org/wiki/Isopsephy'>Wikipedia - Isopsephy</a></span> </p>"
	),
	new cipher(
		"Abjad Numerals",
		"Foreign",
		25, 64, 59,
		[1575,1576,1580,1583,1607,1608,1586,1581,1591,1610,1603,1604,1605,1606,1587,1593,1601,1589,1602,1585,1588,1578,1579,1582,1584,1590,1592,1594],
		[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000],
		true,
		false,
		false,
		false,
		false,
		"<p> <span class='qgBold'>Abjad Numerals</span> represent an alphanumeric code where decimal numerical values are assigned to the <span class='qgBold'>28</span> letters of the <span class='qgBold'>Arabic</span> alphabet. </p> <p> <span class='qgNote'>Read more: <a class='qgLink' target='_blank' href='https://en.wikipedia.org/wiki/Abjad_numerals'>Wikipedia - Abjad numerals</a></span> </p>"
	)
]