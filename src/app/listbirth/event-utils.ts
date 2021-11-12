import { EventInput } from '@fullcalendar/angular';

export const INITIAL_EVENTS: EventInput[] = []

const namapemohon=JSON.parse(localStorage.getItem('Users') || '{}')
console.log(namapemohon);

for(let i=0; i<namapemohon.length; i++){

  INITIAL_EVENTS.push(
    {
      title: namapemohon[i].name,
      date: namapemohon[i].dob, 
    }
  )
}

console.log(INITIAL_EVENTS);

/**let today = new Date();
  let filteredUsers = namapemohon.filter((user:any) => {
    let userDateOfBirth = new Date(user.dob) // you have to convert the user.dob in date object
    return (userDateOfBirth.getMonth() + 1) === (today.getMonth() + 1) && userDateOfBirth.getDate() === today.getDate()
  });
  
  filteredUsers.forEach((element:any) => {
    INITIAL_EVENTS.push(
      {
        title: element.name,
        date: element.dob
      });
  })

console.log(INITIAL_EVENTS);

let today = new Date();
  let filteredUsers = namapemohon.filter((user:any) => {
    let userDateOfBirth = Date.parse(user.dob) // you have to convert the user.dob in date object
    return (userDateOfBirth.getMonth() + 1) === (today.getMonth() + 1) && userDateOfBirth.getDate() === today.getDate()
  });
  
  filteredUsers.forEach((element:any) => {
    INITIAL_EVENTS.push(
      {
        title: element.name,
        date: element.dob
      });
  }) 

console.log(INITIAL_EVENTS);
console.log(userDateOfBirth);**/

//let today = new Date(); // Comment this line of you don't want to compare to today but to another date
