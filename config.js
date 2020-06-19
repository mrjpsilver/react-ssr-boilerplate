const { ENVIROMENT, URL, PORT } = process.env

export default {
  environment: ENVIROMENT || 'dev',
  url: URL || 'localhost',
  port: PORT || 8080
}
