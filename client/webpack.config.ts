import { getWebpackConfig } from './config/build/getWebpackConfig';
import { EnvVars } from './config/build/types';
const path = require('path');

export default (env: EnvVars) => {
  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.join(__dirname, 'dist'),
  };
  const port = env.port ?? 3030;
  const mode = env.mode ?? 'development';
  const analyze = env.analyze ?? false;

  return getWebpackConfig({ port, paths, mode, analyze });
};
