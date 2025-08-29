import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/home";
import ItemsLayout from "./pages/items/ItemsLayout";
import CreateItems from "./pages/items/Createitems";
import ListItems from "./pages/items/ListItems";
import ShowItem from "./pages/items/ShowItem";
import UpdateItem from "./pages/items/UpdateItem";

const router = createBrowserRouter([{

    path: "/",
    element: <RootLayout/>,
    children: [
        {index: true, element: <Home/>},
        {
            path: "items",
            element: <ItemsLayout/>,
            children:[
                {path: "createItems", element: <CreateItems/> },
                {path: "listItems", element: <ListItems/>},
                {path: ":id", element: <ShowItem/>},
                {path: "itemsLayout", element: <ItemsLayout/>},
                {path: ":id/update", element: <UpdateItem/>}
            ]
        }
       
    ]


}])


export default  router