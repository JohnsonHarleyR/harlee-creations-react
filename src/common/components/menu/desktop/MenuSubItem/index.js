import { useState } from "react";
import SubMenu from "../SubMenu";

const SubMenuItem = ({data, subMenuData}) => {

  const [showSubMenu, setShowSubMenu] = useState(false);
  
  const changeShowSubMenu = (doShow) => {
    //console.log(`show: ${doShow}`);
    setShowSubMenu(doShow);
  }

  return (
    <li 
      className="sub-menu-link"
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
          isFirstMenu={false}
          isLastMenu={true}
          isSubOfSub={true}
        />
        : <></>
      }
    </li>
  );
};

export default SubMenuItem;