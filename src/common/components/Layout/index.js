import { useEffect } from "react";
import { connect } from "react-redux";
import {
  setHeadLogoColors,
  setBodyLogoColors,
} from "./redux/thunks";
import { Themes } from "../../constants/themes";
import LogoHead from '../Logo/LogoHead';

const Layout = ({
  children,
  themeName,
  headLogoTextColor,
  headLogoIconColor,
  setHeadLogoColors,
  setBodyLogoColors,
}) => {

  useEffect(() => {
    if (themeName) {
      let theme = Themes[themeName];
      setHeadLogoColors(theme.headLogoTextColor, theme.headLogoIconColor);
      setBodyLogoColors(theme.bodyLogoTextColor, theme.bodyLogoIconColor);
      let props = theme.props;
      props.forEach(p => {
        console.log(`changing prop: `, p.property);
        document.documentElement.style.setProperty(p.property, p.value);
      });
    }
  }, [themeName]);

  return (
    <>
      <nav className="menu">
        <div className="header-img">
          <LogoHead
            textColor={headLogoTextColor}
            iconColor={headLogoIconColor}
          />
        </div>
      </nav>
      <div className="content">
        {children}
      </div>
    </>

  )

}

const mapStateToProps = ({layout}) => {
  return {
    themeName: layout.themeName,
    headLogoTextColor: layout.headLogoTextColor,
    headLogoIconColor: layout.headLogoIconColor,
  };
};

const mapDispatchToProps = {
  setHeadLogoColors,
  setBodyLogoColors,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);