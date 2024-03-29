const mongoose = require("mongoose");

const createUsers = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Required Name User"],
      minlength: [3, "Name Too Short To Create"],
      maxlength: [32, "Name Too long To Create"],
    },
    slug: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Required E-mail User"],
      trim: true,
      unique: [true, "E-mail Must Be Unique"],
    },
    password: {
      type: String,
      required: [true, "Required Password User"],
      minlength: [6, "Password Too Short To Create"],
    },
    passwordDB: {
      type: String,
      minlength: [6, "Password DashBoard Too Short To Create"],
    },
    passwordTimeUpdate: Date,
    phone: {
      type: Number,
    },
    imageProfile: {
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "manger", "user"],
      default: "admin",
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
    address: [
      {
        id: { type: mongoose.Schema.Types.ObjectId },
      },
    ],
    passwordResthashedCode: {
      type: String,
    },
    passwordRestVerify: {
      type: Boolean,
    },
    passwordRestExpires: {
      type: String,
    },
  },
  { timestamps: true }
);

const ImageURL = (doc) => {
  if (doc.imageProfile) {
    const image = `${process.env.BASE_URL}/users/${doc.imageProfile}`;
    doc.imageProfile = image;
  }
};
createUsers.post("init", (doc) => {
  ImageURL(doc);
});
createUsers.post("save", (doc) => {
  ImageURL(doc);
});
// createUsers.pre("save", async function (next) {
//   this.password = await bcrypt.hash(this.password, 12);
//   next();
// });
const createUsersModel = mongoose.model("Users", createUsers);
module.exports = createUsersModel;
