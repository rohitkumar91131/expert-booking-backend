const Expert = require("../models/Expert")

exports.getExperts = async (req, res) => {
  const { page = 1, category, search } = req.query
  const query = {}
  if (category) query.category = category
  if (search) query.name = { $regex: search, $options: "i" }

  const experts = await Expert.find(query)
    .skip((page - 1) * 5)
    .limit(5)

  res.json({ data: experts })
}

exports.getExpertById = async (req, res) => {
  const expert = await Expert.findById(req.params.id)
  res.json(expert)
}