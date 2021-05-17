import { Item } from ".";
export interface Location extends Item{
    areaType: string;
    areaCode: number;
    itemCode: number;
    dropPoint: string;
    dropCount: number
}