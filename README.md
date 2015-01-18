# Ajour
Ajour is a simple command line tool for leaving notes on the go.

A simple way to keep a **collaborative journal in git projects** to make small notes, write down thoughts, ideas and comments or just managing a journal in personal projects.

## Installation
Ajour is built on node.js, [Install node.js](http://nodejs.org/download/).

```bash
$ npm install -g ajour
```

or via git clone:
```bash
$ git clone git://github.com/gopatrik/ajour.git
$ cd ajour
$ npm install -g
```

## Usage
To make an entry saying "Hello World" we simply type:
```bash
ajour Hello World
```

Will produce the file **ajour.md** if it (doesn't already exist):
```markdown
# Sun Jan 18 2015 19:20:30 GMT+0100 (CET)
Hello World
```

### Tailing
We could also tail on the previous entry by appending the -t flag, and our entry won't be prepended with a timestamp.

```bash
$ ajour Example note one
$ ajour Example note two
$ ajour Tailing example note two -t
```

**ajour.md**:
```markdown
# Sun Jan 18 2015 19:21:50 GMT+0100 (CET)
Example note one

# Sun Jan 18 2015 19:21:59 GMT+0100 (CET)
Example note two
Tailing example note two
```


### Flags
```bash
-t 				-- Tail on previous note (no timestamp)
```

## Suggestions/Thoughts
- Have the file ajour.md append from the top instead of the bottom.
- Alias "ajour" to something super short like "n" for more efficient note-taking.

## Todo
- GitHub user support


---

## Contact
Twitter: [@gopatrik](https://twitter.com/gopatrik)
