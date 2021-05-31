import { Item } from "./item.interface";

export interface ItemLocation extends Item{
    areaType: string;
    areaCode: number;
    itemCode: number;
    dropPoint: string;
    dropCount: number
}