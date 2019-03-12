import EventEmitter from 'eventemitter3';
import Logger from '../common/logger';

export default abstract class ThetaClientBase extends EventEmitter {
  private logger: Logger = new Logger();
}
