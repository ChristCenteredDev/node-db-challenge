exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {project_name: 'Static Webpage', description: 'sprint 1', completed:false},
        {project_name: 'SPA', description: 'sprint 2', completed:false},
        {project_name: 'Backend App', description: 'sprint 3', completed:false}
      ]);
    });
};