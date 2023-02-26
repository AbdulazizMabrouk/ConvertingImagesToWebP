const gulp = require("gulp");
const webp = require("gulp-webp");
gulp.task("default", () =>
  gulp.src("src/images/*.png").pipe(webp()).pipe(gulp.dest("dist/images"))
);
