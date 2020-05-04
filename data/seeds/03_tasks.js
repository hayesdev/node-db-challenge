exports.seed = async function (knex) {
  await knex("tasks").insert([
    {
      project_id: 1,
      description: "Start by planning",
      notes: "This is the most important part!",
    },
    {
      project_id: 1,
      description: "Code your ass off!",
      notes: "JUST DOOO ITTTT!!!",
    },
  ]);
};
