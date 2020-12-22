# Purpose
The purpose for this repository is to maintain and publish lorneandkate's wedding site. This website will be an entirely static with mutliple pages hosted by github pages using Jekyll with assistance from Bootstrap for styling.

This README is meant for those with little to no experience with setting up a dev environment and will be pretty comprehensive. If you are reading this and know what you're doing - do whatever you want.

# Dependencies
The only dependency to run this project locally is to have Jekyll installed on your machine. It is notable that Jekyll is simply a Ruby Gem - synonymous to a Ruby framework - and therefore you must also have Ruby installed on your machine. The following instructions will help you with the installation on Windows (as taken from the Jekyll documentation):

## Windows

1. Install the [RubyInstaller](https://rubyinstaller.org/)
   1. Click the big red Download button. This redirects you to another webpage with a list of RubyInstallers.
   2. Make sure to download to most recent (at the top) Ruby+Devkit version.
   3. Once the download has complete, launch the installer.
   4. Accept the license agreement.
   5. Continue with the default install options by hitting isntall. (All the boxes should be marked and it should be installing Ruby into your C: drive).
   6. Hit next when asked to select components. (There should be 3 boxes checkmarked with the top entry grayed out).
   7. The installation process should start - this may take a while.
   8. Once the installation process is complete the installer will say "Completing the Ruby ..... Setup Wizard". MAKE SURE THAT THE BOX THAT SAYS `Run 'ridk install' to set up...` is checkmarked. (This line my be slightly cut off, but you should still see if the box is checkmarkec or not). Click Finish.
   9. At this point, a cmd.exe window should have opened that says RubyInstaller2. You will see text asking which installation process you want to follow. Just press ENTER.
   10. Close this cmd.exe once it prompts you to install once again.
2.  Install Jekyll and Bundler
    1. Search `cmd` in the start menu and run the application.
    2. Type `gem install jekyll bundler`. This may take a while.
    3. Once the installation is complete (you will know by seeing a <C: \Users\...>: on the bottom most line). Check to see if Jekyll has been properly installed by then typing `jekyll -v`. It will then say `jekyll ....` meaning the version of Jekyll that you have installed. This may take a second to appear. If Jekyll was not properlly installed, it will say something like jekyll command not recognized.
   
If you are not on Windows, please follow the corresponding tutorial on the [Jekyll Site](https://jekyllrb.com/docs/installation/).

# Running the Dev (Development) Environment

