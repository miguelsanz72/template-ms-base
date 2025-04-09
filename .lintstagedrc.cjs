module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'prettier --write',
    'eslint --fix --config eslint.config.cjs',
  ],
  '*.{json,md,yml,yaml}': ['prettier --write'],
};
