const gulp = require("gulp");
const webp = require("gulp-webp");
// const imagemin = require("gulp-imagemin");
gulp.task("default", () =>
  gulp.src(["src/images/*.png]"]).pipe(webp()).pipe(gulp.dest("dist/images"))
);

// gulp.task("compress-images", function () {
//   return gulp
//     .src("src/images/*")
//     .pipe(imagemin())
//     .pipe(gulp.dest("dist/images"));
// });
