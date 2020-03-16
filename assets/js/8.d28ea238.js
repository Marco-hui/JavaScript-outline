(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{230:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("gulp是当下最流行的自动化工具，可以自动化完成我们开发过程中大量的重复工作。")]),t._v(" "),a("p",[t._v("为什么要用自动化构建工具？ 主要是用来自动完成一系列重复的操作，如：")]),t._v(" "),t._m(1),t._v(" "),a("blockquote",[a("p",[t._v("官网："),a("a",{attrs:{href:"http://gulpjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://gulpjs.com/"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("\n中文网："),a("a",{attrs:{href:"http://www.gulpjs.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.gulpjs.com.cn/"),a("OutboundLink")],1)])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),a("p",[t._v("说明：全局安装gulp目的是为了通过它执行gulp任务")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("ul",[t._m(11),t._v(" "),a("li",[t._v("匹配要处理的文件\ngulp.src(globs[, options])\n"),a("ul",[a("li",[t._v("globs匹配语法："),a("a",{attrs:{href:"https://github.com/isaacs/node-glob",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/isaacs/node-glob"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("options 有3个属性buffer、read、base")])])]),t._v(" "),t._m(12),t._v(" "),t._m(13)]),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("大部分插件都可以在"),a("a",{attrs:{href:"http://www.npmjs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.npmjs.com"),a("OutboundLink")],1),t._v("找到，任何插件的使用都要经历以下三步：")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),a("p",[t._v("globs需要处理的源文件匹配符路径，语法如下")]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"gulp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gulp"}},[this._v("#")]),this._v(" gulp")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("编译：\n"),a("ul",[a("li",[t._v("less->css")]),t._v(" "),a("li",[t._v("sass->css")]),t._v(" "),a("li",[t._v("coffeescript->js")]),t._v(" "),a("li",[t._v("es6->es5")])])]),t._v(" "),a("li",[t._v("合并: css, js")]),t._v(" "),a("li",[t._v("压缩 ：css, js, html")]),t._v(" "),a("li",[t._v("优化：图片优化")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"安装与运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装与运行"}},[this._v("#")]),this._v(" 安装与运行")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("前提是安装了nodejs环境")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("全局安装 gulp")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" --global gulp\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("本地安装gulp "),a("br"),t._v("\n作为项目的开发依赖（devDependencies）安装")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev gulp\n")])])]),a("ul",[a("li",[t._v("本地安装gulp是为了调用gulp插件的功能，")]),t._v(" "),a("li",[t._v("–save-dev 保存配置信息至 package.json 的 devDependencies 节点")]),t._v(" "),a("li",[t._v("这步操作前先新建package.json文件（npm init）")]),t._v(" "),a("li",[t._v("这步完成后就可以安装各种gulp插件了")])])]),t._v(" "),a("li",[a("p",[t._v("创建gulpfile.js文件 "),a("br"),t._v("\n在项目根目录下创建一个名为 gulpfile.js 的文件（重要）"),a("br"),t._v("\n说明：gulpfile.js是gulp项目的配置文件，是位于项目根目录的普通js文件，内容如下：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" gulp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gulp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ngulp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("task")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'default'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将你的默认的任务代码放在这")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("运行 gulp "),a("br"),t._v("\n在命令行执行以下命名，如果不写任务名称，则自动运行default任务（如果有）")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("gulp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("任务名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"gulp工作流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gulp工作流程"}},[this._v("#")]),this._v(" gulp工作流程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("选通过 gulp.src() 方法获取到想要处理的文件，并返回文件流")]),this._v(" "),s("li",[this._v("然后文件流通过 pipe 方法导入到 gulp 的插件中")]),this._v(" "),s("li",[this._v("经过插件处理后的文件流再通过pipe方法导入到 gulp.dest() 方法中")]),this._v(" "),s("li",[this._v("最后通过gulp.dest() 方法把流中的内容写入到文件中")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("PS：文件流=>文件在内存中的状态")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"gulp-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gulp-api"}},[this._v("#")]),this._v(" gulp API")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[t._v("创建任务"),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("gulp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("task")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'buildsass'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("输出文件\ngulp.dest(path[, options]) "),s("br"),this._v("\n把文件流中的内容中输出到指定目录")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("监听文件修改，并执行相应任务\n"),s("ul",[s("li",[this._v("gulp.watch(glob [, opts], tasks)")]),this._v(" "),s("li",[this._v("gulp.watch(glob [, opts, cb])")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"gulp插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gulp插件"}},[this._v("#")]),this._v(" gulp插件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("安装插件：npm")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" --save gulp-htmlmin\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("PS：可一次性安装多个插件，插件间用空格隔开")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("引包：require()")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" htmlmin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gulp-htmlmin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[this._v("使用：pipe()")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("gulp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("task")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'htmlmin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  gulp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/html/*.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("htmlmin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gulp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist/html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"常用gulp插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用gulp插件"}},[this._v("#")]),this._v(" 常用gulp插件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("htmml压缩：gulp-htmlmin")]),t._v(" "),a("li",[t._v("css压缩：gulp-clean-css")]),t._v(" "),a("li",[t._v("js压缩：gulp-uglify")]),t._v(" "),a("li",[t._v("合并文件：gulp-concat")]),t._v(" "),a("li",[t._v("文件重命名：gulp-rename")]),t._v(" "),a("li",[t._v("编译Sass: gulp-sass")]),t._v(" "),a("li",[t._v("编译 Less：gulp-less")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"其他常用插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他常用插件"}},[this._v("#")]),this._v(" 其他常用插件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("浏览器同步测试：browser-sync")]),this._v(" "),s("li",[this._v("创建node服务器：http-server")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"globs语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#globs语法"}},[this._v("#")]),this._v(" globs语法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("匹配单个文件： "),a("br"),t._v(" "),a("code",[t._v("gulp.src('src/js/index.js')")])]),t._v(" "),a("li",[t._v("匹配多个文件： "),a("br"),t._v(" "),a("code",[t._v("gulp.src(['src/js/index.js','src/js/detail.js'])")]),t._v(" //多个文件以数组形式传入")]),t._v(" "),a("li",[t._v("匹配所有文件 "),a("br"),t._v(" "),a("code",[t._v("gulp.src('src/js/*.js')")])]),t._v(" "),a("li",[t._v("匹配符：\n"),a("ul",[a("li",[a("code",[t._v("!")]),t._v("：排除文件，")]),t._v(" "),a("li",[a("code",[t._v("*")]),t._v("：匹配所有文件，")]),t._v(" "),a("li",[a("code",[t._v("**")]),t._v("：匹配0个或多个子文件夹，")]),t._v(" "),a("li",[a("code",[t._v("{}")]),t._v("：匹配多个属性")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"使用案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用案例"}},[this._v("#")]),this._v(" 使用案例")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("压缩src/js目录下的所有js文件")]),this._v(" "),s("li",[this._v("除了test1.js和test2.js（**匹配src/js的0个或多个子文件夹）"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("gulp.src(['src/js/*.js', '!src/js/**/{test1,test2}.js'])\n")])])])])])}],!1,null,null,null);s.default=e.exports}}]);