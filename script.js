// ==============================================

// const numbersDiv = document.querySelector('.numbers')
// for(let i = 100; i >= 50; i -= 10) {
//     numbersDiv.innerHTML += `<p>${i}</p>`
// }

// ==============================================

// const strings = ['Ta', 'Tata', 'Tatata', 'Da', 'Dada', 'Dadada']
// const stingsContainer = document.querySelector('.stringsContainer')
// for(let i = 0; i < strings.length; i ++) {
//     stingsContainer.innerHTML += `<p>${strings[i]}</p>`
// }

// ==============================================


// const users = [
//     { first_name: 'Armin', last_name: 'Mayer', age: 10 },
//     { first_name: 'Wilhelm', last_name: 'Schmidt', age: 20 },
//     { first_name: 'Ursula', last_name: 'Smith', age: 30 },
//     { first_name: 'Mary', last_name: 'Fest', age: 40 }
// ];
// let users_container = document.querySelector('.users_container');

// function createUserCard(user) {
//   let card = document.createElement('div');
//   card.classList.add('card');
  
//   let name = document.createElement('h1');
//   name.innerText = `${user.first_name} ${user.last_name}`;
  
//   let age = document.createElement('p');
//   age.innerText = `Age: ${user.age}`;
  
//   card.appendChild(name);
//   card.appendChild(age);

//   return card;
// }

// let adultUsers = users.filter(user => user.age >= 18);

// adultUsers.forEach(user => {
//     let card = createUserCard(user);
//     users_container.appendChild(card);
// });
