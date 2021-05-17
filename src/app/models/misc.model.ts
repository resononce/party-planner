import { Item } from ".";

export interface Misc extends Item{
    itemType :  string;
    miscItemType : string;
    itemGrade : string;
    craftAnimTrigger : string;
    stackable : number;
    initialCount : number;
    exclusiveProducer : number;
    makeMaterial1 : number;
    makeMaterial2 : number
}