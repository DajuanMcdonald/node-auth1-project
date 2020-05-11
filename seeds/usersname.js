
exports.seed = function(knex) {
  
  return knex('users').del()
    .then(function () {
      
      return knex('users').insert([
        {username: 'soccer_mom', password: 'auth3nt1c4ti0n'},
        {username: 'baseball_dad', password: 'just1nTim3'},
        {username: 'baby_boy', password: 'bottleTim3'}
      ]);
    });
};
