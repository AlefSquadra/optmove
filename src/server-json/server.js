const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Rotas customizadas para SelecaoZonas
server.get("/SelecaoZonas/ZonePlanner", (req, res) => {
  const db = router.db;
  res.json(db.get("select-zone-planner").value());
});

server.get("/SelecaoZonas/ProfilePlanne", (req, res) => {
  const db = router.db;
  res.json(db.get("select-profile-planner").value());
});

server.get("/SelecaoZonas/TransferProfile", (req, res) => {
  const db = router.db;
  res.json(db.get("select-list-transfer-profile").value());
});

// Rotas customizadas para priorizarDestino
server.get("/priorizarDestino/patios", (req, res) => {
  const db = router.db;
  res.json(db.get("patios").value());
});

server.get("/priorizarDestino/produtos", (req, res) => {
  const db = router.db;
  res.json(db.get("produtos").value());
});

server.get("/priorizarDestino/terminais", (req, res) => {
  const db = router.db;
  res.json(db.get("terminais").value());
});

server.get("/priorizarDestino/prioridades", (req, res) => {
  const db = router.db;
  // Suporte a query ?ordered=true
  const ordered = req.query.ordered === "true";
  let prioridades = db.get("prioridades").value();
  if (ordered) {
    prioridades = prioridades.slice().sort((a, b) => a.id.localeCompare(b.id));
  }
  res.json(prioridades);
});

// Post endpoints para refresh-memory, refresh-db e save prioridades
server.post("/priorizarDestino/prioridades/refresh-memory", (req, res) => {
  res.status(200).json({ message: "Memória refresh iniciada" });
});

server.post("/priorizarDestino/prioridades/refresh-db", (req, res) => {
  res.status(200).json({ message: "Banco de dados refresh iniciado" });
});

server.post("/priorizarDestino/prioridades", (req, res) => {
  const db = router.db;
  const prioridades = req.body;
  db.set("prioridades", prioridades).write();
  res.status(200).json({ message: "Prioridades salvas com sucesso" });
});

// Usar as rotas padrão do json-server para outras endpoints
server.use(router);

server.listen(8080, () => {
  console.log("JSON Server rodando na porta 8080");
});
