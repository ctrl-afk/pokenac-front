export class Chain{
    public id: number;
    public name: String;
    public evolves_to: Chain[]

    getId(): number {
        return this.id
    }
    getEvos(): Chain[] {
        return this.evolves_to
    }
}