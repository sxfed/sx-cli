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
        this.option('framework', {type: String, required: true});
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
                    {name: '后台管理系统', value: 'sx-admin'},
                    {name: 'sx-webpack', value: 'sx-webpack'},
                    {name: 'sx-rn', value: 'sx-rn'},
                    {name: 'sx-mobile', value: 'sx-mobile'},
                    {name: 'sx-android', value: 'sx-android'},
                ]
            },
            {
                when(responses) {
                    if (responses.framework === 'sx-rn'
                        ||responses.framework === 'sx-webpack'
                        || responses.framework === 'sx-admin'
                        || responses.framework === 'sx-mobile'
                        || responses.framework === 'sx-android'
                    ) {
                        return false;
                    }
                    return !responses.framework && !framework;
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
            this.appname = answers.name ? answers.name :`${answers.framework}-project`;
            this.author = answers.author ? answers.author: 'jerry uncle';
            this.framework = answers.framework;
        });

    }

    writing() {
        this.spawnCommandSync('git',['clone','-b','master',`https://github.com/sxfed/${this.framework}.git`,this.appname])
        this.spawnCommandSync('cd',[this.appname]);
        this.spawnCommandSync('yarn');

        this.spawnCommandSync('yarn',['run','dev'])
    }
};