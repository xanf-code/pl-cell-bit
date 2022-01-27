/** @type {import('next').NextConfig} */
const intercept = require('intercept-stdout');

const withTM = require("next-transpile-modules")([
    "@fullcalendar/common",
    "@babel/preset-react",
    "@fullcalendar/common",
    "@fullcalendar/daygrid",
    "@fullcalendar/interaction",
    "@fullcalendar/react",
    "@fullcalendar/timegrid",
]);


// safely ignore recoil stdout warning messages
function interceptStdout(text) {
    if (text.includes('Duplicate atom key')) {
        return '';
    }
    return text;
}

// Intercept in dev and prod
intercept(interceptStdout);

module.exports = withTM({
    reactStrictMode: true,
    images: {
        domains: ['lh3.googleusercontent.com'],
    },
});