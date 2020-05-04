exports.seed = async function (knex) {
  await knex("resources").insert([
    { resource_name: "laptop", description: "It goes on top of your lap" },
    { resource_name: "Internet connection", description: "C'mon man" },
  ]);
};
