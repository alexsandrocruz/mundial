var gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
    
    
var bowerPath = 'bower_components/';

var p = {
    
    jsDest : "js/",
    cssDest : "css/",
    
    
    bootstrapCss : bowerPath + "bootstrap/dist/css/bootstrap.css",
    smartmenusCss : bowerPath + "smartmenus/dist/addons/bootstrap/jquery.smartmenus.bootstrap.css",
    robotoFontfaceCss : bowerPath + "roboto-fontface/css/roboto-fontface.css",
    uiGridCss : bowerPath + "angular-ui-grid/ui-grid.css",
    siteCss : "/site.css",
    jqueryJs : bowerPath +"jquery/dist/jquery.js",
    bootstrapJs : bowerPath + "bootstrap/dist/js/bootstrap.js", 
    angularJs : bowerPath + "angular/angular.js",
    angularRouteJs : bowerPath + "angular-route/angular-route.js",
    angularResourceJs : bowerPath +  "angular-resource/angular-resource.js",
    angularCookiesJs : bowerPath + "angular-cookies/angular-cookies.js",
    angularBootstrapJs : bowerPath + "angular-bootstrap/ui-bootstrap-tpls.js",
    uiGridJs : bowerPath + "angular-ui-grid/ui-grid.js",
    pdfMakeJs : bowerPath + "pdfmake/build/pdfmake.js",
    pdfMakeFontsJs : bowerPath + "pdfmake/build/vfs_fonts.js",
    smartMenusJs : bowerPath + "smartmenus/dist/jquery.smartmenus.js",
    ngDraggableJs : bowerPath + "ngDraggable/ngDraggable.js",
    angularAnimateJs : bowerPath + "angular-animate/angular-animate.js",
    smartMenusBootstrapJs : bowerPath +"smartmenus/dist/addons/bootstrap/jquery.smartmenus.bootstrap.js",
    
    controllers : "controllers/*Controller.js",
    services : "services/*.js"
    
};

gulp.task("min:js", function(){
    return gulp.src([
        p.jqueryJs,
        p.bootstrapJs,
        p.angularJs,
        p.angularRouteJs,
        p.angularResourceJs,
        p.angularCookiesJs,
        p.angularBootstrapJs,
        p.uiGridJs,
        p.pdfMakeJs,
        p.pdfMakeFontsJs,
        p.smartMenusJs,
        p.ngDraggableJs,
        p.angularAnimateJs,
        p.smartMenusBootstrapJs,
        
    ])
    .pipe(concat(p.jsDest + "min/mundial.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("."));
});

gulp.task("min:css", function(){
    return gulp.src([
        p.bootstrapCss,
        p.smartmenusCss,
        p.robotoFontfaceCss,
        p.siteCss,
        p.uiGridCss 
    ])
    .pipe(concat(p.cssDest + "min/mundial.min.css"))
    .pipe(cssmin())
    .pipe(gulp.dest((".")));
});

gulp.task("min:controllers", function(){
    return gulp.src([p.controllers, p.services])
               .pipe(concat("controllers/ctrl.min.js"))
               //.pipe(uglify())
               .pipe(gulp.dest("."));
});


gulp.task("min", ["min:js", "min:css","min:controllers"]);