import mainConfig from '../config/main';
import rollbarSrc from './rollbarSrc';

export let Rollbar = {};
if (mainConfig.env !== 'development' && mainConfig.rollbar.accessToken) {
  Rollbar = rollbarSrc.init(mainConfig.rollbar);
}

export default Rollbar;
