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

    constructor(title, notes, duration) {
        this.title = title,
        this.notes = notes,
        this.duration = duration + ' hours',
        this.todos = [] 
    };

    displayTitle() {
        return this.title;
    }
};
