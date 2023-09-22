const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const app = express();

mongoose
  .connect(
    "mongodb+srv://nathan:newKid123@cluster0.jtnezli.mongodb.net/registration"
  )
  .then(() => {
    console.log("connect to MongoBD");
  })
  .catch((err) => {
    console.log("Error connecting to mongoDB", err);
  });

app.set("view engine", "ejs");
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const User = mongoose.model("User", {
  name: String,
  email: String,
  address: String,
  phone: String,
  city: String,
  state: String,
});

app.get("/", async (req, res) => {
    try {
      const users = await User.find({});
      res.render("index", { users });
    } catch (err) {
      console.error(err);
    }
  });

  app.get("/register", (req, res) => {
    res.render("registration");
  });
  
  app.post("/register", async (req, res) => {
    const { name, email, address, city, state, phone, password } = req.body;
    const newUser = new User({ name, email, address, city, state, phone, password });
  
    try {
      await newUser.save();
      res.redirect("/");
    } catch (err) {
      console.error(err);
      res.redirect("/register");
    }
  });

  app.get("/edit/:_id", async (req, res) => {
    try {
      const userId = req.params._id; // Corrected parameter name here
      const user = await User.findById(userId);
      if (!user) {
        console.error("User not found.");
        return res.status(404).send("User not found");
      }
      res.render("edit", { user });
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  });
  
  app.post("/edit/:_id", async (req, res) => {
    try {
      const userId = req.params._id;
      const { name, email, address, city, state, phone } = req.body;
  
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { name, email, address, city, state, phone },
        { new: true }
      );
      
      if (!updatedUser) {
        console.error("User not found.");
        return res.status(404).send("User not found");
      }
  
      console.log("User updated:", updatedUser);
      res.redirect("/");
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  });
  
  
  

app.post("/delete/:_id", async (req, res) => {
    const userId = req.params._id; 
    try {
      const deletedUser = await User.findByIdAndRemove(userId);
      if (!deletedUser) {
        console.error("User not found.");
      }
      res.redirect("/");
    } catch (err) {
      console.error(err);
    }
  });
  
  

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
