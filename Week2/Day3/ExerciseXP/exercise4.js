const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// Console.log the number of floors in the building.
console.log(building.numberOfFloors)
// Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor, building.numberOfAptByFloor.thirdFloor)
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
let secondTenant = building.nameOfTenants[1]
console.log(secondTenant, building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0])
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
const getRent = (name) => building.numberOfRoomsAndRent[name][1]

let rentSarah = getRent('sarah')
let rentDavid = getRent('david')
let rentDan = getRent('dan')

if(rentSarah + rentDavid > rentDan){
    building.numberOfRoomsAndRent['dan'][1] = 1200
}

console.log(getRent('dan'))