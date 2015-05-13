# tidy-check
Wrapper for tidy-html5 - can be used to enable HTML linting in MS Visual Studio Code

# Installation

`npm install tidy-check -g`

# Usage (Windows)

* Download the `tidy` binary here: http://tidybatchfiles.info
* Add `tidy` to PATH

# MS Visual Studio Code Configuration

* Open a folder with VS Code
* Press `Ctrl` + `Shift` + `P` and select `Configure Task
* That will open `tasks.json` file from the newly created `.setting` folder 
* Paste following task configuration:

```json
{
	"version": "0.1.0",
	"command": "tidy-check",
	"showOutput": "silent",

	"windows": {
		"command": "tidy-check.cmd"
	},
	
	"args": ["${fileBasename}"],

	"problemMatcher": {
	    "owner": "html",
	    "fileLocation": ["relative", "${workspaceRoot}"],
	    "pattern": {
	        "regexp": "^(.*):line ([0-9]+) column ([0-9]+) - ([A-Za-z]+): (.*)$",
	        "file": 1,
	        "line": 2,
	        "column": 3,
	        "_comment": "\"severity\": 4,",
	        "message": 5
	    }
	}
}
```

Now you can check HTML errors in any HTML file by pressing `Ctrl` + `Shift` + `B`

![screenshot](http://i.gyazo.com/2f0544099f2ac245e5edb819163729f8.png)

For more details on Tasks in VS Code go to: https://code.visualstudio.com/docs/tasks


# License

Released under MIT license

See LICENSE for details.
