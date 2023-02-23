class Book {
    constructor(obj) {
        this.title = obj.title // * The title
        this.author = obj.author // * The author
        this.date = obj.date // * Creation date
        this.pages = obj.pages // * The number of pages
        this.timesRead = obj.timesRead // * The number of times the book has been read.
        this.isThrownAway = false // * If the book was thrown away (boolean)
    }

    read(times, shouldBeDisposed) {
        if (shouldBeDisposed) {
            this.isThrownAway = true
        } else {
            this.timesRead += times
        }
    }
}

class Manual extends Book {
    constructor(obj) {
        super(obj)
    }

    read(times = 1) {
        const today = new Date()
        const shouldBeDisposed = today.getFullYear() - this.date >= 5
        super.read(times, shouldBeDisposed)
    }
}

class Novel extends Book {
    constructor(obj) {
        super(obj)

    }

    read(times = 1) {
        const shouldBeDisposed = this.timesRead > 100 ? true : false
        super.read(times, shouldBeDisposed)
    }
}

const newManual = new Manual({
    title: 'Top Secret Shuttle Building Manual',
    author: 'Redacted',
    date: 2013,
    pages: 1147,
    timesRead: 1,
})

const newNovel = new Novel({
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    date: 1813,
    pages: 432,
    timesRead: 32,
})

// One of the above books needs to be discarded. Call the appropriate method for that book to update the property. That way the crew can throw it into empty space to become debris.
console.log(newManual)
newManual.read()
console.log(newManual)

// 5. The other book has been checked out 5 times since you first created the object. Call the appropriate method to update the number of times the book has been checked out.
console.log(newNovel)
newNovel.read(5)
console.log(newNovel)