const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

//   Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
for(key in details){
    process.stdout.write(`${key} ${details[key]} `)
}

console.log()