exports.up = async function (knex) {
  await knex.schema.createTable("projects", (table) => {
    table.increments("id");
    table.text("project_name").notNull().unique();
    table.text("description");
    table.boolean("completed").notNull().defaultTo(false);
  });

  await knex.schema.createTable("resources", (table) => {
    table.increments("id");
    table.text("resource_name").notNull().unique();
    table.text("description");
  });

  await knex.schema.createTable("tasks", (table) => {
    table.increments("id");
    table.integer("project_id").references("id").inTable("projects");
    table.text("description").notNull();
    table.text("notes");
    table.boolean("completed").defaultTo(false).notNull();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("projects");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("tasks");
};
