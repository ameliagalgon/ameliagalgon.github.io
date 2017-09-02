var blogPosts = [];

var post = {
    title: null,
    date: null,
    content: null
}

var createNewPost = function(title, content){
    var newPost = jQuery.extend({}, post);
    newPost.title = title;
    newPost.date = new Date();
    newPost.content = content;

    blogPosts.push(newPost);
}


$(document).ready(function(){
    createNewPost("My first blog post", "Hello");
    //get the blog section
    var blog = $('.blog');
    //send all of the blogPosts to the html
    for(var i = blogPosts.length - 1; i >= 0; i--){
        var title = document.createElement('div');
        var date = document.createElement('div');
        var content = document.createElement('div');
        $(title).addClass("title").append(blogPosts[i].title);
        $(date).addClass("title").append(blogPosts[i].date);
        $(content).addClass("title").append(blogPosts[i].content);

        //create blog post
        var blogPost = document.createElement('div');
        $(blogPost).addClass('blog-post');
        $(blogPost).append(title).append(date).append(content);
        //add post to html
        blog.append(blogPost);
    }
});
