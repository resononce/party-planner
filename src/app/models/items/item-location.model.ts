import { Item } from "./item.interface";

export interface ItemLocation{
    code: number;
    name: string;
    areaType: string;
    areaCode: number;
    itemCode: number;
    dropPoint: string;
    dropCount: number
}