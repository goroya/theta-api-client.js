interface ILogLevel {
  TRACE: 0;
  DEBUG: 1;
  INFO: 2;
  WARN: 3;
  ERROR: 4;
  SILENT: 5;
}
type LogLevelNumbers = ILogLevel[keyof ILogLevel];
type LogLevelDesc =
  | LogLevelNumbers
  | 'trace'
  | 'debug'
  | 'info'
  | 'warn'
  | 'error'
  | 'silent'
  | keyof ILogLevel;

export default class Logger {
  get level(): LogLevelDesc {
    return this.pLevel;
  }
  set level(level: LogLevelDesc) {
    this.pLevel = level;
  }
  public static levels = {
    TRACE: 0,
    DEBUG: 1,
    INFO: 2,
    WARN: 3,
    ERROR: 4,
    SILENT: 5
  };
  private pLevel: LogLevelDesc;
  constructor(level: LogLevelDesc = 5) {
    this.pLevel = level;
  }
  public trace(...msg: any[]): void {
    if (Logger.levels.TRACE <= this.level) {
      return;
    }
    // tslint:disable-next-line: no-console
    console.trace(msg);
  }
  public debug(...msg: any[]): void {
    if (Logger.levels.DEBUG <= this.level) {
      return;
    }
    // tslint:disable-next-line: no-console
    console.log(msg);
  }
  public info(...msg: any[]): void {
    if (Logger.levels.INFO <= this.level) {
      return;
    }
    // tslint:disable-next-line: no-console
    console.info(msg);
  }
  public warn(...msg: any[]): void {
    if (Logger.levels.WARN <= this.level) {
      return;
    }
    // tslint:disable-next-line: no-console
    console.warn(msg);
  }
  public error(...msg: any[]): void {
    if (Logger.levels.ERROR <= this.level) {
      return;
    }
    // tslint:disable-next-line: no-console
    console.error(msg);
  }
}
