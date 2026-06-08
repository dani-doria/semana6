const express = require('express');
const app = express();

app.use(express.json());

// --------------------
// RUTA /registro (POST)
// --------------------
app.post('/registro', (req, res) => {
  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    mensaje: mensaje
  });
});

// ----------------------
// RUTA /incidencia (POST)
// ----------------------
app.post('/incidencia', (req, res) => {
  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });
});

// ----------------------
// RUTA /reportes (GET)
// ----------------------
app.get('/reportes', (req, res) => {
  res.json({
    mensaje: "Ruta reportes funcionando correctamente",
    estado: "OK"
  });
});

// ----------------------
// SERVIDOR
// ----------------------
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});