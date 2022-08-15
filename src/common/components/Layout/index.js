import { useEffect } from "react";
import { connect } from "react-redux";
import { setHeadLogoColors } from "./redux/thunks";
import { Themes } from "../../constants/themes";
import LogoHead from '../Logo/LogoHead';

const Layout = ({
  children,
  themeName,
  headLogoTextColor,
  headLogoIconColor,
  setHeadLogoColors,
}) => {

  useEffect(() => {
    if (themeName) {
      let theme = Themes[themeName];
      setHeadLogoColors(theme.headLogoTextColor, theme.headLogoIconColor);
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
    setHeadLogoValues: layout.setHeadLogoValues,
  };
};

const mapDispatchToProps = {
  setHeadLogoColors,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);