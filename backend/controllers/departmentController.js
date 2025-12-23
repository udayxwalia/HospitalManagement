const getDepartments = (req, res) => {
  res.json([
    { name: "Cardiology" },
    { name: "Dermatology" },
    { name: "Neurology" }
  ]);
};

module.exports = { getDepartments };
