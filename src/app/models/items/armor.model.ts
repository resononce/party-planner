import { Item } from ".";


export interface Armor extends Item{
     itemType : string;
     armorType : string;
     itemGrade : string;
     craftAnimTrigger : string;
     stackable : number;
     initialCount : number;
     attackPower : number;
     defense : number;
     maxHp : number;
     maxSp : number;
     hpRegenRatio : number;
     hpRegen : number;
     spRegenRatio : number;
     spRegen : number;
     attackSpeedRatio : number;
     criticalStrikeChance : number;
     criticalStrikeDamage : number;
     preventCriticalStrikeDamaged : number;
     cooldownReduction : number;
     cooldownLimit : number;
     lifeSteal : number;
     moveSpeed : number;
     sightRange : number;
     outOfCombatMoveSpeed : number;
     attackRange : number;
     increaseBasicAttackDamage : number;
     preventBasicAttackDamaged : number;
     increaseSkillDamage : number;
     preventSkillDamaged : number;
     increaseSkillDamageRatio : number;
     preventSkillDamagedRatio : number;
     penetrationDefense : number;
     penetrationDefenseRatio : number;
     fullDecreaseRecoveryToBasicAttackMelee : number;
     halfDecreaseRecoveryToBasicAttackMelee : number;
     fullDecreaseRecoveryToSkillMelee : number;
     halfDecreaseRecoveryToSkillMelee : number;
     fullDecreaseRecoveryToBasicAttackRange : number;
     halfDecreaseRecoveryToBasicAttackRange : number;
     fullDecreaseRecoveryToSkillRange : number;
     halfDecreaseRecoveryToSkillRange : number
}