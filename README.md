# Show Man

What is show-man about? *In short, it's a simple and convenient command tool to show you the information about the computer.*

## Version

- **@0.0.1**

## Installation

```javascript

npm install show-man -g

```

## How to use

- **show -h**

> get help information.

```javascript

_________________________________________________________________
                                                                |
                       help information                         |
                                                                |
_________________________________________________________________
                                                                |
Usage: show [options]                                           |
                                                                |
  Options:                                                      |
                                                                |
    -h, --help                   output usage information       |
    -V, --version                output the version number      |
    -l, --language <default zh>  select language                |
    -a, --all                    output all information         |
    ip                           output ip address              |
    os                           output operator system         |
    arch                         output processor architecture  |
    tm                           output total memory            |
    fm                           output free memory             |
    cpu                          out cpu detail                 |
                                                                |
_________________________________________________________________

```

- **show ip**

> get ip address

```javascript

____________________________________________________
                                                   |
                  ip address                       |
                                                   |
____________________________________________________
                                                   |
    IP地址 :  192.168.0.103                         |
                                                   |
____________________________________________________

```

- **show -a**

> get all information

```javascript

_________________________________________________________
                                                        |
                  all imformation                       |
                                                        |
_________________________________________________________
                                                        |
    IP地址 :  192.168.0.103                              |
    操作系统 :  Mac OSX                                  |
    处理器 :  x64                                        |
    机身内存大小 :  4GB                                   |
    可用内存大小 :  160MB                                 |
    CPU配置 :  Intel(R) Core(TM) i5-5250U CPU @ 1.60GHz  |
                                                        |
_________________________________________________________

```

## License

- **MIT**
