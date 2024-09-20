import browserSync from "browser-sync";
import del from "del";
import gulp from "gulp";
import fileInclude from "gulp-file-include";
import autoprefixer from "gulp-autoprefixer";
import beautify from "gulp-beautify";
import gulpZip from "gulp-zip";
import nodePath from "path";
import path from "./path.js";
import gulpSass from "gulp-sass";
import dartSass from "sass";
const sass = gulpSass(dartSass);

const clean = () => {
    return del(path.buildFolder);
}

const css = () => {
    return gulp.src(path.src.css)
        .pipe(sass())
        .pipe(autoprefixer({ cascade: false, grid: true, overrideBrowserslist: ["last 5 versions"] }))
        .pipe(beautify.css())
        .pipe(gulp.dest(path.build.css))
        .pipe(browserSync.stream());
}

const cssLibs = () => {
    return gulp.src(path.src.cssLibs)
        .pipe(gulp.dest(path.build.css))
        .pipe(browserSync.stream());
}

const html = () => {
    return gulp.src(path.src.html)
        .pipe(fileInclude({ prefix: '@', basepath: '@file' }))
        .pipe(beautify.html())
        .pipe(gulp.dest(path.build.html))
        .pipe(browserSync.stream());
}

const img = () => {
    return gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img))
        .pipe(browserSync.stream());
}

const js = () => {
    return gulp.src(path.src.js)
        .pipe(beautify.js())
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.stream());
}

const jsLibs = () => {
    return gulp.src(path.src.jsLibs)
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.stream());
}

const resources = () => {
    return gulp.src(path.src.resources)
        .pipe(gulp.dest(path.build.resources))
        .pipe(browserSync.stream());
}

const zip = () => {
    del.sync(`${path.buildFolder}/*.zip`);
    return gulp.src(`${path.buildFolder}/**/*`, {})
        .pipe(gulpZip(`${nodePath.basename(nodePath.resolve())}.zip`))
        .pipe(gulp.dest(path.buildFolder));
}

export { clean, css, cssLibs, html, img, js, jsLibs, resources, zip };