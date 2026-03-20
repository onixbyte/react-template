/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_REDUX_STORAGE: "local" | "session"
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}