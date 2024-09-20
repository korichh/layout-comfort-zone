const srcFolder = './src';
const buildFolder = './docs';
const path = {
    srcFolder: srcFolder,
    buildFolder: buildFolder,
    src: {
        html: `${srcFolder}/html/*.html`,
        css: `${srcFolder}/scss/*.scss`,
        cssLibs: `${srcFolder}/scss/libs/*`,
        js: `${srcFolder}/js/*.js`,
        jsLibs: `${srcFolder}/js/libs/*`,
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,webp}`,
        resources: `${srcFolder}/resources/**/*`,
    },
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        img: `${buildFolder}/img/`,
        resources: `${buildFolder}/`,
    },
    watch: {
        html: `${srcFolder}/html/**/*`,
        css: `${srcFolder}/scss/**/*`,
        js: `${srcFolder}/js/**/*`,
        img: `${srcFolder}/img/**/*`,
        resources: `${srcFolder}/resources/**/*`,
    }
};

export default path;