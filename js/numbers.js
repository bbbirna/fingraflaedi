
const lilBtn = document.getElementById("lil-btn");
const bauBtn = document.getElementById("bau-btn");
const fuBtn = document.getElementById("fu-btn");
const visBtn = document.getElementById("vis-btn");
const thuBtn = document.getElementById("thu-btn");
const ulnBtn = document.getElementById("uln-btn");

lilBtn.addEventListener("click", function(){
	litliSettings.classList.add("show");
	baugSettings.classList.remove("show");
	fuSettings.classList.remove("show");
	visiSettings.classList.remove("show");
	thumbSettings.classList.remove("show");
	ulnSettings.classList.remove("show");
	lilBtn.classList.add("show");
	bauBtn.classList.remove("show");
	fuBtn.classList.remove("show");
	visBtn.classList.remove("show");
	thuBtn.classList.remove("show");
	ulnBtn.classList.remove("show");
})

bauBtn.addEventListener("click", function(){
	baugSettings.classList.add("show");
	litliSettings.classList.remove("show");
	fuSettings.classList.remove("show");
	visiSettings.classList.remove("show");
	thumbSettings.classList.remove("show");
	ulnSettings.classList.remove("show");
	lilBtn.classList.remove("show");
	bauBtn.classList.add("show");
	fuBtn.classList.remove("show");
	visBtn.classList.remove("show");
	thuBtn.classList.remove("show");
	ulnBtn.classList.remove("show");
})

fuBtn.addEventListener("click", function(){
	fuSettings.classList.add("show");
	litliSettings.classList.remove("show");
	baugSettings.classList.remove("show");
	visiSettings.classList.remove("show");
	thumbSettings.classList.remove("show");
	ulnSettings.classList.remove("show");
	lilBtn.classList.remove("show");
	bauBtn.classList.remove("show");
	fuBtn.classList.add("show");
	visBtn.classList.remove("show");
	thuBtn.classList.remove("show");
	ulnBtn.classList.remove("show");
})

visBtn.addEventListener("click", function(){
	visiSettings.classList.add("show");
	litliSettings.classList.remove("show");
	baugSettings.classList.remove("show");
	fuSettings.classList.remove("show");
	thumbSettings.classList.remove("show");
	ulnSettings.classList.remove("show");
	lilBtn.classList.remove("show");
	bauBtn.classList.remove("show");
	fuBtn.classList.remove("show");
	visBtn.classList.add("show");
	thuBtn.classList.remove("show");
	ulnBtn.classList.remove("show");
})

thuBtn.addEventListener("click", function(){
	thumbSettings.classList.add("show");
	litliSettings.classList.remove("show");
	baugSettings.classList.remove("show");
	fuSettings.classList.remove("show");
	visiSettings.classList.remove("show");
	ulnSettings.classList.remove("show");
	lilBtn.classList.remove("show");
	bauBtn.classList.remove("show");
	fuBtn.classList.remove("show");
	visBtn.classList.remove("show");
	thuBtn.classList.add("show");
	ulnBtn.classList.remove("show");
})

ulnBtn.addEventListener("click", function(){
	
	litliSettings.classList.remove("show");
	baugSettings.classList.remove("show");
	fuSettings.classList.remove("show");
	visiSettings.classList.remove("show");
	thumbSettings.classList.remove("show");
	ulnSettings.classList.add("show");
	lilBtn.classList.remove("show");
	bauBtn.classList.remove("show");
	fuBtn.classList.remove("show");
	visBtn.classList.remove("show");
	thuBtn.classList.remove("show");
	ulnBtn.classList.add("show");

})

let countArray = [];
let countElArray = [];

const litliSettings = document.getElementById("litli-settings");
const baugSettings = document.getElementById("baug-settings");
const fuSettings = document.getElementById("fu-settings");
const visiSettings = document.getElementById("visi-settings");
const thumbSettings = document.getElementById("thumb-settings");
const ulnSettings = document.getElementById("uln-settings");

const litliX = document.getElementById("litli-x");
const litliY = document.getElementById("litli-y");
const litliZ = document.getElementById("litli-z");

const baugX = document.getElementById("baug-x");
const baugY = document.getElementById("baug-y");
const baugZ = document.getElementById("baug-z");

const fuX = document.getElementById("fu-x");
const fuY = document.getElementById("fu-y");
const fuZ = document.getElementById("fu-z");

const visiX = document.getElementById("visi-x");
const visiY = document.getElementById("visi-y");
const visiZ = document.getElementById("visi-z");

const thumbX = document.getElementById("thumb-x");
const thumbY = document.getElementById("thumb-y");
const thumbZ = document.getElementById("thumb-z");

const ulnX = document.getElementById("uln-x");
const ulnY = document.getElementById("uln-y");
const ulnZ = document.getElementById("uln-z");

litliX.innerHTML += "<p class='my-type'>X</p>";
for (let i = 0; i < 3; i++) {

	litliX.innerHTML += "<span class='input-span'><input id=count" + i + " class='input-nr' type='text' size='10px' value='0' id='count" + i + "'><input type='button' value='-' id='moins' onclick='minus" + i + "()'><input type='button' value='+' id='plus' onclick='plus" + i + "()'></span>"

	countArray[i] = "count" + i;
	countElArray[i] = document.getElementById("count" + i);

}

litliY.innerHTML += "<p class='my-type'>Y</p>";
for (let i = 3; i < 6; i++) {

	litliY.innerHTML += "<span class='input-span'><input id=count" + i + " class='input-nr' type='text' size='10px' value='0' id='count" + i + "'><input type='button' value='-' id='moins' onclick='minus" + i + "()'><input type='button' value='+' id='plus' onclick='plus" + i + "()'></span>"

	countArray[i] = "count" + i;
	countElArray[i] = document.getElementById("count" + i);
	
}

litliZ.innerHTML += "<p class='my-type'>Z</p>";
for (let i = 6; i < 9; i++) {

	litliZ.innerHTML += "<span class='input-span'><input id=count" + i + " class='input-nr' type='text' size='10px' value='0' id='count" + i + "'><input type='button' value='-' id='moins' onclick='minus" + i + "()'><input type='button' value='+' id='plus' onclick='plus" + i + "()'></span>"

	countArray[i] = "count" + i;
	countElArray[i] = document.getElementById("count" + i);
	
}

visiX.innerHTML += "<p class='my-type'>X</p>";
for (let i = 9; i < 12; i++) {

	visiX.innerHTML += "<span class='input-span'><input id=count" + i + " class='input-nr' type='text' size='10px' value='0' id='count" + i + "'><input type='button' value='-' id='moins' onclick='minus" + i + "()'><input type='button' value='+' id='plus' onclick='plus" + i + "()'></span>"

	countArray[i] = "count" + i;
	countElArray[i] = document.getElementById("count" + i);
	
}

visiY.innerHTML += "<p class='my-type'>Y</p>";
for (let i = 12; i < 15; i++) {

	visiY.innerHTML += "<span class='input-span'><input id=count" + i + " class='input-nr' type='text' size='10px' value='0' id='count" + i + "'><input type='button' value='-' id='moins' onclick='minus" + i + "()'><input type='button' value='+' id='plus' onclick='plus" + i + "()'></span>"

	countArray[i] = "count" + i;
	countElArray[i] = document.getElementById("count" + i);
	
}

visiZ.innerHTML += "<p class='my-type'>Z</p>";
for (let i = 15; i < 18; i++) {

	visiZ.innerHTML += "<span class='input-span'><input id=count" + i + " class='input-nr' type='text' size='10px' value='0' id='count" + i + "'><input type='button' value='-' id='moins' onclick='minus" + i + "()'><input type='button' value='+' id='plus' onclick='plus" + i + "()'></span>"

	countArray[i] = "count" + i;
	countElArray[i] = document.getElementById("count" + i);
	
}

baugX.innerHTML += "<p class='my-type'>X</p>";
for (let i = 18; i < 21; i++) {

	baugX.innerHTML += "<span class='input-span'><input id=count" + i + " class='input-nr' type='text' size='10px' value='0' id='count" + i + "'><input type='button' value='-' id='moins' onclick='minus" + i + "()'><input type='button' value='+' id='plus' onclick='plus" + i + "()'></span>"

	countArray[i] = "count" + i;
	countElArray[i] = document.getElementById("count" + i);
	
}

baugY.innerHTML += "<p class='my-type'>Y</p>";
for (let i = 21; i < 24; i++) {

	baugY.innerHTML += "<span class='input-span'><input id=count" + i + " class='input-nr' type='text' size='10px' value='0' id='count" + i + "'><input type='button' value='-' id='moins' onclick='minus" + i + "()'><input type='button' value='+' id='plus' onclick='plus" + i + "()'></span>"

	countArray[i] = "count" + i;
	countElArray[i] = document.getElementById("count" + i);
	
}

baugZ.innerHTML += "<p class='my-type'>Z</p>";
for (let i = 24; i < 27; i++) {

	baugZ.innerHTML += "<span class='input-span'><input id=count" + i + " class='input-nr' type='text' size='10px' value='0' id='count" + i + "'><input type='button' value='-' id='moins' onclick='minus" + i + "()'><input type='button' value='+' id='plus' onclick='plus" + i + "()'></span>"

	countArray[i] = "count" + i;
	countElArray[i] = document.getElementById("count" + i);
	
}

fuX.innerHTML += "<p class='my-type'>X</p>";
for (let i = 27; i < 30; i++) {

	fuX.innerHTML += "<span class='input-span'><input id=count" + i + " class='input-nr' type='text' size='10px' value='0' id='count" + i + "'><input type='button' value='-' id='moins' onclick='minus" + i + "()'><input type='button' value='+' id='plus' onclick='plus" + i + "()'></span>"

	countArray[i] = "count" + i;
	countElArray[i] = document.getElementById("count" + i);
	
}

fuY.innerHTML += "<p class='my-type'>Y</p>";
for (let i = 30; i < 33; i++) {

	fuY.innerHTML += "<span class='input-span'><input id=count" + i + " class='input-nr' type='text' size='10px' value='0' id='count" + i + "'><input type='button' value='-' id='moins' onclick='minus" + i + "()'><input type='button' value='+' id='plus' onclick='plus" + i + "()'></span>"

	countArray[i] = "count" + i;
	countElArray[i] = document.getElementById("count" + i);
	
}

fuZ.innerHTML += "<p class='my-type'>Z</p>";
for (let i = 33; i < 36; i++) {

	fuZ.innerHTML += "<span class='input-span'><input id=count" + i + " class='input-nr' type='text' size='10px' value='0' id='count" + i + "'><input type='button' value='-' id='moins' onclick='minus" + i + "()'><input type='button' value='+' id='plus' onclick='plus" + i + "()'></span>"

	countArray[i] = "count" + i;
	countElArray[i] = document.getElementById("count" + i);
	
}

thumbX.innerHTML += "<p class='my-type'>X</p>";
for (let i = 36; i < 39; i++) {

	thumbX.innerHTML += "<span class='input-span'><input id=count" + i + " class='input-nr' type='text' size='10px' value='0' id='count" + i + "'><input type='button' value='-' id='moins' onclick='minus" + i + "()'><input type='button' value='+' id='plus' onclick='plus" + i + "()'></span>"

	countArray[i] = "count" + i;
	countElArray[i] = document.getElementById("count" + i);
	
}

thumbY.innerHTML += "<p class='my-type'>Y</p>";
for (let i = 39; i < 42; i++) {

	thumbY.innerHTML += "<span class='input-span'><input id=count" + i + " class='input-nr' type='text' size='10px' value='0' id='count" + i + "'><input type='button' value='-' id='moins' onclick='minus" + i + "()'><input type='button' value='+' id='plus' onclick='plus" + i + "()'></span>"

	countArray[i] = "count" + i;
	countElArray[i] = document.getElementById("count" + i);
	
}

thumbZ.innerHTML += "<p class='my-type'>Z</p>";
for (let i = 42; i < 45; i++) {

	thumbZ.innerHTML += "<span class='input-span'><input id=count" + i + " class='input-nr' type='text' size='10px' value='0' id='count" + i + "'><input type='button' value='-' id='moins' onclick='minus" + i + "()'><input type='button' value='+' id='plus' onclick='plus" + i + "()'></span>"

	countArray[i] = "count" + i;
	countElArray[i] = document.getElementById("count" + i);
	
}

ulnX.innerHTML += "<p class='my-type'>X</p>";
for (let i = 45; i < 46; i++) {

	ulnX.innerHTML += "<span class='input-span'><input id=count" + i + " class='input-nr' type='text' size='10px' value='0' id='count" + i + "'><input type='button' value='-' id='moins' onclick='minus" + i + "()'><input type='button' value='+' id='plus' onclick='plus" + i + "()'></span>"

	countArray[i] = "count" + i;
	countElArray[i] = document.getElementById("count" + i);
	
}

ulnY.innerHTML += "<p class='my-type'>Y</p>";
for (let i = 46; i < 47; i++) {

	ulnY.innerHTML += "<span class='input-span'><input id=count" + i + " class='input-nr' type='text' size='10px' value='0' id='count" + i + "'><input type='button' value='-' id='moins' onclick='minus" + i + "()'><input type='button' value='+' id='plus' onclick='plus" + i + "()'></span>"

	countArray[i] = "count" + i;
	countElArray[i] = document.getElementById("count" + i);
	
}

ulnZ.innerHTML += "<p class='my-type'>Z</p>";
for (let i = 47; i < 48; i++) {

	ulnZ.innerHTML += "<span class='input-span'><input id=count" + i + " class='input-nr' type='text' size='10px' value='0' id='count" + i + "'><input type='button' value='-' id='moins' onclick='minus" + i + "()'><input type='button' value='+' id='plus' onclick='plus" + i + "()'></span>"

	countArray[i] = "count" + i;
	countElArray[i] = document.getElementById("count" + i);
	
}





var count0 = 0;
var countEl0 = document.getElementById("count0");
function plus0(){
	count0 += 0.1;   
    countEl0.value = count0.toFixed(2);


}
function minus0(){
    count0 -= 0.1;
    countEl0.value = count0.toFixed(2);
}

var count1 = 0;
var countEl1 = document.getElementById("count1");
function plus1(){
    count1 += 0.1;
    countEl1.value = count1.toFixed(2);
}
function minus1(){
    count1 -= 0.1;
    countEl1.value = count1.toFixed(2);
}

var count2 = 0;
var countEl2 = document.getElementById("count2");
function plus2(){
	count2 += 0.1;
	countEl2.value = count2.toFixed(2);
}
function minus2(){
	count2 -= 0.1;
	countEl2.value = count2.toFixed(2);
}

var count3 = 0;
var countEl3 = document.getElementById("count3");
function plus3(){
	count3 += 0.1;
	countEl3.value = count3.toFixed(2);
}
function minus3(){
	count3 -= 0.1;
	countEl3.value = count3.toFixed(2);
}

var count4 = 0;
var countEl4 = document.getElementById("count4");
function plus4(){
	count4 += 0.1;
	countEl4.value = count4.toFixed(2);
}
function minus4(){
	count4 -= 0.1;
	countEl4.value = count4.toFixed(2);
}

var count4 = 0;
var countEl4 = document.getElementById("count4");
function plus4(){
	count4 += 0.1;
	countEl4.value = count4.toFixed(2);
}
function minus4(){
	count4 -= 0.1;
	countEl4.value = count4.toFixed(2);
}

var count5 = 0;
var countEl5 = document.getElementById("count5");
function plus5(){
	count5 += 0.1;
	countEl5.value = count5.toFixed(2);
}
function minus5(){
	count5 -= 0.1;
	countEl5.value = count5.toFixed(2);
}

var count6 = 0;
var countEl6 = document.getElementById("count6");
function plus6(){
	count6 += 0.1;
	countEl6.value = count6.toFixed(2);
}
function minus6(){
	count6 -= 0.1;
	countEl6.value = count6.toFixed(2);
}

var count7 = 0;
var countEl7 = document.getElementById("count7");
function plus7(){
	count7 += 0.1;
	countEl7.value = count7.toFixed(2);
}
function minus7(){
	count7 -= 0.1;
	countEl7.value = count7.toFixed(2);
}

var count8 = 0;
var countEl8 = document.getElementById("count8");
function plus8(){
	count8 += 0.1;
	countEl8.value = count8.toFixed(2);
}
function minus8(){
	count8 -= 0.1;
	countEl8.value = count8.toFixed(2);
}

var count9 = 0;
var countEl9 = document.getElementById("count9");
function plus9(){
	count9 += 0.1;
	countEl9.value = count9.toFixed(2);
}
function minus9(){
	count9 -= 0.1;
	countEl9.value = count9.toFixed(2);
}

var count10 = 0;
var countEl10 = document.getElementById("count10");
function plus10(){
	count10 += 0.1;
	countEl10.value = count10.toFixed(2);
}
function minus10(){
	count10 -= 0.1;
	countEl10.value = count10.toFixed(2);
}

var count11 = 0;
var countEl11 = document.getElementById("count11");
function plus11(){
	count11 += 0.1;
	countEl11.value = count11.toFixed(2);
}
function minus11(){
	count11 -= 0.1;
	countEl11.value = count11.toFixed(2);
}

var count12 = 0;
var countEl12 = document.getElementById("count12");
function plus12(){
	count12 += 0.1;
	countEl12.value = count12.toFixed(2);
}
function minus12(){
	count12 -= 0.1;
	countEl12.value = count12.toFixed(2);
}

var count13 = 0;
var countEl13 = document.getElementById("count13");
function plus13(){
	count13 += 0.1;
	countEl13.value = count13.toFixed(2);
}
function minus13(){
	count13 -= 0.1;
	countEl13.value = count13.toFixed(2);
}

var count14 = 0;
var countEl14 = document.getElementById("count14");
function plus14(){
	count14 += 0.1;
	countEl14.value = count14.toFixed(2);
}
function minus14(){
	count14 -= 0.1;
	countEl14.value = count14.toFixed(2);
}

var count15 = 0;
var countEl15 = document.getElementById("count15");
function plus15(){
	count15 += 0.1;
	countEl15.value = count15.toFixed(2);
}
function minus15(){
	count15 -= 0.1;
	countEl15.value = count15.toFixed(2);
}

var count16 = 0;
var countEl16 = document.getElementById("count16");
function plus16(){
	count16 += 0.1;
	countEl16.value = count16.toFixed(2);
}
function minus16(){
	count16 -= 0.1;
	countEl16.value = count16.toFixed(2);
}

var count17 = 0;
var countEl17 = document.getElementById("count17");
function plus17(){
	count17 += 0.1;
	countEl17.value = count17.toFixed(2);
}
function minus17(){
	count17 -= 0.1;
	countEl17.value = count17.toFixed(2);
}

var count18 = 0;
var countEl18 = document.getElementById("count18");
function plus18(){
	count18 += 0.1;
	countEl18.value = count18.toFixed(2);
}
function minus18(){
	count18 -= 0.1;
	countEl18.value = count18.toFixed(2);
}

var count19 = 0;
var countEl19 = document.getElementById("count19");
function plus19(){
	count19 += 0.1;
	countEl19.value = count19.toFixed(2);
}
function minus19(){
	count19 -= 0.1;
	countEl19.value = count19.toFixed(2);
}

var count20 = 0;
var countEl20 = document.getElementById("count20");
function plus20(){
	count20 += 0.1;
	countEl20.value = count20.toFixed(2);
}
function minus20(){
	count20 -= 0.1;
	countEl20.value = count20.toFixed(2);
}

var count21 = 0;
var countEl21 = document.getElementById("count21");
function plus21(){
	count21 += 0.1;
	countEl21.value = count21.toFixed(2);
}
function minus21(){
	count21 -= 0.1;
	countEl21.value = count21.toFixed(2);
}

var count22 = 0;
var countEl22 = document.getElementById("count22");
function plus22(){
	count22 += 0.1;
	countEl22.value = count22.toFixed(2);
}
function minus22(){
	count22 -= 0.1;
	countEl22.value = count22.toFixed(2);
}

var count23 = 0;
var countEl23 = document.getElementById("count23");
function plus23(){
	count23 += 0.1;
	countEl23.value = count23.toFixed(2);
}
function minus23(){
	count23 -= 0.1;
	countEl23.value = count23.toFixed(2);
}

var count24 = 0;
var countEl24 = document.getElementById("count24");
function plus24(){
	count24 += 0.1;
	countEl24.value = count24.toFixed(2);
}
function minus24(){
	count24 -= 0.1;
	countEl24.value = count24.toFixed(2);
}

var count25 = 0;
var countEl25 = document.getElementById("count25");
function plus25(){
	count25 += 0.1;
	countEl25.value = count25.toFixed(2);
}
function minus25(){
	count25 -= 0.1;
	countEl25.value = count25.toFixed(2);
}

var count26 = 0;
var countEl26 = document.getElementById("count26");
function plus26(){
	count26 += 0.1;
	countEl26.value = count26.toFixed(2);
}
function minus26(){
	count26 -= 0.1;
	countEl26.value = count26.toFixed(2);
}

var count27 = 0;
var countEl27 = document.getElementById("count27");
function plus27(){
	count27 += 0.1;
	countEl27.value = count27.toFixed(2);
}
function minus27(){
	count27 -= 0.1;
	countEl27.value = count27.toFixed(2);
}

var count27 = 0;
var countEl27 = document.getElementById("count27");
function plus27(){
	count27 += 0.1;
	countEl27.value = count27.toFixed(2);
}
function minus27(){
	count27 -= 0.1;
	countEl27.value = count27.toFixed(2);
}

var count28 = 0;
var countEl28 = document.getElementById("count28");
function plus28(){
	count28 += 0.1;
	countEl28.value = count28.toFixed(2);
}
function minus28(){
	count28 -= 0.1;
	countEl28.value = count28.toFixed(2);
}

var count29 = 0;
var countEl29 = document.getElementById("count29");
function plus29(){
	count29 += 0.1;
	countEl29.value = count29.toFixed(2);
}
function minus29(){
	count29 -= 0.1;
	countEl29.value = count29.toFixed(2);
}

var count30 = 0;
var countEl30 = document.getElementById("count30");
function plus30(){
	count30 += 0.1;
	countEl30.value = count30.toFixed(2);
}
function minus30(){
	count30 -= 0.1;
	countEl30.value = count30.toFixed(2);
}

var count31 = 0;
var countEl31 = document.getElementById("count31");
function plus31(){
	count31 += 0.1;
	countEl31.value = count31.toFixed(2);
}
function minus31(){
	count31 -= 0.1;
	countEl31.value = count31.toFixed(2);
}

var count32 = 0;
var countEl32 = document.getElementById("count32");
function plus32(){
	count32 += 0.1;
	countEl32.value = count32.toFixed(2);
}
function minus32(){
	count32 -= 0.1;
	countEl32.value = count32.toFixed(2);
}

var count33 = 0;
var countEl33 = document.getElementById("count33");
function plus33(){
	count33 += 0.1;
	countEl33.value = count33.toFixed(2);
}
function minus33(){
	count33 -= 0.1;
	countEl33.value = count33.toFixed(2);
}

var count34 = 0;
var countEl34 = document.getElementById("count34");
function plus34(){
	count34 += 0.1;
	countEl34.value = count34.toFixed(2);
}
function minus34(){
	count34 -= 0.1;
	countEl34.value = count34.toFixed(2);
}

var count35 = 0;
var countEl35 = document.getElementById("count35");
function plus35(){
	count35 += 0.1;
	countEl35.value = count35.toFixed(2);
}
function minus35(){
	count35 -= 0.1;
	countEl35.value = count35.toFixed(2);
}

var count36 = 0;
var countEl36 = document.getElementById("count36");
function plus36(){
	count36 += 0.1;
	countEl36.value = count36.toFixed(2);
}
function minus36(){
	count36 -= 0.1;
	countEl36.value = count36.toFixed(2);
}

var count37 = 0;
var countEl37 = document.getElementById("count37");
function plus37(){
	count37 += 0.1;
	countEl37.value = count37.toFixed(2);
}
function minus37(){
	count37 -= 0.1;
	countEl37.value = count37.toFixed(2);
}

var count38 = 0;
var countEl38 = document.getElementById("count38");
function plus38(){
	count38 += 0.1;
	countEl38.value = count38.toFixed(2);
}
function minus38(){
	count38 -= 0.1;
	countEl38.value = count38.toFixed(2);
}

var count39 = 0;
var countEl39 = document.getElementById("count39");
function plus39(){
	count39 += 0.1;
	countEl39.value = count39.toFixed(2);
}
function minus39(){
	count39 -= 0.1;
	countEl39.value = count39.toFixed(2);
}

var count40 = 0;
var countEl40 = document.getElementById("count40");
function plus40(){
	count40 += 0.1;
	countEl40.value = count40.toFixed(2);
}
function minus40(){
	count40 -= 0.1;
	countEl40.value = count40.toFixed(2);
}

var count41 = 0;
var countEl41 = document.getElementById("count41");
function plus41(){
	count41 += 0.1;
	countEl41.value = count41.toFixed(2);
}
function minus41(){
	count41 -= 0.1;
	countEl41.value = count41.toFixed(2);
}

var count42 = 0;
var countEl42 = document.getElementById("count42");
function plus42(){
	count42 += 0.1;
	countEl42.value = count42.toFixed(2);
}
function minus42(){
	count42 -= 0.1;
	countEl42.value = count42.toFixed(2);
}

var count43 = 0;
var countEl43 = document.getElementById("count43");
function plus43(){
	count43 += 0.1;
	countEl43.value = count43.toFixed(2);
}
function minus43(){
	count43 -= 0.1;
	countEl43.value = count43.toFixed(2);
}

var count44 = 0;
var countEl44 = document.getElementById("count44");
function plus44(){
	count44 += 0.1;
	countEl44.value = count44.toFixed(2);
}
function minus44(){
	count44 -= 0.1;
	countEl44.value = count44.toFixed(2);
}

var count45 = 0;
var countEl45 = document.getElementById("count45");
function plus45(){
	count45 += 0.1;
	countEl45.value = count45.toFixed(2);
}
function minus45(){
	count45 -= 0.1;
	countEl45.value = count45.toFixed(2);
}

var count46 = 0;
var countEl46 = document.getElementById("count46");
function plus46(){
	count46 += 0.1;
	countEl46.value = count46.toFixed(2);
}
function minus46(){
	count46 -= 0.1;
	countEl46.value = count46.toFixed(2);
}

var count47 = 0;
var countEl47 = document.getElementById("count47");
function plus47(){
	count47 += 0.1;
	countEl47.value = count47.toFixed(2);
}
function minus47(){
	count47 -= 0.1;
	countEl47.value = count47.toFixed(2);
}








