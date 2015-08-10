#!/usr/bin/env node

var os = require('os');
var program = require('commander');
var colors = require('colors');

console.log('\n =============='.bold);
console.log(' |  ' + 'Show Man'.america.bold + '  |');
console.log(' ==============\n'.bold);

program
    .version('Version: @0.0.3')
    .option('-l, --language <default zh>', 'select language')
    .option('-a, --all', 'output all information')
    .option('ip', 'output ip address')
    .option('os', 'output operator system')
    .option('arch', 'output processor architecture')
    .option('tm', 'output total memory')
    .option('fm', 'output free memory')
    .option('cpu', 'out cpu detail')
    .parse(process.argv);

if (!process.argv.slice(2).length) {
    program.outputHelp();
    return;
}

var lan = program.language || 'zh';
var lanMap = {
    en: {
        ip: ' IP           : '.cyan, os: ' OS           : '.cyan, arch: ' Arch         : '.cyan, tm: ' Total Memory : '.cyan, fm: ' Free Memory  : '.cyan, cpu : ' CPU          : '.cyan
    },

    zh: {
        ip: ' IP地址       : '.cyan, os: ' 操作系统     : '.cyan, arch: ' 处理器       : '.cyan, tm: ' 机身内存大小 : '.cyan, fm: ' 可用内存大小 : '.cyan, cpu: ' CPU配置      : '.cyan
    }
};
var label = lanMap[lan];
var map = {
    darwin: 'Mac OSX', linux: 'linux', win32: 'Windows x32', win64: 'Windows x64'
};
var cmdMap = {
    ip: function(label) {
        console.log(label.ip.green, os.networkInterfaces().en0[1].address.bold);
    },

    os: function(label) {
        console.log(label.os.green, (map[process.platform] || "Unknow").bold);
    },

    arch: function(label) {
        console.log(label.arch.green, os.arch().bold);
    },

    tm: function(label) {
        console.log(label.tm.green, (os.totalmem() / Math.pow(2, 30) + "GB").bold);
    },

    fm: function(label) {
        var pow = os.freemem() >= Math.pow(2, 30) ? 30 : 20,
            unit = pow == 30 ? "GB" : "MB";

        console.log(label.fm.green, (parseInt(os.freemem() / Math.pow(2, pow)) + unit).bold);
    },

    cpu  : function(label) {
        console.log(label.cpu.green, os.cpus()[0].model.bold);
    },

    me: function() {
        console.log('\n [ Github: https://github.com/FrendEr/show-man, by Frend ]\n'.gray);
    }
};

/*
 * output all imformation
 */
if (program.all) {
    for (var i in cmdMap) {
        cmdMap[i].call(this, label);
    }

    return;
}

/*
 * output ip address, just ipv4
 */
program.ip && cmdMap.ip(label);

/*
 * output the operator system,
 * mainstream os such as: mac osx, linux, and windows(x32|x64)
 */
program.os && cmdMap.os(label);

/*
 * output processor architecture,
 * such as: arm, ia32 and x64
 */
program.arch && cmdMap.arch(label);

/*
 * output total memory
 */
program.tm && cmdMap.tm(label);

/*
 * output free memory
 */
program.fm && cmdMap.fm(label);

/*
 * output cpu detail
 */
program.cpu && cmdMap.cpu(label);

cmdMap.me();
