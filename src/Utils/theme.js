import { createMuiTheme } from '@material-ui/core/styles';
import 'fontsource-roboto';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#ff8457',
            main: '#d8532b',
            dark: '#a02000',
            contrastText: '#fff',
        },
        secondary: {
            light: '#737186',
            main: '#474659',
            dark: '#1f1f30',
            contrastText: '#000',
        }, background: {
            main: '#fff'
        }, text: {
            primary: '#474659'
        }
    }, typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    text: {
        primary: '#474659',
        secondary: '#d8532b',
        disabled: '#fff',
        hint: '#111'
    }
});

export default theme;