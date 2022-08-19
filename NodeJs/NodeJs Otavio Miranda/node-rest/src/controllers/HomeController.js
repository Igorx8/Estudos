class HomeController {
  async index(req, res) {
    res.json({ ola: "homepage" });
  }
}

export default new HomeController();
