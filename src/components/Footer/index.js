import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  socialMedia: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  a: {
    height: "40px",
    width: "40px",
    // backgroundColor: "#f5f6fa",
    margin: "5px",
    marginRight: "20px",
    marginLeft: "20px",
    marginBottom: "10px",
    borderRadius: "20px",
    textAlign: "center",
    // boxShadow: "1px 1px 1px 1px #dcdde1",
    fontSize: "30px",
    lineHeight: "45px",
    zIndex: 205,
    // display: "block",
    transition: "all 0.3s linear",
    "&:hover": {
      fontSize: "36px"
    },
    [theme.breakpoints.down("sm")]: {
      margin: "10px",
      marginBottom: "6px"
    }
  },
  // facebook: {
  //   color: "#0018ff"
  // },
  // instagram: {
  //   color: "#e84393"
  // },
  // whatsapp: {
  //   color: "#23d364"
  // }
});
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.socialMedia}>
        <a
          href="https://www.facebook.com/Concettoiitdhanbad/"
          className={classes.a}
        >
          <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png"/>
        </a>
        <a
          href="https://www.instagram.com/concetto.iitism/"
          className={classes.a}
        >
          <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/>
        </a>
        {/* <a href="https://wa.me/919386667625" className={classes.a}>
          <FontAwesomeIcon icon={faWhatsapp} className={classes.whatsapp} />
        </a> */}
        <a
          href={
            "https://play.google.com/store/apps/details?id=com.rishabh.concetto2019"
          }
          target="_blank"
          rel="noopener noreferrer"
          className={classes.a}
          id="app-icon"
        >
          <img src="https://img.icons8.com/fluency/48/000000/google-play.png"/>
        </a>
        {/* <Tooltip
          placement="right"
          isOpen={this.state.tooltipOpen}
          target="map-icon"
          toggle={this.toggle}
        >
          View Campus Map
        </Tooltip> */}
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Footer);
