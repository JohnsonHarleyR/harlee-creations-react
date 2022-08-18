import { connect } from 'react-redux';
import LogoBody from "../../common/components/Logo/LogoBody";

const LayoutAssist = ({
  logoTextColor,
  logoIconColor,
}) => {

  return (
    <div className='section'>
      <LogoBody
        height={200}
        textColor={logoTextColor}
        logoColor={logoIconColor}
      />
      <span>
      Here is an <b>example <i>page</i></b>, <i>whoo!</i>
      </span>

    </div>
  );
}

const mapStateToProps = ({home, layout}) => {
  return {
    logoTextColor: layout.bodyLogoTextColor,
    logoIconColor: layout.bodyLogoIconColor,
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutAssist);