export default {
  jwtSecret: process.env.JWT_SECRET || 'tokensecreto',
  DB: {
    URI: process.env.MONGODB_URI || 'mongodb+srv://Francescorjm:Estefany%2E1008@moviles.2vmbff6.mongodb.net/?retryWrites=true&w=majority',
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD
  }
}