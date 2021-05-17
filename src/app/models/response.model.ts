import { Armor } from "./armor.model";
import { Misc } from "./misc.model";
import { Weapon } from "./weapon.model";

export interface Response {
    code: number,
    data: Weapon | Location | Misc  | Armor | Array<Weapon | Location | Misc  | Armor>,
    message: string,
}