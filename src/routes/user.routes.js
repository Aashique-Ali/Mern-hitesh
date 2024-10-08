const { Router } = require("express");
const {
    logoutUser,
    registerUser,
    loginUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
    updateUserAvatar,
    updateUserCoverImage,
    getUserChannelProfile,
    getWatchHistory,
} = require("../controllers/user.controller");
const verifyjwt = require("../middlewares/auth.middleware");

const upload = require("../middlewares/multer.middleware");

const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1,
        },
        {
            name: "coverImage",
            maxCount: 1,
        },
    ]),
    registerUser
);

router.route("/login").post(loginUser);

router.route("/logout").post(verifyjwt, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(verifyjwt, changeCurrentPassword);
router.route("/current-user").get(verifyjwt, getCurrentUser);
router.route("/update-account").patch(verifyjwt, updateAccountDetails);
router
    .route("/avatar")
    .patch(verifyjwt, upload.single("avatar"), updateUserAvatar);
router
    .route("/cover-image")
    .patch(verifyjwt, upload.single("coverImage"), updateUserCoverImage);
router.route("/c/:username").get(verifyjwt, getUserChannelProfile);
router.route("/history").get(verifyjwt, getWatchHistory);

module.exports = router;
