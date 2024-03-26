import { validationResult } from "express-validator";
import Producto from "../database/models/producto.js";

export const listarProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      mensaje: "Los productos no se pudieron obtener",
    });
  }
};

export const crearProducto = async (req, res) => {
  try {
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();

    res.status(201).json({
      mensaje: "El producto fue creado correctamente",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      mensaje: "El producto no pudo ser dado de alta",
    });
  }
};

export const obtenerProducto = async (req, res) => {
  try {
    const productoBuscado = await Producto.findById(req.params.id);

    res.status(200).json(productoBuscado);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      mensaje: "El producto no pudo ser encontrado",
    });
  }
};

export const editarProducto = async (req, res) => {
  try {
    const productoBuscado = await Producto.findById(req.params.id);

    if (!productoBuscado)
      return res
        .status(404)
        .json({ mensaje: "El producto no fue encontrado!" });

    const productoEditado = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    res
      .status(200)
      .json({
        mensaje: "El producto fue editado correctamente",
        productoEditado,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ha ocurrido un error en el servidor!",
    });
  }
};

export const borrarProducto = async (req, res) => {
  try {
    const productoBuscado = await Producto.findById(req.params.id);

    if (!productoBuscado)
      return res
        .status(404)
        .json({ mensaje: "El producto no fue encontrado!" });

    await Producto.findByIdAndDelete(req.params.id);

    res.status(200).json({ mensaje: "El producto fue borrado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ha ocurrido un error en el servidor!",
    });
  }
};
