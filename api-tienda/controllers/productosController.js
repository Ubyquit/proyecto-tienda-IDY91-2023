const connection = require("../database"); // Importa la conexión a la base de datos desde un archivo separado

// Controlador para obtener los productos
const obtenerProductos = (req, res) => {
  connection.query(
    "SELECT id_producto,producto.nombre,precio,fabricante.nombre AS fabricante FROM producto INNER JOIN fabricante ON producto.id_fabricante_id = fabricante.id_fabricante",
    (error, results) => {
      if (error) {
        console.error("Error al obtener los productos", error);
        res.status(500).json({ error: "Error al obtener los productos" });
      } else {
        res.json(results);
      }
    }
  );
};

// Controlador para agregar un nuevo Producto
const agregarProducto = (req, res) => {
  const producto = req.body;
  connection.query("INSERT INTO producto SET ?", producto, (error, results) => {
    if (error) {
      console.error("Error al agregar el producto", error);
      res.status(500).json({ error: "Error al agregar el producto" });
    } else {
      res.json({ message: "Producto agregado correctamente" });
    }
  });
};

// Controlador para eliminar un Producto
const eliminarProducto = (req, res) => {
  const codigoProducto = req.params.id_producto;
  connection.query(
    "DELETE FROM producto WHERE id_producto = ?", codigoProducto, (error, results) => {
      if (error) {
        console.error("Error al eliminar el producto", error);
        res.status(500).json({ error: "Error al eliminar el producto" });
      } else {
        res.json({ message: "Producto eliminado correctamente" });
      }
    }
  );
};

// Controlador para actualizar un producto
const actualizarProducto = (req, res) => {
  const idProducto = req.params.id_producto;
  const nuevoProducto = req.body;

  connection.query(
    "UPDATE producto SET ? WHERE id_producto = ?",
    [nuevoProducto, idProducto],
    (error, results) => {
      if (error) {
        console.error("Error al actualizar el producto", error);
        res.status(500).json({ error: "Error al actualizar el producto" });
      } else {
        res.json({ message: "Producto actualizado correctamente" });
      }
    }
  );
};

module.exports = {
  obtenerProductos,
  agregarProducto,
  eliminarProducto,
  actualizarProducto,
};
