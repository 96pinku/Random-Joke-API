import express from "express";
import axios from "axios";

const app = express();
const port = process.env.PORT || 8080;

const helper = async () => {
    const response = await axios.get("https://api.api-ninjas.com/v1/dadjokes", {
        headers: {
            'x-api-key': "5F1Cq53fKABKF8ENs/5fag==3GkYAisNzzfUIHLy"
        }
    });
    return response.data;
}

app.get("/joke/random", async (req, res) => {
    const joke = await helper();
    res.json({ joke });
});

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});