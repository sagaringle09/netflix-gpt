import Browse from "./components/Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
