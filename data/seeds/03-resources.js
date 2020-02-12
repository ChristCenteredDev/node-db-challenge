exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {resource_name: 'README1', description: 'project docs'},
        {resource_name: 'README2', description: 'project docs'},
        {resource_name: 'README3', description: 'project docs'}
      ]);
    });
};