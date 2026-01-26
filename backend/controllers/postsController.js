import Video from "../models/Video.js";

export const getPosts = (req, res) => {
    try {
        const posts = Video.find({});

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