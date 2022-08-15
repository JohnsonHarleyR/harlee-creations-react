import { useEffect } from "react";
import { connect } from "react-redux";
import { Themes } from "../../constants/themes";

const Layout = ({
  children,
  themeName,
}) => {

  useEffect(() => {
    if (themeName) {
      let props = Themes[themeName];
      props.forEach(p => {
        console.log(`changing prop: `, p.property);
        document.documentElement.style.setProperty(p.property, p.value);
      });
    }
  }, [themeName]);

  return (
    <>
      <header>
      
      </header>
      <div className="content">
        {children}
      </div>
    </>

  )

}

const mapStateToProps = ({layout}) => {
  return {
    themeName: layout.themeName,
  };
};

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);