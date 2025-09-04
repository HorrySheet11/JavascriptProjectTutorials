let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name,property){
  let print = '';
  let i = 0;
 
    if (contacts.some((x) => x.firstName == name || x.lastName == name)){
      let num = 0;
      for(let i in contacts){
        if (contacts[i].firstName == name || contacts[i].lastName == name)
        num = i;
      }
      
      if(contacts.some((x) => x.hasOwnProperty(property))){
        return contacts[num][property];
      }else{
        return 'No such property';
      }

    }else{
      return 'No such contact';
    }

  return print;
}

console.log(lookUpProfile("Sherlock", "likes"));
