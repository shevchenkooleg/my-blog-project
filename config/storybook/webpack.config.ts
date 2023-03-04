import path from "path";
import { type BuildPaths } from "../build/types/config";
import { BuildCssLoader } from "../build/loaders/buildCssLoader";
import { DefinePlugin, type RuleSetRule } from "webpack";
import type webpack from "webpack";


export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }

    config.resolve.modules = [paths.src, 'node_modules']
    // config.resolve.modules.push(paths.src)

    config.resolve.extensions.push('.ts', '.tsx')

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        // eslint-disable-next-line
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
        }
        return rule
    })
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    })
    config.module.rules.push(BuildCssLoader(true))
    config.plugins.push(new DefinePlugin({
        __IS_DEV__: true
    }))

    return config;
}
