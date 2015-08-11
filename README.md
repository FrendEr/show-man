# Show Man

What is show-man about? *In short, it's a simple and convenient command tool to show you the information about the computer.*

## Version

- **@0.0.4**

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
    IP           :  192.168.0.103                  |
                                                   |
____________________________________________________

```

- **show -a -l en**

> get all information

```javascript

_______________________________________________________________
                                                              |
                  all imformation                             |
                                                              |
_______________________________________________________________
                                                              |
    IP           :  192.168.0.103                             |
    OS           :  Mac OSX                                   |
    Arch         :  x64                                       |
    Total Memory :  4GB                                       |
    Free Memory  :  119MB                                     |
    CPU          :  Intel(R) Core(TM) i5-5250U CPU @ 1.60GHz  |
                                                              |
_______________________________________________________________

```

## License

- **MIT**
