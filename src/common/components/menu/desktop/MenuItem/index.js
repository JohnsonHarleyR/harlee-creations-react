import { useEffect, useState } from "react";
import SubMenu from "../SubMenu";


const MenuItem = ({data, isFirstItem, isLastItem}) => {

  const [subMenuData, setSubMenuData] = useState(null);
  const [showSubMenu, setShowSubMenu] = useState(false);

  useEffect(() => {
    if (data) {
      if (data.sub !== null) {
        setSubMenuData(data.sub);
      }
    }
  }, [data]);



  const changeShowSubMenu = (doShow) => {
    //console.log(`show: ${doShow}`);
    setShowSubMenu(doShow);
  }

  return (
    <li
      className="menu-link desktop"
      onMouseOver={() => {changeShowSubMenu(true)}}
      onMouseLeave={() => {changeShowSubMenu(false)}}
    >
      <a 
        href={data.link}
      >
        {data.text}
      </a>
      {subMenuData !== null
        ?
        <SubMenu
          showMenu={showSubMenu}
          data={subMenuData}
          isFirstMenu={isFirstItem}
          isLastMenu={isLastItem}
        />
        : <></>
      }
      
    </li>
  );
}

export default MenuItem;