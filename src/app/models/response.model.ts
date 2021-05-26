import { Armor, Consumable, Misc, Weapon } from ".";


export interface Response {
    code: number,
    data: Weapon | Location | Misc  | Armor | Consumable | Array<Weapon | Location | Misc  | Armor | Consumable>,
    message: string,
}