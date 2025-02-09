import jwt from "jsonwebtoken";

const sendCookieUser = (user,res, message, statusCode) => {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
    res.status(statusCode).cookie("token", token, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000
    }).json({
        success: true,
        message: message
    })
}

const sendCookiePost = (post, req, res, message, statusCode) => {
    if (!req.user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    const token = jwt.sign({ _id: req.user._id }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });
    res
      .status(statusCode)
      .cookie("token", token, {
        httpOnly: true,
        secure:true 
      })
      .json({
        success: true,
        message,
        post,
      });
  };

  // check if we can add cases where do not need to show the admin will not show
  const sendCookieAdmin = (admin, res, message, statusCode) => {
    const token = jwt.sign({ _id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });
    res
      .status(statusCode)
      .cookie("token", token, {
        httpOnly: true,
        secure:true 
      })
      .json({
        success: true,
        message,
        admin,
      });
  };

export { sendCookieUser,sendCookiePost ,sendCookieAdmin}