import Home from "./pages/Home";
import BraceletDesigner from "./pages/BraceletDesigner";

const routes = [
  {
    path: '/',
    component: <Home />,
    exact: true,
  },
  {
    path: '/bracelet-designer',
    component: <BraceletDesigner />,
    exact: true,
  },
];

export default routes;