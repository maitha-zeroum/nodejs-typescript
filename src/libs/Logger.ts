export class Logger {
  public static error(code: string, message: string, error?: any): void {
    if (error) {
      console.error(`${code}: ${message}`, error)
    } else {
      console.error(`${code}: ${message}`)
    }
  }

  public static info(code: string, message: string, data?: any): void {
    if (data) {
      console.info(`${code}: ${message}`, data)
    } else {
      console.info(`${code}: ${message}`)
    }
  }
}
