import Video from "../models/Video.js";

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Video.find({});

        return res.status(200)
                    .json({
                        message: "Posts fetched successfully",
                        posts
                    });
    } catch (err) {
        console.log("Error while fetching posts: ", err);
        return res.status(500)
                    .json({
                        message: "Internal server error"
                    })
    }
}

export const getLatestPosts = async (req, res) => {
    try {
        const latestPosts = await Video.find({}).sort({ createdAt: -1 }).limit(10);

        return res.status(200)
                    .json({
                        message: "Latest posts fetched successfully",
                        latestPosts
                    });
    } catch (err) {
        console.log("Error while fetching latest posts: ", err);
        return res.status(500)
                    .json({
                        message: "Internal server error"
                    })
    }
}

export const getByTitile = async (req, res) => {
    const { query } = req.params;

    try {
        const posts = await Video.find({ title: { $regex: query, $options: "i" } } );

        return res.status(200)
                    .json({
                        message: "Posts fetched successfully",
                        posts
                    });
    } catch (err) {
        console.log("Error while searching the posts: ", err);
        return res.status(500)
                    .json({
                        message: "Internal server error"
                    });
    }
}

export const getMyPosts = async (req, res) => {
    const id = req.user.accountId;
    try {
        const myPosts = (await Video.find({ accountId: id })).sort({ createdAt: -1 });

        return res.status(200)
                    .json({
                        message: "My posts fetched successfully.",
                        myPosts
                    });
    } catch (err) {
        console.log("Error while fetching my posts: ", err);
        return res.status(500)
                    .json({
                        message: "Internal server error"
                    });
    }
}

export const createPost = async (req, res) => {
    const { title, video, thumbnail, prompt } = req.body;
    const userId = req.user._id;

    try {
        const post = await Video.create({ title, video, thumbnail, prompt, creator: userId });

        return res.status(201)
                    .json({
                        message: "Post created successfully"
                    });
    } catch (err) {
        console.log("Error while creating post: ", err);
        return res.status(500)
                    .json({
                        message: "Internal server error"
                    })
    }
}