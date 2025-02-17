---
author: Arun Kumar
pubDatetime: 2024-02-18T03:14:00Z
modDatetime: 2024-02-18T03:14:00Z
title: Clean git repo (except .git folder)
slug: clean-git-repo
featured: false
draft: false
tags:
  - general
  - programming
description: Clean git repo except '.git' folder to retain git history, and replace its contents.
---

## Clean `git` repo and replace its contents

This is one of the common tasks I have to perform often. For example, this new blog is set up with
[Astro](https://astro.build/) and I had to replace the previous gatsby setup with astro files without
affecting the git history.

You can list all the files to be deleted in the `git` repo with the command
```shell
find . -mindepth 1 -not -regex "^\./\.git.*"
```

If you are satisfied with the results, you can append `-delete` to the above command like so
```shell
find . -mindepth 1 -not -regex "^\./\.git.*" -delete
```
This works for me in macos and this may not work in certain *nix systems.

Now, we have all the files cleaned up without touching `.git` folder, so our git history remains intact.
We can commit the current state and move on to next step to replace the folder with new contents. I usually have the
files to be replaced in a separate folder. I just run from the current folder
```shell
cp -a ./path-to/my-folder-with-new-files/. .
```

This just replaces all the contents without losing my git history.

PS: One of the main reasons behind this blog is to document these seemingly silly stuffs that I can refer to later.

Have a nice day!
