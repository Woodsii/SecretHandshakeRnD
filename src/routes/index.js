const constructorMethod = (app) => {
    // for now, just send everything to the homepage.

    app.use("/home", async (req, res) => {
        try {
            res.render("pages/home", {
                title: "Yayyy"
            });
        } catch (e) {
            console.error("Render error:", e);
            return res.status(500).json(e);
        }
    }); 

    app.use("*", (req, res) => {
      res.redirect("/home");
    });
  };
  
  export default constructorMethod;