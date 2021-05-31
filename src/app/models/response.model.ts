import { Armor, Consumable, Misc, Weapon, ItemLocation } from ".";


export interface Response {
    code: number,
    data: Weapon | ItemLocation | Misc  | Armor | Consumable | Array<Weapon | ItemLocation | Misc  | Armor | Consumable>,
    message: string,
}