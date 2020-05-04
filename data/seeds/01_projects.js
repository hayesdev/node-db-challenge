exports.seed = async function (knex) {
  await knex("projects").insert([
    { project_name: "Build an API" },
    { project_name: "Burn a bridge" },
  ]);
};
