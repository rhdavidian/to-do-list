export default class Project {
    // constructor (title = 'No Title', description, due, priority, duration, notes, category) {
    //     this.title = title,
    //     this.description = description,
    //     this.due = due,
    //     this.priority = priority,
    //     this.duration = duration,
    //     this.notes = notes,
    //     this.category = category
    // }

    constructor(title, notes, id) {
        this.title = title,
        this.notes = notes,
        this.id = id   
    };

    displayTitle() {
        return this.title;
    }
};
