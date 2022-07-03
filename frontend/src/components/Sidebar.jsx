import './Sidebar.scss';

const Sidebar = ({ show }) => {
  const sidebarClass = ["sidebar"];

  if (show) {
    sidebarClass.push("show");
  }

  return < div className={sidebarClass.join(" ")}></div>;
};

export default Sidebar