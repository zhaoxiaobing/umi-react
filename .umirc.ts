import {IConfig} from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
    treeShaking: true,
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
            antd: true,
            dva: true,
            dynamicImport: false,
            title: 'umi-react',
            dll: false,
            routes: {
                exclude: [
                    /components\//,
                    /model\//,
                ],
            },
        }],
    ],
    disableCSSModules: true
}

export default config;
