export type EnvVars = { port?: number; mode?: BuildMode; analyze?: boolean };

export type BuildPaths = {
  entry: string;
  html: string;
  output: string;
};

export type BuildMode = 'development' | 'production';

export type BuildOptions = {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
  analyze: boolean;
};
