exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {description: 'Do HTML', notes: 'HTML5', completed: false, project_id: 1},
        {description: 'Add CSS', notes: 'Warm color scheme', completed: false, project_id: 1},
        {description: 'Use React', notes: 'Hooks', completed: false, project_id: 2},
        {description: 'Add routes', notes: 'none', completed: false, project_id: 2},
        {description: 'design api', notes: 'none', completed: false, project_id: 3},//api
        {description: 'Configure api endpoints', notes: 'follow requirements', completed: false, project_id: 3}
      ]);
    });
};