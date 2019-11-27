### fESSBOOK ###

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
--------------------------------------------------
User stories: person purpose action
    - As a user, when i want to read blogs, there is a page that allows me to read a collection of blog posts 
    - As a user, when I want to see what blog I want to read, I want to be able to preview blogs to see if I want to carry on reading it
    - as a user, when i want to post a blog, there is a text box that lets me write my post
    - as a user, when i want to add emotion to my post, i should be able to do so in the form of a giphy
    - as a user, when i want to post my blog, i want a button that posts it for me
    - as a user, when i read a post, i want to be able to react to it with an emoji
    - as a user, when i read a post, i want to be able to make a comment on it
    - as a user, when I don't know what I want to read, I want to be given a random blog to read
--------------------------------------------------
Home page:
    - A page with tiles that show a preview of all the blog posts we have
    - Styled like facebook where it has a list of blog posts 
    - Nav bar
Blog page:
    - If a specific post was clicked on the homepage, then that specific post should show on this page
    - If the second page link was clicked from the nav bar then it shows a random post on this page
    - Nav bar
Submit blog page:
    - Be able to write a blog post and submit it
    - There should be a character limit to blog posts
    - ability to add a gif
    - Nav bar 
--------------------------------------------------
Plan of action:
    1) create basic pages and then create repo. html files, css, js/app js. create project. 
    2) add everyone
    3) research how to do the json stuff. How to input something from one page and then it store on a JSON file. Then, how to extract that data and paste it on a page. 
    4) Use dummy JSON data from JSON placeholder to test functionality (adding previews to feed page, accessing a random post and rendering it.)
    5) Make skeleton on each file (mandatory html stuff, app js with route, express), nav bar
    6) 'write post page': text box with character count etc and underlying logic (so that blog posts can't be > max char count.)
    7) Link the json with write blog page and test it displays what we want and how we want it to work (if we keep adding posts it will store, if we close the site and reopen posts are still there)
    8) Get giphy api working
    9) Get emoji working
    10) Make second page work
        a) when we click a particular post on homepage it shows that post only
        b) if we click second page link it gives a random post
    11) style
--------------------------------------------------
Things to remember:
    - Standups every morning 9.15-9.30 where we see where we are all at. Lunch 1-2 NO CODE, followed by quick 5-10 min catch up after lunch. 
    - What ever difficulties you come across and how you overcame them, write them down. We will colate this and then on thursday make a PP
    - Master => develop => test. Test something on test then when works push to develop. Mention any commits on the chat so we know to keep our locals updated 

If there is anything you will like to add/change, feel free but then mention in chat so we can all be up-2-date