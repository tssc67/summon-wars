const cards = [];
const monsterCardGroups = [
    
]
    
exports.getSupportCards = () => {
    return cards.filter(card => card instanceof SupportCard)
}

exports.getMonsterCardGroups = () => {
    return monsterCardGroups;
}