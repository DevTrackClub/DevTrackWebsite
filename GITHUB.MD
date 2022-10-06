# **Steps to Contribute**
To contribute to this project and other open-source projects, you need to have knowledge of Git and GitHub/Gitlab.
You need to have Git installed on your system. To check whether your system has Git installed, run  `git --version`. If you get any version, it means Git is installed on your system otherwise it is not.
To install Git, visit https://git-scm.com/downloads and follow the instructions. <br><br>

To make your own local copy of this repository, open up your terminal/ command-line.

### **1. Clone the Repository**
We'll use the `git clone` command to clone the repository on our local system.
Copy the repository HTTPS URL and then run the following command: `git clone https://github.com/DevTrackClub/DevTrackWebsite.git`.

### **2. Make a new branch**
To create your branch, from your terminal window, change your directory so that you are working in the directory of the repository. Be sure to use the actual name of the repository (i.e. Hacktoberfest-22) to change into that directory.

```
cd DevTrackWebsite
```

Now, we’ll create our new branch with the `git branch` command. Make sure you name it descriptively so that others working on the project understand what you are working on.

```
git branch new-branch
```

Now that our new branch is created, we can switch to make sure that we are working on that branch by using the git checkout command:

```
git checkout new-branch
```

Once you enter the git checkout command, you will receive the following output:

```
Output:
Switched to branch 'new-branch'
```

At this point, you can now modify existing files or add new files to the project on your own branch.

### **3. Make Changes Locally**

Once you have added new files to the project, you can add them to your local repository, which you can do with the `git add` command. Let’s add the `-A` flag to add all changes that we have made:

```
git add -A
```
or
```
git add .
```

Next, we’ll want to record the changes that we made to the repository with the git commit command.

The commit message is an important aspect of your code contribution; it helps the other contributors fully understand the change you have made, why you made it, and how significant it is. Additionally, commit messages provide a historical record of the changes for the project at large, helping future contributors along the way.

If you have a very short message, you can record that with the `-m` flag and the message in quotes:

Example:

```
git commit -m "Updated Readme.md"
```

At this point you can use the `git push` command to push the changes to the current branch of your forked repository:

Example:

```
git push --set-upstream origin new-branch
```

### **4. Update Local Repository**

While you are working on a project alongside other contributors, it is important for you to keep your local repository up-to-date with the project as you don’t want to make a pull request for code that will cause conflicts. To keep your local copy of the code base updated, you’ll need to sync changes.

We’ll first go over configuring a remote for the fork, then syncing the fork.

### **5. Configure a Remote for the Fork**

Next, you’ll have to specify a new remote upstream repository for us to sync with the fork. This will be the original repository that you forked from. You’ll have to do this with the  `git remote add`  command.

```
git remote add upstream https://github.com/DevTrackClub/DevTrackWebsite.git
```

In this example, `upstream` is the shortname we have supplied for the remote repository since in terms of Git, “upstream” refers to the repository that you cloned from. If you want to add a remote pointer to the repository of a collaborator, you may want to provide that collaborator’s username or a shortened nickname for the shortname.

### **6. Sync the Fork**

Once you have configured a remote that references the upstream and original repository on GitHub, you are ready to sync your fork of the repository to keep it up-to-date.

To sync your fork, from the directory of your local repository in a terminal window, you’ll have to use the `git fetch` command to fetch the branches along with their respective commits from the upstream repository. Since you used the shortname “upstream” to refer to the upstream repository, you’ll have to pass that to the command:

```
git fetch upstream
```

Switch to the local master branch of our repository:

```
git checkout master
```

You’ll now have to merge any changes that were made in the original repository’s master branch, that you will access through your local upstream/master branch, with your local master branch:

```
git merge upstream/master
```

### **7. Create Pull Request**

At this point, you are ready to make a pull request to the original repository.

You should navigate to your forked repository, click on the Contribute button and Open a new PR ( Pull Request ).
