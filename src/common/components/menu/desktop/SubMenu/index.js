import { useEffect, useRef, useState } from "react"
import SubMenuItem from "../MenuSubItem";


const SubMenu = ({showMenu, data, isFirstMenu, isLastMenu, isSubOfSub = false}) => {

  const menuRef = useRef();
  const [className, setClassName] = useState('sub-menu hide');
  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    if (showMenu) {
      setClassName(`sub-menu${isSubOfSub ? ' sub-sub' : ''}`);
    } else {
      setClassName(`sub-menu${isSubOfSub ? ' sub-sub' : ''} hide`);
    }
  }, [showMenu]);

  useEffect(() => {
    let items = [];
    data.forEach((d, i) => {
      let subMenuData = d.sub !== null && d.sub !== undefined
        ? d.sub
        : null;
      items.push(
        <SubMenuItem
          key={`sub-${i}-${d.text}`}
          data={d}
          subMenuData={subMenuData}
        />
      );
    });
    setDisplayItems(items);
  }, [data]);

  useEffect(() => {
    if (isFirstMenu) {
      menuRef.current.style.left = '0';
    } else if (isLastMenu) {
      menuRef.current.style.right = '0';
    } else {
      menuRef.current.style.left = '50%';
      menuRef.current.style.right = '50%';
      menuRef.current.style.transform = 'translate(-50%, 0)';
    }
  }, [isLastMenu]);

  return(
    <div className={className} ref={menuRef}>
      <ul>
        {displayItems}
      </ul>
    </div>
    
  );

}

export default SubMenu;