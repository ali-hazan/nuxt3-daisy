import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import path from "path";

export default {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    }
  ],
  "framework": {
    "name": "@storybook/vue3-vite",
    "options": {}
  },
  "docs": {
    "autodocs": "tag"
  },
  async viteFinal(config, { configType }) {
    config.plugins = config.plugins ?? [];
    config.plugins.push(
      AutoImport({
        imports: ["vue"],
        dts: ".storybook/auto-imports.d.ts",
      })
    );
    config.plugins.push(
      Components({
        extensions: ["vue"],
        dirs: ["components"],
        global: true,
        directoryAsNamespace: true,
        // temp fix change while refactor
        globalNamespaces: [],
        include: [/\.vue$/, /\.vue\?vue/],
        dts: ".storybook/components.d.ts",
      })
    );
    return {
      ...config,
      define: {
        'process.env.NODE_DEBUG': false,
      },
      resolve: {
        alias: {
          "@": `${path.resolve(__dirname, "..")}/`,
          "@/": `${path.resolve(__dirname, "..")}/`,
        },
      },
    };
  },
};