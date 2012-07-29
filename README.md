# CLI App

This is a sample command line application used in the JSReadme blog post. This cli app performs twitter search. This is meant to demonstrate how to build a cli app using Node.js.

## Installation

Install the packages using NPM

``` sh
npm install
```

Register for a Twitter app at [Twitter Developers](https://dev.twitter.com/). Generate an access token for the app.

Once done, copy the configuration file to a new file called __configuration.json__

``` sh
cp config/configuration.example.json config/configuration.json
```

Fill in the credentials on configuration.json.

## Usage

### Running with no arguments

Running without any arguments brings you to a prompt

``` sh
node bin/birdie
prompt: query
```

Type in your search query and press __enter__. You should see the search results returned in JSON format.

### Running with arguments

You can also pass in arguments. Arguments are assumed to be the query.

``` sh
node bin/birdie foo
```

The search results for __foo__ should return.

### Running with options

You can change the results type of the results by passing in the __r__ option.

``` sh
node bin/birdie -r recent foo
```

Or the long option

``` sh
node bin/birdie -resulttype recent foo
```

The __r__ option takes in either __mixed__, __recent__ or __popular__.
