var path = require('path');
var chalk = require('chalk');    //不同颜色的info
var util = require('util');
var Generator = require('yeoman-generator');
var yosay = require('yosay');    //yeoman弹出框
var path = require('path');
module.exports =  class extends Generator {
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

        // Next, add your custom code
        this.option('babel'); // This method adds support for a `--babel` flag
    }

    prompting() {
        return this.prompt([{
            type    : 'input',
            name    : 'name',
            message : '您的项目名称',
        }
        // , {
        //     type    : 'confirm',
        //     name    : 'cool',
        //     message : 'Would you like to enable the Cool feature?'
        // }
        ,{
            type    : 'input',
            name    : 'author',
            message : '项目开发者名称',
        }
        ]).then((answers) => {
            this.appname = answers.name
            this.author = answers.author
        });

    }

    writing() {
        this.fs.copy(
            this.templatePath('all'),
            this.destinationPath(`${this.appname}`)
        );
        this.fs.copy(
            this.templatePath('all/.*'),
            this.destinationPath(`${this.appname}`)
        );
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath(`${this.appname}/package.json`),
            {
                name: this.appname,
                author: this.author
            }
        );
        this.sourceRoot(`./${this.appname}`);
    }
};