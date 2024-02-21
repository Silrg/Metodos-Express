const express = require("express");
const app = express();
app.use(express.static("public"));

// INSTRUCCIONES NUEVAS PARA HACER POSIBLE EL USO DE JSON
app.use(express.json());
// INSTRUCCIONES NUEVAS PARA PASAR DATOS POR BODY
app.use(express.urlencoded({ extended: false }));

const especies = require("./array");

app.get("/especies", (req, res) => {
  res.send(especies);
});

app.post("/especies", (req, res) => {
  let nuevoPersonaje = {
    nombre: req.body.nombre,
    especie: req.body.especie,
    peso: req.body.peso,
    imagen: req.body.imagen,
  };

  especies.push(nuevoPersonaje);
  res.send(especies);
});

app.listen(3000);
