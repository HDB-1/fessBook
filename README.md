### fessBook ###

Brief:
For the rest of the week you will be working to create a community journaling website.
Your website should have the following functionality for users:
1. Users should be able to visit the website and anonymously post journal entries. 
    a) Users should be limited to how many characters they can put in a entry.
    b) Users should be able to post gifs from giphy in an entry.
 2.  Users should be able to view other peoples' entries
 3.  Users should be able to react to other peoples’ entries with an emoji.
    a) Users should have three emojis to choose from
 4.  Users should be able to comment on other people’s entries.
Your website should have the following technical functionality:
    - Your website should be hosted via github pages or similar
    - Your website should not have a database connected, instead any data sent and stored in your backend should be saved within .json files.
----------------------------------------------
User stories: person purpose action
    - As a user, when I want to read blogs, there is a page that allows me to read a collection of blog posts 
    - As a user, when I want to read a specific blog, I should be able to click into it and read it in full
    - As a user, when I want to post a blog, there is a text box that lets me write my post
    - As a user, when I want to title my post, there is a text box that lets me write a title 
    - As a user, when I want to add emotion to my post, I should be able to do so in the form of a gif
    - As a user, when I want to post my blog, I want a button that posts it for me
    - As a user, when I read a post, I want to be able to react to it with a range of emojis
    - As a user, when I read a post, I want to be able to make a comment on it
    - As a user, when I don't know what I want to read, I want to be given a random blog post to read
----------------------------------------------
Landing page:
    - A button where I can enter the site
Home page:
    - A page with tiles that show a feed of all blog posts starting with the most recent 
    - Styled like facebook where it has a list of blog posts 
    - Nav bar
View page:
    - If a specific post was clicked on the homepage, then that specific post should show on this page
    - Nav bar
Random page:
    - If the random post button was clicked on the nav bar, then it should show a random blog on this page 
    - Nav bar
Submit blog page:
    - Be able to write a blog post with a title and submit it
    - There should be a character limit to blog posts
    - Ability to add a gif
    - Nav bar 
Miscellaneous: 
    - Defensive pages that resist user attempts to break website 
----------------------------------------------
Plan of action:
    1) Create basic pages and then create repo. html files, css, js/app js. create project. 
    2) Add everyone as collaborators 
    3) Research how to interact with JSON files. How to input something from one page and then it store on a JSON file. Then, how to extract that data and paste it on a page. 
    4) Use dummy JSON data from JSON placeholder to test functionality (adding previews to feed page, accessing a random post and rendering it.)
    5) Make skeleton on each file (mandatory html stuff, app js with route, express), nav bar
    6) 'write post page': text box with character count etc and underlying logic (so that blog posts can't be > max char count.)
    7) Link the json with write blog page and test it displays what we want and how we want it to work (if we keep adding posts it will     store, if we close the site and reopen posts are still there)
    8) Get giphy api working 
    9) Make second page work
        a) When we click a particular post on homepage it shows that post only
        b) If we click random page link it shows a random post 
    10) Get emoji, likes and comments working and gif showing on screen
    11) Get title as url route
    12) Bug check - make sure it can deal with extreme cases/nothing can break it (defensive code)
    13) Style
    14) If we have time add additional features (alert, timestamp, reactions maintain page position, order post by most recent)
    15) Make presentation and practice 
----------------------------------------------
Things to remember:
    - Standups every morning 9.15-9.30 where we discuss the current situation. Lunch 1-2 NO CODE, followed by quick 5 min catch up after lunch. 
    - What ever difficulties you come across and how you overcame them, write them down. We will colate this and then on thursday make a PP
    - Master => develop => feature. Feature is the branch where you work on a specific, guess what? Feature! There are to be multiple feature branches for each feature being developed at a time. Only merged to develop once tried and tested. 

If there is anything you will like to add/change, feel free but then mention in slack group so we can all be up-2-date
