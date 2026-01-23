export function getUser(req, res) {
    try {
        return res.status(200)
            .json({ user: req.user });
    } catch (err) {
        console.log("Error fetching the required user: ", err);
        return res.status(500)
                    .json({
                        message: "Internal server error",
                        error: err
                    });
    }
}