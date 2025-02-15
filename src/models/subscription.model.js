const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema(
    {
        subscriber: {
            type: mongoose.Schema.Types.ObjectId, //the one who is subscribing
            ref: "User",
        },
        channel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const Subscription = new mongoose.model("Subscription", subscriptionSchema);

module.exports = Subscription;
