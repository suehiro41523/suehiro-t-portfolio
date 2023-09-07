declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        readonly API_KEY?: string;
      }
    }
  }
}
