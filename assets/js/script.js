/*
let num = 3;
alert(num);
*/


// let a = 10, b = 2;
// alert(a + b);
// alert(a - b);
// alert(a * b);
// alert(a / b);


// let c = 15, d = 2;
// let result = c + d;
// alert(result);
// let a = 10, b = 2, c = 5;


// let a = 17, b = 10;
// let c = a - b;
// let d  = 7;
// let result = c + d;
// alert(result);


// let str = 'Привет, Ьир!';
// alert(str);


// let str1 = 'Привет, ', str2 = 'Мир';
// alert(str1 + str2);


// let name = 'Владимир';
// alert(`Привет, ${name}!`);


// let age = 18;
// alert(`Мне ${age} лет!`);


// let name = prompt('Введите ваше имя');
// alert(`Ваше имя ${name}`);


// let num = prompt('Введите число');
// alert(num**2);


// let str = 'abcde';
// alert(str.charAt(0));
// alert(str.charAt(2));
// alert(str.charAt(4));


// let num = '12345';
// alert(Number(num.charAt(0)) * Number(num.charAt(1)) * Number(num.charAt(2)) * Number(num.charAt(3)) * Number(num.charAt(4)));



// alert(`Секунд в часе: ${60 * 60}`)
// alert(`Секунд в сутках: ${24 * 60 * 60}`)
// alert(`Секунд в месяце: ${24 * 60 * 60 * 30}`)


// let hour= new Date;
// let minutes = new Date;
// let seconds = new Date;
// alert(`${hour.getHours()}:${minutes.getMinutes()}:${seconds.getSeconds()}`);


// let num = 3287;
// alert(num**2)


// let num = prompt('Enter number');
// if (num == 10) {
//     alert('Верно')
// } else {
//     alert('Неверно')
// };


// let min = prompt('Enter minute');
// if (min <= 15) {
//     alert('1 Четверть часа')
// } else if (min <= 30) {
//     alert('2 Четверть часа')
// } else if (min <= 45) {
//     alert('3 Четверть часа')
// } else if (min < 60) {
//     alert('4 Четверть часа')
// };


// let lang; 
// let arr = []; 
// lang = prompt("выберите язык") 
// if (lang == 'ru') { 
//     arr[0] = "Пн" 
//     arr[1] = "Вт" 
//     arr[2] = "Ср" 
//     arr[3] = "Чт" 
//     arr[4] = "Пт" 
//     arr[5] = "Сб" 
//     arr[6] = "Ср" 
//     for(let i = 0; i < 7; i++){ 
//         alert(arr[i]) 
//     } 
// }else if (lang == 'en') { 
//     arr[0] = "Mn" 
//     arr[1] = "Ts" 
//     arr[2] = "Fd" 
//     arr[3] = "For" 
//     arr[4] = "Fr" 
//     arr[5] = "St" 
//     arr[6] = "Sn" 
//     for(let i = 0; i < 7; i++){ 
//         alert(arr[i]) 
//     } 
// }
 

// let lang = prompt("выберите язык") 
// let arr = "" 
// switch(lang){ 
//     case 'ru': 
//         arr = "Пн Вт Ср Чт Пт Сб Вс" 
//         alert(arr) 
//         break 
//     case 'en': 
//         arr = "Mn Ts Fir For Fr St Sn" 
//         alert(arr) 
//         break 
// } 
 
 
// let lang=prompt("lang", ""); 
// let arr={'ru':['Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье.'],'en':['Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday.']}  
// alert(arr[lang]) 
 
 
// let a = prompt('1 или 0') 
// if (a == 0){ 
//     alert("Верно") 
// }else{ 
//     alert("Неверно") 
// } 
 

// let a = prompt('1 или 0') 
// if (a > 0){ 
//     alert("Верно") 
// }else{ 
//     alert("Неверно") 
// } 
 

// let a = prompt('1 или 0') 
// if (a < 0){ 
//     alert("Верно") 
// }else{ 
//     alert("Неверно") 
// } 
 

// let a = prompt('1 или 0') 
// if (a >= 0){ 
//     alert("Верно") 
// }else{ 
//     alert("Неверно") 
// } 
 

// let a = prompt('1 или 0') 
// if (a <= 0){ 
//     alert("Верно") 
// }else{ 
//     alert("Неверно") 
// } 
 

// let a = prompt('1 или 0') 
// if (a != 0){ 
//     alert("Верно") 
// }else{ 
//     alert("Неверно") 
// } 
 

// let a = prompt('text') 
// if (a == 'text'){ 
//     alert("Верно") 
// }else{ 
//     alert("Неверно") 
// } 
 

// let a = prompt("num") 
// if (a > 0 || a < 5){ 
//     alert("Верно") 
// } 
 

// let a = prompt("num") 
// if (a > 0 && a < 5){ 
//     alert("Верно") 
// } 
 

// let a = prompt("num") 
// if (a > 0 && a < 5){ 
//     alert("Верно") 
// }else{ 
//     alert("Неверно") 
// } 
 

// let a = prompt("num") 
// a = Number(a) 
// if(a == 2 || a == 0) { 
//     a += 7 
//     alert(a) 
// }else { 
//     a /= 10 
//     alert(a) 
// } 
 

// let a = prompt("num") 
// let b = prompt("num") 
// a = Number(a) 
// b = Number(b) 
// if(a <= 1 && b >= 3){ 
//     alert(a + b); 
// }else{ 
//     alert(a - b); 
// } 
 

// let a = prompt("num") 
// let b = prompt("num") 
// a = Number(a) 
// b = Number(b) 
// if ((a > 2 && a < 11) || (b >= 6 && b < 14)){ 
//     alert("Верно") 
// } 
 

// let num = prompt("num") 
// let result 
// num = Number(num) 
// switch(num){ 
//     case 1: 
//         result = "Зима" 
//         alert(result); 
//         break 
//     case 2: 
//         result = "Весна" 
//         alert(result); 
//         break 
//     case 3: 
//         result = "Лето" 
//         alert(result); 
//         break 
//     case 4: 
//         result = "Осень" 
//         alert(result); 
//         break 
// } 
 
 
// let day = prompt("num") 
// day = Number(day) 
// if(day > 0 && day < 32){ 
//     if(day <= 10){ 
//         alert("Первая"); 
//     } 
//     if(day >=11 && day < 20){ 
//         alert("Вторая"); 
//     } 
//     if(day >=21){ 
//         alert("Третья"); 
//     } 
// }else{ 
//     alert("Неверная дата"); 
// } 
 
 
// let month = prompt("num") 
// month = Number(month) 
// if(month > 0 && month <= 2 || month == 12){ 
//     alert("Зима"); 
// } 
// if(month > 3 && month <=5 ){ 
//     alert("Весна"); 
// } 
// if(month > 5 && month <= 8){ 
//     alert("Лето"); 
// } 
// if(month > 8 && month <= 11){ 
//     alert("Осень"); 
// } 


// let str = prompt("str") 
// if (str[0] == "a"){ 
//     alert("Да"); 
//} else {
//     alert('Нет')
// }


//  let num = prompt("num") ;
//  if (num.charAt(0) == "1" || num.charAt(0) == '2' || num.charAt(0) == '3') { 
//      alert("Да"); 
// } else {
//      alert('Нет');
//  }


// let str = prompt("str") 
// alert(Number(str.charAt(0)) + Number(str.charAt(1)) + Number(str.charAt(2))); 
 

// let str = prompt("str") 
// a = Number(str.charAt(0)) + Number(str.charAt(1)) + Number(str.charAt(2)) 
// b = Number(str.charAt(3)) + Number(str.charAt(4)) + Number(str.charAt(5)) 
// if(a == b){ 
//     alert("Верно"); 
// }else{ 
//     alert("Неверно"); 
// }