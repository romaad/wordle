# Arabic wordle

Clone of wordle, forked from https://github.com/hannahcode/wordle
Not much effort spent on getting a good wordlist, better effort can be made


_To Run Locally:_
Clone the repository and perform the following command line actions:
```bash
$ cd wordle
$ npm install
$ npm run start
```

_To build/run docker container:_
```bash
$ docker build -t notwordle .
$ docker run -d -p 3000:3000 notwordle
```
open http://localhost:3000 in browser.

