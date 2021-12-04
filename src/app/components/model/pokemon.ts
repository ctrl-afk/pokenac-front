export class Pokemon {
    public id: number;
    public name: String ;
    public types: [String, String?] ;
    public sprites: {
        front_default: any;
        back_default: any;
        front_default_female: any;
        back_default_female: any;
        front_shiny: any;
        back_shiny: any;
        front_shiny_female: any;
        back_shiny_female: any;
    } 
}