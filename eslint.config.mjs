import ebayConfig from 'eslint-config-ebay';
import eslintConfigPrettier from "eslint-config-prettier";

export default [
    {
        "plugins": {
            ebayConfig,
            eslintConfigPrettier,
        },
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: "module",
        }
    }
];
