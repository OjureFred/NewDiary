export class Entry {

    showDetails: boolean;

    constructor(public id: number, public name: string, public description: string, public days: number,
        public date: Date, public status: string) {
        this.showDetails = false;
    }
}
