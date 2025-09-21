import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Wallets = new Mongo.Collection("wallets");

// ✅ Publish to clients
if (Meteor.isServer) {
  Meteor.publish("wallets", function () {
    return Wallets.find();
  });
}

// ✅ Methods for insert + get
Meteor.methods({
  "wallets.insert"(address, balance) {
    Wallets.insert({ address, balance, createdAt: new Date() });
  },
  "wallets.get"(address) {
    return Wallets.findOne({ address });
  },
});
