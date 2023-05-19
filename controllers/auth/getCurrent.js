const getCurrent = async (req, res) => {
    const { email, subscription } = req.user;
    console.log(email);
    res.json({
        email,
        subscription
    })
};

module.exports = getCurrent;