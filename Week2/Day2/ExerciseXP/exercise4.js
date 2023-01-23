// Below is an array of users that are online in a group chat.

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
// Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
let returnSentence;
// If there is no users (the users array is empty), console.log “no one is online”.
if(users.length === 0){
    returnSentence = 'no one is online';
} else if (users.length === 1){ // If there is 1 user, console.log “<name_user> is online”.
    returnSentence = `${users[0]} is online`;
} else if (users.length === 2){ // If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
    returnSentence = `${users[0]} and ${users[1]} are online`
} else { // If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
    returnSentence = `${users[0]}, ${users[1]} and ${users.length - 2} more are online`
}

console.log(returnSentence);
// For example, if there are 5 users, it should display:
// name_user1, name_user2 and 3 more are online