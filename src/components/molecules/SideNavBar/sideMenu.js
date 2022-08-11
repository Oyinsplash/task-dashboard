import  Dashboard from "../../../assets/icons/dashoard.jsx";
import DashboardII from "../../../assets/icons/dashoardII.jsx";
import DashboardIII from "../../../assets/icons/dashboardiii"
import Settings from "../../../assets/icons/settings.jsx";
import Chat from "../../../assets/icons/chat.jsx";
import Upload from "../../../assets/icons/upload.jsx";


export const links = [
  { path: "/", icon: <Dashboard /> },
  { icon: <DashboardII />, path: "/analytics" },
  { icon: <DashboardIII />, path: "/records" },
  { icon: <Settings/>, path: "/settings" },
  { icon: <Chat/>, path: "/chat" },
  { icon: <Upload/>, path: "/upload" },
];
