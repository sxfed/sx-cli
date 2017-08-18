var path = require('path');
var chalk = require('chalk');    //不同颜色的info
var util = require('util');
var Generator = require('yeoman-generator');
var yosay = require('yosay');    //yeoman弹出框
var path = require('path');
default class extends Generator {
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

        // Next, add your custom code
        this.option('framework', {type: String, required: true});
        this.option('modules', {type: String, required: false});
        this.option('babel'); // This method adds support for a `--babel` flag
    }

    prompting() {
        return this.prompt([
            {
                when: !this.options.framework,
                type: 'list',
                name: 'framework',
                message: 'Which JavaScript framework do you want?',
                choices: [
                    {name: 'React', value: 'react'},
                    {name: 'Angular 2', value: 'vue'},
                ]
            },
            {
                when(responses) {
                    if (responses.framework === 'vue') {
                        responses.modules = 'vue';
                        return false;
                    }
                    return !responses.modules && !modules;
                },
            },
            {
                when(responses) {
                    if (responses.framework === 'react') {
                        responses.modules = 'react';
                        return false;
                    }
                    return !responses.modules && !modules;
                },
            },
            {
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
            this.appname = answers.name;
            this.author = answers.author;
            this.framework = answers.framework;
            this.modules = answers.modules;
        });

    }

    writing() {
        this.fs.copy(
            this.templatePath(this.framework),
            this.destinationPath(`${this.appname}`)
        );
        this.sourceRoot(`./${this.appname}`);
    }
};