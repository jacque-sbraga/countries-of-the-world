import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        name: string;
        colors: {
            text: string,
            input: string,
            background: string,
            elements: string,
        }
    }
}
