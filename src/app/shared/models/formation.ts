export class Formation {

    public id?: number;
    public title: string;
    public description?: string;


mapToFormation(model) {
    this.id = model.id;
    this.title = model.title;
    this.description = model.description;
}


constructor() {

}

}

