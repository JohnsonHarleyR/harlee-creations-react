import Home from "./pages/Home";
import BraceletDesigner from "./pages/BraceletDesigner";
import LayoutAssist from "./pages/LayoutAssist";

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
  {
    path: '/layout-assist',
    component: <LayoutAssist />,
    exact: true,
  },
];

export default routes;