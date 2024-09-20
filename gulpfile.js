import gulp from "gulp";
import browserSync from "browser-sync";
import path from "./gulp/path.js";
import { clean, css, cssLibs, html, img, js, jsLibs, resources, zip } from "./gulp/tasks.js";

browserSync.create();

const watcher = () => {
    browserSync.init({
        server: {
            baseDir: `${path.buildFolder}`
        },
        notify: false,
    });

    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.css, gulp.parallel(css, cssLibs));
    gulp.watch(path.watch.js, gulp.parallel(js, jsLibs));
    gulp.watch(path.watch.img, img);
    gulp.watch(path.watch.resources, resources);
}

gulp.task('default', gulp.series(clean, html, css, cssLibs, js, jsLibs, img, resources, watcher));
gulp.task('zip', zip);