import mongoose, { Schema, Types } from "mongoose";
import MongooseDelete from "mongoose-delete";

const schema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    first_name: {
      type: String,
      required: true,
      index: true,
    },
    last_name: {
      type: String,
      required: true,
      index: true,
    },
    nickname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    capital: {
      type: Number,
      index: true,
      required: true,
    },
    divisa: {
      type: String,
    },
    prefered_cryptocurrency: {
      type: String,
    },
  },
  {
    timestamps: true,
    autoCreate: true,
  }
);
schema.plugin(MongooseDelete, {
  deletedAt: true,
});
export const Profile = mongoose.model("Profile", schema);
export interface TProfile {
  _id?: Types.ObjectId;
  first_name: string;
  last_name: string;
  nickname?: string;
  capital: number;
  email: string;
  divisa?: string;
  prefered_cryptocurrency?: string;
}
