const cards = [];
const monsterCardGroups = [
    require('./monsters/dragon').allClass,
    
]

exports.getSupportCards = () => {
    return cards.filter(card => card instanceof SupportCard)
}

exports.getMonsterCardGroups = () => {
    return monsterCardGroups;
}