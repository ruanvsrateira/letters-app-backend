export class Letter {
    public id?: string ;
    public name!: string;
    public author!: string;
    public letter!: string;

    constructor(props: Omit<Letter, 'id'>) {
        Object.assign(this, props)
    };
}