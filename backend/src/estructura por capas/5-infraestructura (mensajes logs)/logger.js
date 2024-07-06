// consiste en generar Logs Mas especificos que se muestran en consola

class Logger {
    log(message) {
      console.log(`[LOG] ${message}`);
    }
  }
  
  export const logger = new Logger();