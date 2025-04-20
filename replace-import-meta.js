export function replaceImportMetaEnvDev() {
	return {
		name: 'replace-import-meta-env-dev',
		transform(code, id) {
			// Only process JS/TS files
			if (!id.endsWith('.js') && !id.endsWith('.ts')) return;

			const pattern = /import\.meta\.env\.DEV/g;

			if (pattern.test(code)) {
				const transformed = code.replace(pattern, 'false');
				return {
					code: transformed,
					map: null,
				};
			}
		},
	};
}
