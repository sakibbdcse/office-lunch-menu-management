const Menu = require("../models/Menu");

exports.addMenuOption = async (req, res) => {
  const { date, option } = req.body;
  try {
    const menu = await Menu.create({ date, option });
    res.status(201).json(menu);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMenuByDate = async (req, res) => {
  const { date } = req.params;
  try {
    const menu = await Menu.findAll({ where: { date } });
    res.status(200).json(menu);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
