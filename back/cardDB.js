const monsterCardGroups = [
    require('./monsters/angel').allClass,
    require('./monsters/animal').allClass,
    require('./monsters/baron').allClass,
    require('./monsters/demon').allClass,
    require('./monsters/gypsy').allClass,
    require('./monsters/human').allClass,
    require('./monsters/kami').allClass,
    require('./monsters/youkai').allClass
];
const cards = [
    ...[].concat(...monsterCardGroups)
].map(c => {
    return new c();
});

exports.getSupportCards = () => {
    return [];
    return cards.filter(card => card instanceof SupportCard)
}

exports.getMonsterCardGroups = () => {
    return monsterCardGroups;
}

exports.getCardByCode = (code) => {
    let ret = null;
    cards.forEach(c => {
       if(c.code == code){
           ret = c;
           return;
       }
    });
    return ret;
}