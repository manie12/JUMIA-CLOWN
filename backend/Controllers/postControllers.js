const postSchema = require('../Models/postModels');

module.exports.post__get = async (req, res) => {

    try {
        const data = await postSchema.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(401).json(error);
    }

}

module.exports.set__posts = async (req, res) => {
    const posts = req.body;
    try {
        const data = await postSchema.create(posts)
        res.status(200).json(data)

    } catch (error) {
        res.status(400).json(error)
    }






}