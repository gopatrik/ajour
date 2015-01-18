# ajour
Ajour is a simple command line tool for leaving notes on the go. A simple way to keep a collaborative journal in git projects to make small notes, write down thoughts, ideas and comments or just managing a journal in personal projects.

## Installation
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
```bash
$ ajour Example note
```

Will produce the file **ajour.md** if it (doesn't already exist):
```markdown
# Sun Jan 18 2015 19:21:50 GMT+0100 (CET)
Example note
```

### Flags
```bash
-t 				-- Tail on previous note (no timestamp)
```

## Suggestions
- Alias "ajour" to something super short like "n" for more efficient note-taking.

## Todo
- GitHub user support
