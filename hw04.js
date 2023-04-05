/* 1 task*/
function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  };

  console.log(pow(2, 3));
 
  
// task2


// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );



// const ask = (question, yes, no) => {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   () => { alert("Вы согласились."); },
//   () => { alert("Вы отменили выполнение."); }
// );



//task 3

// let arr = [5, 2, 1, -10, 8];

// arr.sort(function(a, b) {
//   return b - a;
// });

// alert(arr)





// task 4;

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(function(user) {
//   return user.name;
// });

// alert(names); 



//task 5

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(function(user) {
//   return { 
//     fullName: user.name + ' ' + user.surname,
//     id: user.id 
//   };
// });

// alert(usersMapped[1].id); 
// alert(usersMapped[1].fullName); 





//task 6


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


function getAverageAge(users) {
  let sum = users.reduce(function(acc, user) {
    return acc + user.age;
  }, 0);

  return sum / users.length;
}

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) )


