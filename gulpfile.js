/***************************************/
/****import all the needed packages*****/
/***************************************/
var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');
var fs = require('fs');


var configFile = JSON.parse(fs.readFileSync('galaxy-config.json'))
var filesCopied = false
var buildTarget;

var htmlInput = './src/html/**/*.html'
var jsInput = './src/js/**/*.js'
var sassInput = ['./src/stylesheets/**/*.scss','./src/stylesheets/**/*.css']

var bootstrapInput = [
  './src/js/bootstrap/transition.js',
  // './src/js/bootstrap/alert.js',
  './src/js/bootstrap/button.js',
  // './src/js/bootstrap/carousel.js',
  './src/js/bootstrap/collapse.js',
  './src/js/bootstrap/dropdown.js',
  // './src/js/bootstrap/modal.js',
  // './src/js/bootstrap/tooltip.js',
  // './src/js/bootstrap/popover.js',
  // './src/js/bootstrap/scrollspy.js',
  './src/js/bootstrap/tab.js',
  // './src/js/bootstrap/affix.js'
]

const taskConfig = configFile.tasks

var source = './src/', dest = './dist/'





//tasks
gulp.task('html', function(){
    var htmlFiles = gulp.src(htmlInput);
    var htmlInjectOptions = {starttag: '<!-- inject:{{path}} -->',relative: true,transform: function (filePath, file) {return file.contents.toString('utf8')}};
    for(var i=0;i<taskConfig.length;i++){
        gulp.src('src/html/'+taskConfig[i].name+'.html').pipe(inject(htmlFiles, htmlInjectOptions)).pipe(gulp.dest('dist'));
    }
});
gulp.task('watchhtml', function() {return gulp.watch(htmlInput, ['html']).on('change', function(event) {console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');});});


gulp.task('js', function() {
    for(var j=0;j<taskConfig.length;j++){
        var blocks = taskConfig[j].blocks
        for(var i=0;i<blocks.length;i++){
            gulp.src('./src/js/'+ blocks[i] + '.js')
            .pipe(sourcemaps.init())
                .pipe(babel({presets:['es2015']}))
                // .pipe(concat(blocks[i] + '.js'))
                // .pipe(uglify())
            .pipe(sourcemaps.write('../maps'))
            .pipe(gulp.dest('./dist/js'));
        }
    }

    return gulp.src(bootstrapInput)
    .pipe(babel({presets:['es2015']}))
    .pipe(concat('bootstrap.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('./dist/js/lib'));;
});
gulp.task('watchjs', function() { return gulp.watch(jsInput, ['js']).on('change', function(event) {console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');});});



gulp.task('sass',function(){
    // for(var j=0;j<taskConfig.length;j++){
    //     var blocks = taskConfig[j].blocks
    //     for(var i=0;i<blocks.length;i++){
    //         gulp.src('./src/stylesheets/'+ blocks[i] + '.scss')
    //         .pipe(sass(scss.sassOpts).on('error',sass.logError))
    //         // .pipe(cssmin())
    //         .pipe(gulp.dest('./dist/css'));
    //     }
    // }
    return gulp.src('./src/stylesheets/master.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'nested',precison: 3,errLogToConsole: true,includePaths: sassInput}).on('error',sass.logError))
    // .pipe(cssmin())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('./dist/css'));
});


gulp.task('watchcss', function() {return gulp.watch(sassInput, ['sass']).on('change', function(event) {console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');});});


gulp.task('webserver', function() {connect.server({livereload:true,
    root:'dist',port: 8000});});

gulp.task('cpfiles',function(){
    return gulp.src([
        './src/static/**/*.*'
    ])
    .pipe(gulp.dest('./dist'));
})

//*******all tasks

gulp.task('default',[
    'js',
    'watchjs',
    'sass',
    'watchcss',
    'html',
    'watchhtml',
    'webserver',
    'cpfiles',
])
