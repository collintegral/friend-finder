import 'express';
import 'path';

const app = express();
const PORT = 8080;

app.use(express.urlencoded({standard: true}));
app.use(express.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, () => {
    console.log("Listening on PORT " + PORT);
});
