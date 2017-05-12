# Module of the Month - Levelup

[![Greenkeeper badge](https://badges.greenkeeper.io/jcblw/motm-levelup.svg)](https://greenkeeper.io/)

Levelup is a high level abstraction of leveldb. This allows you to use leveldb to store and lookup items in leveldb && More

# LevelDB? 

[Wikipedia](http://en.wikipedia.org/wiki/LevelDB)

LevelDB is a fast & [extensable](https://github.com/rvagg/node-levelup/wiki/Modules#wiki-plugins) embedable data store that is use as the backend for Google Chromes indexDB.

[Benchmarks](http://leveldb.googlecode.com/svn/trunk/doc/benchmark.html)

### Interesting Projects using LevelDB

[maxogden/dat](https://github.com/maxogden/dat)

# Settup

Just like any other npm module the library is install via

```
npm install levelup leveldown --save
```

`leveldown` provides low level bindings for levelup but is [not a depedency](https://github.com/rvagg/node-levelup#leveldown)

# Basics

`index.js` will be the basics, just reading an writing things to the database. 


# Events

`events.js` will be a demo of bind to event when adding data or removing data to leveldb.

# Streams

`streams.js` will show how streams can be used to read or write data to leveldb.
