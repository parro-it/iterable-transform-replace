export default {
	entry: 'main.js',
	dest: 'index.js',
	format: 'cjs',
	external: ['curry'] // <-- suppresses the warning
};
