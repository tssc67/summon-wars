const cards = [
    require('./support/sup1'),
    require('./support/sup2'),
    require('./support/sup3'),
    require('./support/sup4'),
    require('./support/sup5'),
    require('./support/sup6'),
    require('./support/sup7'),
    require('./support/sup8'),
];
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