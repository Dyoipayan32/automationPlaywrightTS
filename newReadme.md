Steps Performed to push code without requiring gitcredentials explicitly as they are handled inside doGitUserPermanentLogin.bat file.
Running the chmod +x command to enable execution for the .bat file.
MR. DWAIPAYAN DAS@LAPTOP-8A25TH8Q MINGW64 /c/MyCode/GitHub (master)
$ chmod +x doGitUserPermanentLogin.bat

MR. DWAIPAYAN DAS@LAPTOP-8A25TH8Q MINGW64 /c/MyCode/GitHub (master)
$ ./doGitUserPermanentLogin.bat
Access is denied.
Git setup complete.

MR. DWAIPAYAN DAS@LAPTOP-8A25TH8Q MINGW64 /c/MyCode/GitHub (master)
$ cd automationP
automationPlaywrightTS/ automationProject/      automationProjectsrc/

MR. DWAIPAYAN DAS@LAPTOP-8A25TH8Q MINGW64 /c/MyCode/GitHub (master)
$ cd automationPlaywrightTS

MR. DWAIPAYAN DAS@LAPTOP-8A25TH8Q MINGW64 /c/MyCode/GitHub/automationPlaywrightTS (main)
$ ll
total 5
drwxr-xr-x 1 MR. DWAIPAYAN DAS 197121   0 Sep 29 16:10 PlayWrightTS/
-rw-r--r-- 1 MR. DWAIPAYAN DAS 197121 217 Sep 29 16:08 README.md
-rw-r--r-- 1 MR. DWAIPAYAN DAS 197121   0 Sep 29 16:19 newReadme.md

MR. DWAIPAYAN DAS@LAPTOP-8A25TH8Q MINGW64 /c/MyCode/GitHub/automationPlaywrightTS (main)
$ vi newReadme.md

MR. DWAIPAYAN DAS@LAPTOP-8A25TH8Q MINGW64 /c/MyCode/GitHub/automationPlaywrightTS (main)
$ cat newReadme.md
new text added.

MR. DWAIPAYAN DAS@LAPTOP-8A25TH8Q MINGW64 /c/MyCode/GitHub/automationPlaywrightTS (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   newReadme.md

no changes added to commit (use "git add" and/or "git commit -a")

MR. DWAIPAYAN DAS@LAPTOP-8A25TH8Q MINGW64 /c/MyCode/GitHub/automationPlaywrightTS (main)
$ git add .
warning: in the working copy of 'newReadme.md', LF will be replaced by CRLF the next time Git touches it

MR. DWAIPAYAN DAS@LAPTOP-8A25TH8Q MINGW64 /c/MyCode/GitHub/automationPlaywrightTS (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   newReadme.md


MR. DWAIPAYAN DAS@LAPTOP-8A25TH8Q MINGW64 /c/MyCode/GitHub/automationPlaywrightTS (main)
$ git commit -m "modified newReadme.md"
[main 065c9e4] modified newReadme.md
 1 file changed, 1 insertion(+)

MR. DWAIPAYAN DAS@LAPTOP-8A25TH8Q MINGW64 /c/MyCode/GitHub/automationPlaywrightTS (main)
$ git push
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 276 bytes | 276.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/Dyoipayan32/automationPlaywrightTS.git
   2f1a6cd..065c9e4  main -> main

