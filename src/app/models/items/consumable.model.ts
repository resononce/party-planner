import { Item } from '.';



export interface Consumable extends Item {
    itemType: string;
    consumableType: string;
    consumableTag: string;
    itemGrade: string;
    craftAnimTrigger: string;
    stackable: number;
    initialCount: number;
    exclusiveProducer: number;
    heal: number;
    hpRecover: number;
    spRecover: number
}