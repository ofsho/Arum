[![Thumbnail]()

[![GitHub Issue Count](https://img.shields.io/github/issues-raw/ArumLang/Arum?style=flat-square)](https://github.com/JERScript/JERscript/issues)
[![GitHub PR Count](https://img.shields.io/github/issues-pr/ArumLang/Arum?style=flat-square)](https://github.com/JERScript/JERscript/pulls)
[![Code License](https://img.shields.io/github/license/ArumLang/Arum?style=flat-square)](https://github.com/JERScript/JERscript/blob/master/LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/ArumLang/Arum?style=flat-square)](https://github.com/JERScript/JERscript/stargazers)
[![Discord](https://img.shields.io/discord/942973329386655805?label=discord&logo=discord&logoColor=%23ffffff&style=flat-square)](https://discord.gg/gCGmraBRQ8)
## ⚠ WARNING ⚠
This repository is not cleared for production/public use, and is currently in the development phase.

Expect sphagetti code while contributing, we are not cleared for public use.

---

# Arum
A multiuse scripting language made in Typescript with syntax inspired by C while being beginner friendly

## Get started
This repository is not cleared for public use, this will be fixed later on when we have a tested stable version

Feel free to chat with us on our [discord server](https://discord.gg/gCGmraBRQ8) or see the progress on our [kanban board](https://github.com/orgs/ArumLang/projects/1)

## Chat
Hangout with us in our [discord server](https://discord.gg/gCGmraBRQ8)!

## Usage/Examples
```
use: "std/io";

modu Kerbal {
	name: string,
	age: i16,
	occupation: string
}

main = () =>{
	println("Hello world!");

	Kerbal jul = new Kerbal("Jul Specifically", 14, "Engineer");

	if (jul.age < 18) {
		println(jul.name, "is not old enough!")
	}else{
		println(jul.name, "is old enough!")
	}
}

main();
```
