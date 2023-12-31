
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const npm_package_devDependencies_vitest: string;
	export const USER: string;
	export const npm_package_dependencies_magic_string: string;
	export const npm_config_user_agent: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_node_execpath: string;
	export const WT_PROFILE_ID: string;
	export const SHLVL: string;
	export const npm_package_files_0: string;
	export const HOME: string;
	export const OLDPWD: string;
	export const LESS: string;
	export const npm_package_files_1: string;
	export const npm_package_devDependencies_sass: string;
	export const NVM_BIN: string;
	export const npm_package_files_2: string;
	export const npm_package_devDependencies_svelte_sequential_preprocessor: string;
	export const ZSH: string;
	export const LSCOLORS: string;
	export const NVM_INC: string;
	export const npm_package_files_3: string;
	export const PAGER: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_package_scripts_check: string;
	export const npm_package_exports___svelte: string;
	export const npm_config_engine_strict: string;
	export const npm_config_resolution_mode: string;
	export const WSL_DISTRO_NAME: string;
	export const npm_package_devDependencies_typescript: string;
	export const NVM_DIR: string;
	export const npm_package_types: string;
	export const WAYLAND_DISPLAY: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_devDependencies__playwright_test: string;
	export const npm_package_devDependencies_prettier: string;
	export const LOGNAME: string;
	export const npm_package_exports___default: string;
	export const npm_package_type: string;
	export const PULSE_SERVER: string;
	export const WSL_INTEROP: string;
	export const NAME: string;
	export const _: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_registry: string;
	export const TERM: string;
	export const npm_package_devDependencies_publint: string;
	export const npm_package_exports___import: string;
	export const npm_package_exports___package_json: string;
	export const npm_package_peerDependencies_svelte: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const npm_package_scripts_package: string;
	export const XDG_RUNTIME_DIR: string;
	export const WT_SESSION: string;
	export const npm_package_scripts_test_integration: string;
	export const npm_config_frozen_lockfile: string;
	export const DISPLAY: string;
	export const npm_package_scripts_test_unit: string;
	export const LANG: string;
	export const npm_package_devDependencies__sveltejs_package: string;
	export const LS_COLORS: string;
	export const npm_lifecycle_script: string;
	export const npm_package_scripts_test: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_package_scripts_package_watch: string;
	export const npm_lifecycle_event: string;
	export const NODE_PATH: string;
	export const npm_package_scripts_build: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_dependencies_uid: string;
	export const npm_package_scripts_prepublishOnly: string;
	export const npm_package_svelte: string;
	export const npm_package_devDependencies_doctrine: string;
	export const npm_package_scripts_format: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const NVM_CD_FLAGS: string;
	export const npm_package_exports___types: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_command: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const HOSTTYPE: string;
	export const WSL2_GUI_APPS_ENABLED: string;
	export const WSLENV: string;
	export const INIT_CWD: string;
	export const npm_package_devDependencies_svelte_preprocess_sass: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		npm_package_devDependencies_vitest: string;
		USER: string;
		npm_package_dependencies_magic_string: string;
		npm_config_user_agent: string;
		npm_package_devDependencies_vite: string;
		npm_node_execpath: string;
		WT_PROFILE_ID: string;
		SHLVL: string;
		npm_package_files_0: string;
		HOME: string;
		OLDPWD: string;
		LESS: string;
		npm_package_files_1: string;
		npm_package_devDependencies_sass: string;
		NVM_BIN: string;
		npm_package_files_2: string;
		npm_package_devDependencies_svelte_sequential_preprocessor: string;
		ZSH: string;
		LSCOLORS: string;
		NVM_INC: string;
		npm_package_files_3: string;
		PAGER: string;
		npm_package_devDependencies_svelte_check: string;
		npm_package_scripts_check: string;
		npm_package_exports___svelte: string;
		npm_config_engine_strict: string;
		npm_config_resolution_mode: string;
		WSL_DISTRO_NAME: string;
		npm_package_devDependencies_typescript: string;
		NVM_DIR: string;
		npm_package_types: string;
		WAYLAND_DISPLAY: string;
		npm_package_scripts_dev: string;
		npm_package_devDependencies__playwright_test: string;
		npm_package_devDependencies_prettier: string;
		LOGNAME: string;
		npm_package_exports___default: string;
		npm_package_type: string;
		PULSE_SERVER: string;
		WSL_INTEROP: string;
		NAME: string;
		_: string;
		npm_package_scripts_check_watch: string;
		npm_package_scripts_lint: string;
		npm_config_registry: string;
		TERM: string;
		npm_package_devDependencies_publint: string;
		npm_package_exports___import: string;
		npm_package_exports___package_json: string;
		npm_package_peerDependencies_svelte: string;
		npm_config_node_gyp: string;
		PATH: string;
		NODE: string;
		npm_package_name: string;
		npm_package_scripts_package: string;
		XDG_RUNTIME_DIR: string;
		WT_SESSION: string;
		npm_package_scripts_test_integration: string;
		npm_config_frozen_lockfile: string;
		DISPLAY: string;
		npm_package_scripts_test_unit: string;
		LANG: string;
		npm_package_devDependencies__sveltejs_package: string;
		LS_COLORS: string;
		npm_lifecycle_script: string;
		npm_package_scripts_test: string;
		npm_package_devDependencies__sveltejs_kit: string;
		SHELL: string;
		npm_package_version: string;
		npm_package_scripts_package_watch: string;
		npm_lifecycle_event: string;
		NODE_PATH: string;
		npm_package_scripts_build: string;
		npm_package_devDependencies_svelte: string;
		npm_package_dependencies_uid: string;
		npm_package_scripts_prepublishOnly: string;
		npm_package_svelte: string;
		npm_package_devDependencies_doctrine: string;
		npm_package_scripts_format: string;
		PWD: string;
		npm_execpath: string;
		NVM_CD_FLAGS: string;
		npm_package_exports___types: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_command: string;
		npm_package_scripts_preview: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		HOSTTYPE: string;
		WSL2_GUI_APPS_ENABLED: string;
		WSLENV: string;
		INIT_CWD: string;
		npm_package_devDependencies_svelte_preprocess_sass: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
