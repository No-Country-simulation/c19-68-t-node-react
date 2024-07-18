// consiste en generar Logs Mas especificos que se muestran en consola
// se suele utilizar para crear logs.txt o .json que muestran los errores por parte del servidor

class Logger {
    log(message) {
      console.log(`[LOG] ${message}`);
    }
  }
  
  export const logger = new Logger();