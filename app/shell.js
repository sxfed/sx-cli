var shell = require('shelljs');
var path = shell.pwd();
shell.chmod(777, `${path}/app/create.sh`);
shell.exec(`${path}/app/create.sh`);
shell.echo('设置启动命令');
