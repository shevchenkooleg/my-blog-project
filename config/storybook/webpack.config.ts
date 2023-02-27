import path from 'path';
import { type BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loader/buildCssLoader";
import { type RuleSetRule } from 'webpack';
import type webpack from 'webpack';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve.modules.push(paths.src)
    config.resolve.extensions.push('.ts', '.tsx')

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        // eslint-disable-next-line
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule
    })
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    })

    config.module.rules.push(buildCssLoader(true))

    return config
}
