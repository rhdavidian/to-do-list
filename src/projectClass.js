export default class Project {
    // constructor (title = 'No Title', description, due, priority, duration, notes, category) {
    //     this.description = description,
    //     this.due = due,
    //     this.priority = priority,
    //     this.category = category
    // }

    constructor(title, notes, duration) {
        this.title = title,
        this.notes = notes,
        this.duration = duration,
        this.todos = [],
        this.completed = []
    };
};
