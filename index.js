// 1-MASALA
// function topKattaSon(son1, son2, son3) {
//     let katta = Number.MIN_SAFE_INTEGER; 
//     let index = 0;
//     const sonlar = [son1, son2, son3];
  
//     do {
//       if (sonlar[index] > katta) {
//         katta = sonlar[index];
//       }
//       index++;
//     } while (index < sonlar.length);
//       return katta;
//   }
//   let engKatta = topKattaSon(25, 67, 42);
//   console.log("Eng katta son: " + engKatta);
//  2-MASAla
// function SozBilanIfodalash(son) {
//     if (son < 10 || son > 99) {
//       return "Noto'g'ri kirish. 10 dan katta 99 dan kichik son kiriting.";
//     }
  
//     let birliklar = ["nol", "bir", "ikki", "uch", "to'rt", "besh", "olti", "yetti", "sakkiz", "to'qqiz"];
//     let onlar = ["", "o'n", "yigirma", "o'ttiz", "qirq", "ellik", "oltmish", "yetmish", "sakson", "to'qson"];
  
//     let birliklarRaqami = Math.floor(son % 10);
//     let onlarRaqami = Math.floor(son / 10);
  
//     let birliklarSozi = birliklar[birliklarRaqami];
//     let onlarSozi = onlar[onlarRaqami];
  
//     switch (son) {
//       case 10:
//         return "o'n";
//         break;
//       case 20:
//         return "yigirma";
//         break;
//       case 30:
//         return "o'ttiz";
//         break;
//       case 40:
//         return "qirq";
//         break;
//       case 50:
//         return "ellik";
//       case 60:
//         return "oltmish";
//       case 70:
//         return "yetmish";
//       case 80:
//         return "sakson";
//       case 90:
//         return "to'qson";
//       default:
//         return onlarSozi + " " + birliklarSozi;
//     }
//   }
//   console.log(SozBilanIfodalash(73)); 
//   console.log(SozBilanIfodalash(21)); 
//   3-MASALA
// function nechtaToqSon(n) {
//     if (n < 1 || !Number.isInteger(n)) {
//         throw new Error("N soni musbat butun son bo'lishi kerak");
//     }

//     let counter = 0;

//     for (let i = 1; i <= n; i += 2) {
//         counter++;
//     }
//  return counter;
// }
// let n = 10;
// let counter = nechtaToqSon(n);
// console.log(`1 dan ${n} gacha ${counter} ta toq son bor`);

//   4-MASALA

// function counterNumbers(start, end) {
//     let counter = 0;
//     for (let i = start; i <= end; i++) {
//       if (i % 2 !== 0) {
//         counter++;
//       }
//     }
//     return counter;
//   }
//  console.log(counterNumbers(1, 10));

//   5-MASALA

// function calculateSquareAndCube(number) {
//     const square = number * number;
//     const cube = number * number * number;
//     return { square, cube };
//   }
  
//   const result = calculateSquareAndCube(3);
//   console.log(result)
//   const result2 = calculateSquareAndCube(5);
//   console.log(result2);

//   7-MASALA

function isPrime(number) {
    if (number <= 1) {
      return true;
    } else if (number <= 3) {
      return true;
    } else if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
    let i = 5;
    while (i * i <= number) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
    return true;
  }
  console.log(isPrime(7));  
  console.log(isPrime(10)); 
  
