import User from "../models/User";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(({ message }) => message),
      });
    }
  }

  //Index
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(({ message }) => message),
      });
    }
  }

  //Show
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({ errors: ["Usuário não encontrado"] });
      }
      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(({ message }) => message),
      });
    }
  }

  //Update
  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ["Id não enviado"] });

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({ errors: ["Usuário não encontrado"] });
      }

      const userUpdated = await user.update(req.body);

      return res.json(userUpdated);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(({ message }) => message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ["Id não enviado"] });

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({ errors: ["Usuário não encontrado"] });
      }

      await user.destroy();

      return res.json({ sucesso: "Usuário excluido com sucesso" });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(({ message }) => message),
      });
    }
  }
}

export default new UserController();
