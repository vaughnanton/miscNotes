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

The angle bracket will take the echo statement and redirect its contents to a file called sonnet_1.txt

```
$ echo "From fairest creatures we desire increase," > sonnet_1.txt
```

We can dump out the contents of the text file to the screen with the `cat` command (where cat is short for concatenate)

```
$ cat sonnet_1.txt
From fairest creatures we desire increase,
```

We can then use the append operator `>>` to add the second line of the sonnet

```
$ echo "That thereby beauty's Rose might never die," >> sonnet_1.txt

$ cat sonnet_1.txt
From fairest creatures we desire increase,
That thereby beauty's Rose might never die,
```

To check difference between files we can use `diff`

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

**Hidden Files**

Unix has a concept of hidden files and directories which don't show up by default
  - these start with a dot `.` and are commonly used for storing user preferences

```
$ echo "*.txt" > .gitignore
$ cat .gitignore
*.txt
```

If we then run ls, the file won’t show up, because it’s hidden:

```
$ ls
sonnet_1.txt
sonnet_1_reversed.txt
```

-To get `ls` to display hidden files and directories, we need to pass in `-a` for all

```
$ls -a
.gitignore      
sonnet_1_reversed.txt
sonnet_1.txt
```

**Renaming, Copying, Deleting**

Rename (using mv)

Create test file, then rename from test.txt to test_file.txt

```
$ echo "test text" > test
$ mv test test_file.txt
$ ls
test_file.txt
```

Copy (using cp)

```
$ cp test_file.txt second_test.txt
$ ls
second_test.txt
test_fil.txt
```

Delete (rm)

```
$ rm second_test.txt
remove second_test.txt? y
$ ls second_test.txt
ls: second_test.txt: No such file or directory
```

_pressing tab will autocomplete if only one of the filename exists_

example, in the case of second_test.txt where tab is ->

```
$ rm sec->
// will autocomplete to
$ rm second_test.txt
```

example, forcing without having to confirm (-f) removal of all files that end with .txt

```
$ rm -f *.txt
```

####Chapter 3 Inspecting Files

**Downloading a File**

`curl` alllows one to interact with a URL at the command line
`which` looks to see if the given programs is available at the command line

ex, this shows curl is installed on the system

```
$ which curl
/user/bin/curl
```

Can use curl to download an example longer file...

```
$ curl -OL cdn.learnenough.com/sonnets.txt
$ ls -rtl
```

-O uses the original file name
-rtl
  -r list in reverse order
  -t sort list by time modified
  -l list in long formot

**Making Heads and Tails of it**

`head` shows first 10 lines of a file

```
$ head sonnets.txt
Shake-speare's Sonnets

I

From fairest creatures we desire increase,
That thereby beauty's Rose might never die,
But as the riper should by time decease,
His tender heir might bear his memory:
But thou contracted to thine own bright eyes,
Feed'st thy light's flame with self-substantial fuel
```

`tail` shows last 10 lines of a file

```
$ tail sonnets.txt
The fairest votary took up that fire
Which many legions of true hearts had warm'd;
And so the general of hot desire
Was, sleeping, by a virgin hand disarm'd.
This brand she quenched in a cool well by,
Which from Love's fire took heat perpetual,
Growing a bath and healthful remedy,
For men diseas'd; but I, my mistress' thrall,
Came there for cure and this by that I prove,
Love's fire heats water, water cools not love.
```

`wc` will tell you `lines wordcount bytes filename`

```
$ wc sonnets.txt
  2620  17670  95635 sonnets.txt
```

can separate the head out with

```
$ head sonnets.txt > sonnets_head.txt
$ wc sonnets_head.txt
   10   46   294 sonnets_head.txt
```

HOWEVER, can bypass making an intermediary file by using a pipe `|`

```
$ head sonnets.txt | wc
   10   46   294
```

**Less is More**

`less` lets you navigate throguh the file in several useful ways, such as:

- moving one line up or down with arrow keys
- pressing space bar to move a page down
- pressing `^F` to move forward a page
- pressing `^B` to move back a page
- `G` to move to the end
- `1G` to move to the beginning
- `/` lets you search through the file from beginnign to end
- to quit, type `q`

ex, searching sonnets.txt for the word(string) "rose"

```
$ less sonnets.txt
output bla bla
/rose
```

will highlight all occurences of rose within the text
  - can presss `n` to navigate to the next match, or `N` to go previous

**3.4 Grepping**

GREP stands for "globally search a regular expression and print"

`grep` will return the results of the references to the string "rose" - case sensitive

```
$ grep rose sonnets.txt
The rose looks fair, but fairer we it deem
As the perfumed tincture of the roses.
Die to themselves. Sweet roses do not so;
Roses of shadow, since his rose is true?
Which, like a canker in the fragrant rose,
Nor praise the deep vermilion in the rose;
The roses fearfully on thorns did stand,
Save thou, my rose, in it thou art my all.
I have seen roses damask'd, red and white,
But no such roses see I in her cheeks;
```

and of course, we can count them...

```
$ grep rose sonnets.txt | wc
   10   82   419
```

and if we want case insensitive...

```
$ grep -i rose sonnets.txt | wc
   12   96   508
```

using regex for words that start with "ro" and end in "s"

```
$ grep ' ro[a-z]*s ' sonnets.txt
To that sweet thief which sourly robs from me.
Die to themselves. Sweet roses do not so;
When rocks impregnable are not so stout,
He robs thee of, and pays it thee again.
The roses fearfully on thorns did stand,
I have seen roses damask'd, red and white,
But no such roses see I in her cheeks;
```

####Chapter 4 Directories

List the sub directories with

```
$ ls /usr/local/bin
```

**Making Directories**

Make the directory...

```
$ mkdir text_files
```

Move all text files using *

```
$ mv *.txt text_files/
```

then can confirm it worked with

```
$ ls text_files/
```

**Modifying and Navigating Directories**

change directories using `cd`

print the working directory with `pwd`


`cd ..` will go back a directory

`cd` will go to user directory

`cd ~` will change to previous directory

`cp` `rm`

`rm` directory requires directory to be empty, can force with `rm -rf`

can grep files in directories and subdirectories ex.

```
$ grep -ri rose text_files
```

will return all files within text_files sub/directories with the string case insensitive string of 'rose'
