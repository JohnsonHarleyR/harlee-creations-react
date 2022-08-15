import { connect } from "react-redux";
import LogoBody from "../../common/components/Logo/LogoBody";

const Home = ({
  logoTextColor,
  logoIconColor,
}) => {

  //console.log('home component');

  return (
    <div className='section'>
      <LogoBody
        height={200}
        textColor={logoTextColor}
        logoColor={logoIconColor}
      />
      <span>
      Here is the <b>home <i>page</i></b>, <i>whoo!</i>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);