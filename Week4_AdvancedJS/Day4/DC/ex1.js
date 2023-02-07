// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
class Video {
    constructor(title, uploader, time) {
        this.title = title
        this.uploader = uploader
        this.time = time
    }
    // Create a method called watch() which displays a string as follows:
    // “uploader parameter watched all time parameter of title parameter!”
    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}`)
    }
}

// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
const someVideo = new Video('Interview Dudya', 'Katya', 14400)
someVideo.watch()
const otherVideo = new Video('Kotiki', 'Oleg', 15)
otherVideo.watch()

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
const arrayOfData = [
    {
        title: 'Dud',
        uploader: 'Maxim',
        time: 15
    },
    {
        title: 'JS lesson',
        uploader: 'Katya',
        time: 100100
    },
    {
        title: 'Little girl',
        uploader: 'Anya',
        time: 2
    },
    {
        title: 'Flowers',
        uploader: 'Mama',
        time: 37
    },
    {
        title: 'Fishing',
        uploader: 'Papa',
        time: 100
    },
]
// Bonus: Loop through the array to instantiate those instances.
const arrayOfVideos = arrayOfData.map(({title, uploader, time}) => new Video(title, uploader, time))
arrayOfVideos.forEach(video => video.watch())