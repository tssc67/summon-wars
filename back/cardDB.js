const cards = [];
const monsterCardGroups = [
    require('./monsters/angel').allClass,
    require('./monsters/animal').allClass,
    require('./monsters/baron').allClass,
    require('./monsters/demon').allClass,
    require('./monsters/gypsy').allClass,
    require('./monsters/human').allClass,
    require('./monsters/kami').allClass,
    require('./monsters/youkai').allClass
    
]
    
exports.getSupportCards = () => {
    return cards.filter(card => card instanceof SupportCard)
}

exports.getMonsterCardGroups = () => {
    return monsterCardGroups;
}