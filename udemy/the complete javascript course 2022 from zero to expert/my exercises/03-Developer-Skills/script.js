// Remember, we're gonna use strict mode in all scripts now!
'use strict';
// probleem 1 find max and min  temprature
const tempratures = [1, 2, 6, 7, 8, 9, 10, 32, 23];
// const calcTemp = function(temps) {
//     let max = temps[0];
//     let min = temps[0];
//     for (let i = 0; i < temps.length; i++) {
//         const currentTemp = temps[i];
//         if (typeof currentTemp !== 'number') continue;
//         if (currentTemp > max) max = currentTemp;
//         if (currentTemp < min) min = currentTemp;
//     }
//     console.log(max, min);
//     return max - min;
// };

// const amplitude = calcTemp(tempratures);
// console.log(amplitude);
//problem2 merge 2 arrays in javascript
// const calcTempNew = function(t1, t2) {
//     //     const array1 = [a, b, c, s];
//     // const array2 = [g, d, t, r];
//     // const array3 = array1.concat(array2);
//     const temps = t1.concat(t2);
//     console.log(temps);
//     let max = temps[0];
//     let min = temps[0];
//     for (let i = 0; i < temps.length; i++) {
//         const currentTemp = temps[i];
//         if (typeof currentTemp !== 'number') continue;
//         if (currentTemp > max) max = currentTemp;
//         if (currentTemp < min) min = currentTemp;
//     }
//     console.log(max, min);
//     return max - min;
// };
// const amplitudenew = calcTempNew([1, 2, 3, 4, 5], [5, 6, 8, 9])
// console.log(amplitudenew);
/////////////////////////
//debugging
// const measurKelvin = function() {

//     const measurment = {
//             type: 'temp',
//             unit: 'cesuis',
//             value: Number(prompt('degress selsuis:'))
//         }
//         //console.log(measurment);
//     console.table(measurment);
//     // console.log(measurment.value);
//     // console.warn(measurment.value);
//     // console.error(measurment.value);

//     const kelvin = measurment.value + 273;
//     return kelvin;

// }
// console.log(measurKelvin());

/////////////////////////////////////////
// challange #1
const date1 = [17, 21, 23];
const date2 = [12, 5, -5, 0, 4];

const printForcast = function(arr) {
        let str = '';
        for (let i = 0; i < arr.length; i++) {
            let numberOfDay = i + 1;
            str = str + arr[i] + "c in  " + numberOfDay + " days...";
            // str = str + '${arr[i]}c in ${i+1} days...';
        }
        console.log("..." + str);

    }
    //printForcast([17, 21, 23]);
printForcast(date1);
printForcast(date2);