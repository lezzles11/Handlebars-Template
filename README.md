# Basic Handlebars Example :rocket:

## Purpose :dark_sunglasses:

The purpose of this repository is to demonstrate the various users of handlebars - namely, how to loop through data, use partials, as well as layout the page well.

### Setup :open_book:

1. cd into the folder
2. Download the needed packages

```
npm install
```

3. Start the file

```
node index.js
```

### User Stories :telescope:

1. Users will be able to understand how handlebars work, and be able to

### Useful Code Snippets :bulb:

#### To loop through an array of objects

in partials/posts.hbs

```
<div class="posts">
    <div class="row justify-content-center">
        {{#each posts}}
        <div class="col-lg-7" style="margin-top: 50px;">
            <div class="card">

                <img src="{{this.image}}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Posted by {{this.author}}</h5>

                    {{#if this.comments}}
                    <ul class="list-group">
                        {{#each this.comments}}
                        <li class="list-group-item">{{getShortComment this}}</li>
                        {{/each}}
                    </ul>
                    {{else}}
                    <ul class="list-group">
                        <li class="list-group-item">Be first to comment on this post</li>
                    </ul>
                    {{/if}}
                </div>
            </div>
        </div>
        {{/each}}
    </div>
</div>
```

in index.js

```
app.get("/", (req, res) => {
  res.render("home", {
    posts: [
      {
        author: "Lesley",
        image: "https://picsum.photos/500/500",
        comments: ["why, this is a wonderful post!"],
      },
      {
        author: "Lezzles",
        image: "https://picsum.photos/500/500",
        comments: [
          "darling, this is an absolutely fantastic blog",
          "yes, dear, it's absolutely wonderful!",
        ],
      },
    ],
  });
});
```

#### To loop through a passed in array

// in index.js

```
app.get("/blog", function (req, res) {
  res.render("blog", {
    post: {
      author: "Lezzles",
      image: "https://picsum.photos/500/500",
      comments: [
        "darling, this is an absolutely fantastic blog",
        "yes, dear, it's absolutely wonderful!",
      ],
    },
  });
});
```

In views/blog.hbs

```
    {{#if post.comments}}
                    <ul class="list-group">
                        {{#each post.comments}}
                        <li class="list-group-item">{{this}}</li>
                        {{/each}}
                    </ul>
                    {{else}}
                    <ul class="list-group">
                        <li class="list-group-item">Be first to comment on this post</li>
                    </ul>
                    {{/if}}

```

## Sprint :athletic_shoe:

| Done? | Component | Priority | Estimated Time | Actual Time |
| ----- | --------- | :------: | :------------: | :---------: |
|       |           |    H     |    30 mins     |   30mins    |
|       |           |    M     |    30 mins     |   10mins    |
|       |           |    M     |    30 mins     |   15 mins   |

### Daily Stand Up :hourglass:

## Issues and Resolutions :flashlight:

**ERROR**: :gear:
**RESOLUTION**: :key:

| Issue                | Where it occurs | Possible solution | Actual solution |
| -------------------- | :-------------: | :---------------: | :-------------: |
| Creating a checklist |        H        |       2hrs        |     2.5hrs      |

#### What is one thing that I learned from doing this project? :books:

#### Credits :recycle:

[dotenv]()
[handlebars]()

#### Contributing :round_pushpin:

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Not sure how? Learn [Github](https://www.youtube.com/watch?v=3RjQznt-8kE&list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR)
Please make sure to update tests as appropriate.

#### License :memo:

[MIT](https://choosealicense.com/licenses/mit/)
