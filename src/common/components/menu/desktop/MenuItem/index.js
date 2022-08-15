import { useEffect, useState } from "react";


const MenuItem = ({data, subPosition}) => {

  const [subMenu, setSubMenu] = useState(<></>);

  useEffect(() => {
    if (data) {

    }
  }, [data]);

  const showSubMenu = () => {

  }

  return (
    <li className="menu-link desktop">
      <a href={data.link}>{data.text}</a>
    </li>
  );
}

export default MenuItem;