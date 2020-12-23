# Purpose
The purpose for this repository is to maintain and publish lorneandkate's wedding site. This website will be entirely static with mutliple pages hosted by github pages using Jekyll with assistance from Bootstrap for styling.

This README is meant for those with little to no experience with setting up a dev environment and will be pretty comprehensive. If you are reading this and know what you're doing - do whatever you want.

# Dependencies
The only dependency to run this project locally is to have Jekyll installed on your machine. It is notable that Jekyll is simply a Ruby Gem - synonymous to a Ruby framework - and therefore you must also have Ruby installed on your machine. The following instructions will help you with the installation on Windows (as taken from the Jekyll documentation):

## Windows

1. Install the [RubyInstaller](https://rubyinstaller.org/).
   1. Click the big red Download button. This redirects you to another webpage with a list of RubyInstallers.
   2. Make sure to download the most recent (at the top) Ruby+Devkit version.
   3. Once the download has completed, launch the installer.
   4. Accept the license agreement.
   5. Continue with the default installation options by hitting install. (All the boxes should be marked and it should be installing Ruby into your C: drive).
   6. Hit next when asked to select components. (There should be 3 boxes checkmarked with the top entry grayed out).
   7. The installation process should start - this may take a while.
   8. Once the installation process is complete, the installer will say "Completing the Ruby ..... Setup Wizard". MAKE SURE THAT THE BOX THAT SAYS `Run 'ridk install' to set up...` is checkmarked. (This line my be slightly cut off, but you should still see if the box is checkmarked or not). Click Finish.
   9. At this point, a cmd.exe window should have opened that says RubyInstaller2 at the top. You will see text asking which installation type you want to follow. Just press ENTER.
   10. Close this cmd.exe once its completed the installation and it prompts you to install once again.
2.  Install Jekyll and Bundler.
    1. Search `cmd` in the start menu and run the application.
    2. Type `gem install jekyll bundler`. This may take a while.
    3. Once the installation is complete (you will know by seeing a C: \Users\...>: on the bottom most line). Check to see if Jekyll has been properly installed by then typing `jekyll -v`. It will then say `jekyll ....` meaning the version of Jekyll that you have installed. This may take a second to appear. If Jekyll was not properly installed, it will say something like jekyll command not recognized.
   
If you are not on Windows, please follow the corresponding tutorial on the [Jekyll Site](https://jekyllrb.com/docs/installation/).

# Running the Dev (Development) Environment

Firstly, ensure that you have a text editor of choice installed on your machine. This may range from things like [Notepad++](https://notepad-plus-plus.org/downloads/) or some sort of IDE. I would recommend using something like [Visual Studio Code](https://code.visualstudio.com/download). 

Secondly, make sure that you have the most updated version of the github repository locally on your machine. If you don't want to learn how to use git commands - you can use [Github Desktop](https://desktop.github.com/) instead that provides a handy GUI for you to use. Make sure that you have the repository cloned and have pulled the most recent updates from the repo. 

To run the website locally and test the website do the following:
1. Open the command prompt by typing `cmd` in the start menu and opening the cmd.exe program.
2. Navigate to the location of the repository.
    * HINTS: 
      * The line "C:\Users\\...>" indicates which folder you currently reside.
      * The command `dir` lists all things within the directory.
        * The last field in the lines are file/folder names.
        * Lines that have been marked as `<DIR>` are directories, and ones that are not are files.
      * The command `cd` is used to traverse the files system.
        * `cd ..` moves backwards to the parent directory.
        * `cd ----` where `----` is the name of the directory that  you want to step in. The names are case sensitive so if you want to step into the Documents folder, make sure to type `cd Documents`.
3. Type the command `bundler exec jekyll serve`. This will launch a local process tied to the command prompt that runs a local server off of port 4000 that you will use to get to the website. If you were to close (meaning like press the X instead of minimize) this command prompt, the local server would terminate and the website would no longer be accessbile. Make sure that whilst you wanna look at the website, this command is running.
4. Open your browser of choice and type in `http://localhost:4000`. This will take you to the website.

