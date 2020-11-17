// David Walshe
// 16/11/2020

// Dummy Data

const comments = [
    {
        id: "1",
        text: "Cool",
        author: "1",
        post: "1"
    },
    {
        id: "2",
        text: "OMG",
        author: "2",
        post: "1"
    },
    {
        id: "3",
        text: "Lame",
        author: "3",
        post: "2"
    },
    {
        id: "4",
        text: "Funny",
        author: "1",
        post: "3"
    }
]

const users = [
    {
        id: "1",
        name: "Dave",
        email: "me@email.com",
        comments: ["0", "3"]
    },
    {
        id: "2",
        name: "Grace",
        email: "me@email.com",
        comments: ["1"]
    },
    {
        id: "3",
        name: "John",
        email: "me@email.com",
        comments: ["2"]
    },
]

const posts = [
    {
        id: "1",
        title: "My Post",
        body: "My post message",
        published: true,
        author: users[0].id,
        comments: [comments[0].id, comments[3].id]
    },
    {
        id: "2",
        title: "Post 1",
        body: "A post message",
        published: true,
        author: users[0].id,
        comments: [comments[1].id]
    },
    {
        id: "3",
        title: "Post 2",
        body: "Another post message",
        published: true,
        author: users[2].id,
        comments: [comments[2].id]
    },
]

const db = {
    users,
    posts,
    comments
}


module.exports = {
    db
}