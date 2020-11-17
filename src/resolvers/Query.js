// David Walshe
// 17/11/2020

const Query = {
    me() {
        return {
            id: "123abc",
            name: "Dave",
            email: "me@email.com",
            age: null
        }
    },
    users(parent, args, {db}, info) {
        if (!args.query) {
            return db.users
        }

        return db.users.filter((user) => {
            return user.name.toLowerCase().includes(args.query.toLowerCase())
        })
    },
    posts(parent, args, {db}, info) {
        if (!args.query) {
            return db.posts
        }

        return db.posts.filter((post) => {
            return post.title.toLowerCase().includes(args.query.toLowerCase())
        })
    },
    comments(parent, args, {db}, info) {
        if (!args.query) {
            return db.comments
        }

        return db.comments.filter((comment) => {
            return comment.id.toLowerCase().includes(args.query.toLowerCase())
        })
    }
}

export {Query as default}