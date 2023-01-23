// Ask the user which language they speak.
let language = prompt('What language do you speak?')
// Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”
language = language.toLowerCase();
// Create a few conditions :
switch(language){
    case 'french':
        alert('Bonjour!');
        break;
    case 'english':
        alert('Hello');
        break;
    case 'hebrew':
        alert('Shalom');
        break;
    default:
        alert('01110011 01101111 01110010 01110010 01111001')

}
// If the user speaks French : display “Bonjour”
// If the user speaks English : display “Hello”
// If the user speaks Hebrew : display “Shalom”
// If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’