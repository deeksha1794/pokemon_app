export interface PokemonData{
         _id ?: string,
         pkdx_id ?: number,
         national_id ?: number,
         name :  string,
        __v?: number,
        image_url?: string,
        description?:string,
        art_url:string,
        types:string [],
        evolutions?: EvolutionData[],
        base: BaseData
}

export interface EvolutionData{
    level: number;
    method: string;
    to: string;
    _id: string;
}

export interface BaseData{
    HP: number,
    Attack: number,
    Defense: number,
    Sp_Attack?: number,
    Sp_Defense?: number,
    Speed: number
}