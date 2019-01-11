### Notes on Michael Hartl's
#### Learn Enough Command Line to be Dangerous


#### Chapter 1 - The Basics

- If the terminal hangs or ens in a state where it is difficult or impossible to enter commands - use `Ctrl-C` or `ESC`

- Shell, which is the program used to run a command line, will output a list of available commands with the command `man` followed by the name of the command that you'd like to learn about ex. `man echo`

- to exit the `man` page, you may hit 'q'

- Key (Symbol)
- Command	(⌘)
- Control	(⌃)
- Shift	(⇧)
- Option (⌥)
- Up, down, left, right	(↑ ↓ ← →)
- Enter/Return	(↵)
- Tab	(⇥)
- Delete	(⌫)

Hitting the up arrow will allow you to scroll through previous commands

- Ctrl-A will take to beginning of line
- Ctrl-E will take to end of line
- Ctrl-U will clear line
- Can also option-click to get to a certain spot in line

`clear` will clear up the screen (Ctrl-L)
`exit` when you are ready to exit (Ctrl-D)


#### Chapter 2 - Manipulating Files

**Redirecting & Appending**

- The angle bracket will take the echo statement and redirect its contents to a file called sonnet_1.txt

```
$ echo "From fairest creatures we desire increase," > sonnet_1.txt
```

- We can dump out the contents of the text file to the screen with the `cat` command (where cat is short for concatenate)

```
$ cat sonnet_1.txt
From fairest creatures we desire increase,
```

- We can then use the append operator `>>` to add the second line of the sonnet

```
$ echo "That thereby beauty's Rose might never die," >> sonnet_1.txt

$ cat sonnet_1.txt
From fairest creatures we desire increase,
That thereby beauty's Rose might never die,
```

- To check difference between files we can use `diff`

```
$ diff sonnet_1.txt sonnet_1_lower_case.txt
< That thereby beauty's Rose might never die,
---
> That thereby beauty's rose might never die,
```

**Listing**

- `ls` will list all the files and directories within the current directory (except for hidden files)
  - using * with ls can will list all files ending in specified `ex. $ls *.txt` will list all txt files in that directory
- long form list, shows time/date last modified and file size (in bytes)

```
$ ls -l *.txt
total 16
-rw-r--r-- 1 mhartl staff  87 Jul 20 18:05 sonnet_1.txt
-rw-r--r-- 1 mhartl staff 294 Jul 21 12:09 sonnet_1_reversed.txt
```

- `ls rtl` will do the same as above except list it in order of how recently it was modified
  - useful when looking to download a recently modified file
  - rtl stands for 'list by reversed time of modification (long format)'
  - can also be passed separately as `ls -r -t -l`

- `touch` followed by a file name will create that file
