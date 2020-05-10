const db = require('../data/db-config');

module.exports = {
    find,
    findBy,
    add,
    findById,
}

//find default for all users
function find() {
    return db('users').select('id', 'username', 'password');
};

//findBy search filter parameter
function findBy(param) {
    return db('users').select('id', 'username', 'password')
        .where(param)
};


//add users
function add(user) {
    return db('users')
        .insert(user, 'id')
        .then(ids => { const [id] = ids;
        return findById(id)
    })
};

//find user by Id
function findById(id) {
    return db('users')
        .where({id})
        .select('id', 'username')
        .first()
};
