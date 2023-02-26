const gulp = require("gulp");
const webp = require("gulp-webp");
gulp.task("default", () =>
  // we can change the extension from here  gulp.src("src/images/*.png")
  gulp.src("src/images/*.png").pipe(webp()).pipe(gulp.dest("dist/images"))
);
