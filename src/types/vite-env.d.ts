/// <reference types="vite/client" />

/** Use it for Environment Variables IntelliSense */
interface ImportMetaEnv {
	readonly VITE_API_URL: string;
	// more env variables...
}

/** Don't touch this*/
interface ImportMeta {
	readonly env: ImportMetaEnv;
}
