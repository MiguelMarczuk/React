import Home from "./pages/home";
import CreateItems from "./pages/items/CreateItems";
import ItemsLayout from "./pages/items/Layout";
import ListItems from "./pages/items/ListItems";
import ShowIntems from "./pages/items/ShowItems";
import UpdateItem from "./pages/items/UpdateItem";
import RootLayout from "./pages/Rootlayout";

const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  children: [
    { index: true, element: <Home /> },
    {
      path: "items",
      element: <ItemsLayout />,
      children: [
        { index: true, element: <ListItems /> },
        { path: "new", element: <CreateItems /> },
        { path: ":id", element: <ShowIntems /> },
        { path: ":id/update", element: <UpdateItem /> }
      ]
    }
  ]
}])

export default router;