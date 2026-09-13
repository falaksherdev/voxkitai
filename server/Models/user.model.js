import mongoose from "mongoose";

const pageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    path: {
      type: String,
      required: true,
      trim: true,
    },

    keywords: {
      type: [String],
      default: [],
    },
  },
  {
    _id: false,
  },
);

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    assistantName: {
      type: String,
      default: "VoxKit",
      trim: true,
    },

    businessName: {
      type: String,
      trim: true,
    },

    businessType: {
      type: String,
      trim: true,
    },

    businessDescription: {
      type: String,
      trim: true,
    },

    tone: {
      type: String,
      enum: ["friendly", "professional", "sales"],
      default: "friendly",
    },

    theme: {
      type: String,
      enum: ["dark", "light", "glass", "neon"],
      default: "neon",
    },

    enableVoice: {
      type: Boolean,
      default: true,
    },

    pages: {
      type: [pageSchema],
      default: [],
    },
    enableNavigation: {
      type: Boolean,
      default: true,
    },
    geminiApiKey: {
      type: String,
    },

    geminiStatus: {
      type: String,
      enum: ["active", "quota_exceeded", "invalid"],
      default: "active",
    },

    totalMessages: {
      type: Number,
      default: 0,
    },
    plan: {
      type: String,
      enum: ["free", "pro"],
      default: "free",
    },
    requestLimit: {
      type: Number,
      default: 200,
    },
    proExpiresAt: {
      type: Date,
      default: null,
    },
    isSetupComplete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);

export default User;
