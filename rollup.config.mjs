import TypescriptPlugin from "@rollup/plugin-typescript";
import CommonjsPlugin from "@rollup/plugin-commonjs";
import NodeResolvePlugin from "@rollup/plugin-node-resolve";
import { cleandir as CleandirPlugin } from "rollup-plugin-cleandir";
import DtsPlugin from "rollup-plugin-dts";
import { terser as TerserPlugin } from "rollup-plugin-terser";

const PLUGINS = [
	NodeResolvePlugin(),
	CommonjsPlugin(),
	TypescriptPlugin(),
	TerserPlugin({
		compress: { drop_console: false },
		format: { comments: false }
	}),
	CleandirPlugin("dist")
];

export default {
	input: "src/index.ts",
	output: {
		file: "dist/index.js",
		format: "cjs"
	},
  plugins : PLUGINS
};
