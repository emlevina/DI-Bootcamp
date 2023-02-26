const currentTime = new Date ();
const firstOfJan = new Date(`${currentTime.getFullYear()+1}-01-01`);
const difference = firstOfJan.getTime() - currentTime.getTime();

module.exports = difference