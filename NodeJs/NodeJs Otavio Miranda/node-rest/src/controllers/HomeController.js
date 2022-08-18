import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "João",
      sobrenome: "Silva",
      email: "a@a.com",
      idade: 20,
      peso: 80.5,
      altura: 1.8,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
