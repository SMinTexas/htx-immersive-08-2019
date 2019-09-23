var textStory = `When you want to buy any application from the Apple iTunes store 
you have more choices than you can handle. Most of the users scroll past the 
application description completely avoiding it like ads displayed on the right 
column of your webpage. Their choice is dependent on three important factors 
price, screenshot and reviews.`;

var postStory1 = `Last month Apple released the anticipated WatchKit Framework 
for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework 
enable the developers to create Apple Watch applications. In this article we are 
going to focus on the basics of getting started with the WatchKit framework and 
developing apps for the Apple Watch.`;

var postStory2 = `Swift is a modern programming language developed by Apple to 
create the next generation of iOS and OSX applications. Swift is a fairly new 
language and still in development but it clearly reflects the intentions and the f
uture direction. This article will revolve around the basic concepts in the Swift 
language and how you can get started.`;

var postStory3 = `C# is a highly-accessible and fully-realized object-oriented
language that is popular among software developers.  It is a relatively easy
development platform to learn for a young developer.`;

var postStory4 = `Delphi remains a solid object-oriented programming language,
but it's problem is that it has fallen out of favor among many organizations. 
It just does not have the support platform that one can find with C#.`;

var postStory5 = `Visual Basic - really?  This is still a thing?`;

var postStory6 = `SQL Server ranks alongside Oracle as the premier database
platform in wide use today.  It carries a large footprint and can be quite
persnickity during installation, but it runs very well and delivers a lot of 
bang for the buck.`;

var postStory7 = `MongoDB will come as a surprise to any long-time SQL database
programmer, as it is simple to learn and comes with very little overhead.`;

buildThisThing();

function buildThisThing() {
    var container = document.getElementById("container");
    container.appendChild(buildHeader());
    container.appendChild(buildContent());
}

function buildHeader() {
    var header = document.createElement("header");
    header.appendChild(buildWebName());
    header.appendChild(buildNavigation());
    return header;
}

function buildWebName() {
    var webName = document.createElement("h1");
    webName.textContent = "HighOnCode";
    return webName;
}

function buildNavigation() {
    var navigation = document.createElement("navbar");
    for (var i = 0; i < 3; i++) {
        var items = ["Home ", "Categories ", "About "];
        var anchor = document.createElement("a");
        anchor.setAttribute("href", "#");
        anchor.textContent = items[i];
        navigation.appendChild(anchor);
    }
    return navigation;
}

function buildContent() {
    var mainContent = document.createElement("mainContent");
    mainContent.appendChild(buildHeadliner());
    var post1 = buildPost("Hello Watchkit", postStory1);
    var post2 = buildPost("Intro to Swift", postStory2);
    var post3 = buildPost("A Developer's Favorite - C#", postStory3);
    var post4 = buildPost("An albatross around one's neck", postStory4);
    var post5 = buildPost("The world's last remaining dinosaur - Visual Basic", postStory5);
    var post6 = buildPost("A Solid Database Engine Built on SQL", postStory6);
    var post7 = buildPost("Another Solid Database Engine Built on NoSQL", postStory7);
    mainContent.appendChild(post1);
    mainContent.appendChild(post2);
    mainContent.appendChild(post3);
    mainContent.appendChild(post4);
    mainContent.appendChild(post5);
    mainContent.appendChild(post6);
    mainContent.appendChild(post7);
    return mainContent;
}

function buildHeadliner() {
    var headliner = document.createElement("div");
    headliner.setAttribute("class", "topstory");
    var storyHeadline = document.createElement("h2");
    storyHeadline.textContent = "Curse of the Current Reviews";
    headliner.appendChild(storyHeadline);
    var storyText = document.createElement("p");
    storyText.textContent = textStory;
    headliner.appendChild(storyText);
    return headliner;
}

function buildPost(headline, postStory) {
    var post = document.createElement("article");
    var headline = buildPostHeadline(headline);
    post.appendChild(headline);
    var desc = document.createElement("p");
    desc.textContent = postStory;
    post.appendChild(desc);
    var footer = buildPostFooter();
    post.appendChild(footer);
    return post;
}

function buildPostHeadline(headline) {
    var element = document.createElement("h3");
    var link = document.createElement("a");
    link.setAttribute("href", "#");
    link.setAttribute("class", "post-headline");
    link.textContent = headline;
    element.appendChild(link);
    return element;
}

function buildPostFooter() {
    var footer = document.createElement("footer");
    footer.setAttribute("class", "post-footer");

    var comments = document.createElement("div");
    comments.textContent = `${getRandomNumber()} comments`;
    footer.appendChild(comments);

    var likes = document.createElement("div");
    likes.textContent = `${getRandomNumber()} likes`;
    footer.appendChild(likes);
    return footer;
}

function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}