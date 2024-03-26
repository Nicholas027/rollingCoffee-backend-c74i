import User from "../database/models/user.js";

export const createUser = async (req, res) => {
    const { email, password } = req.body;
    try {
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Ya existe un usuario con este correo electrónico' });
      }
  
      const newUser = new User({ email, password });
  
      await newUser.save();
  
      res.status(201).json({ message: 'Usuario creado exitosamente' });
    } catch (error) {
      console.error('Error al crear usuario:', error);
      res.status(500).json({ message: 'Hubo un error al crear el usuario' });
    }
  };