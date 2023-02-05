import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguretions} from 'webpack-dev-server';



export function buildDevServer(options: BuildOptions):DevServerConfiguretions {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true
    }
}