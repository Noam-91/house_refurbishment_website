interface ImportMetaEnv {
    VITE_SERVER_API: string
    // Add other env variables you're using
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
