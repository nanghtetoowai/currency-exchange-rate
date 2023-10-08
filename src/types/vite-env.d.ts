/// <reference types="vite/client" />

/** Use it for Environment Variables IntelliSense */
interface ImportMetaEnv {
	readonly VITE_API_URL: string;
	readonly VITE_API_ACCESS_KEY: string;
}

/** Don't touch this*/
interface ImportMeta {
	readonly env: ImportMetaEnv;
}
