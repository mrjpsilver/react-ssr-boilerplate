const { ENVIROMENT, URL, PORT } = process.env

export default {
  environment: ENVIROMENT || 'dev',
  host: URL || 'localhost',
  port: PORT || 8080
}
