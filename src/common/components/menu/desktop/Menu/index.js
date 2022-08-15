import { useEffect, useState } from "react";
import { connect } from "react-redux";
import MenuItem from "../MenuItem";

const Menu = ({
  data
}) => {

  const [menuItems, setMenuItems] = useState(<></>);

  useEffect(() => {
    let items = [];
    data.forEach(d => {
      items.push(
        <MenuItem
          key={d.text}
          data={d}
        />
      );
    });
    setMenuItems(items);
  }, [data]);

  return (
    <ul className="menu desktop">
      {menuItems}
    </ul>
  );
}

const mapStateToProps = ({layout}) => {
  return {
    data: layout.menuItems,
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);