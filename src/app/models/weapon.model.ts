

export interface Weapon {
    code: number;
    name: string;
    itemType: string;
    weaponType: string;
    itemGrade: string;
    craftAnimTrigger: string;
    stackable: number;
    initialCount: number;
    makeMaterial1 : number;
    makeMaterial2 : number;
    consumable : boolean;
    attackPower : number;
    defense : number;
    maxHp : number;
    hpRegenRatio : number;
    hpRegen : number;
    spRegenRatio : number;
    spRegen : number;
    attackSpeedRatio : number;
    criticalStrikeChance : number;
    criticalStrikeDamage : number;
    cooldownReduction : number;
    cooldownLimit : number;
    lifeSteal : number;
    moveSpeed : number;
    moveSpeedOutOfCombat : number;
    sightRange : number;
    attackRange : number;
    increaseBasicAttackDamage : number;
    increaseSkillDamage : number;
    increaseSkillDamageRatio : number;
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