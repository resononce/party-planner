import { Armor } from "./items/armor.model";
import { Misc } from "./items";
import { Weapon } from "./items";
import { Location } from './items';

export interface Response {
    code: number,
    data: Weapon | Location | Misc  | Armor | Array<Weapon | Location | Misc  | Armor>,
    message: string,
}