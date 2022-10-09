import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { Link } from "react-router-dom";
import "./styles.css";

const styles = theme => ({
  container: {
    position: "relative",
    margin: "40px",
    width: '100vw',
    overflowX: 'hidden',
  },
  descriptionText: {
    fontSize: "14px",
    fontFamily: '"Noto Sans", sans- serif',
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    objectFit: 'contain,cover',
    objectPosition: 'center',
    overflow: 'hidden',
    height: '40vh',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      height: '55vh',
    },
    [theme.breakpoints.up('md')]: {
      height: '55vh',
    },
  },
});
class Parallax extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { content, classes } = this.props;
    return (
      <div className={classNames(classes.container, "container")}>
        <div className="row">
          <div
            className={classNames("slider", "col-12")}
          >
            <img
              src={content.image1}
              alt="Loading..."
              className={classNames("image1M", classes.image, "col-12 rounded")}
            />
            <img
              src={content.image2}
              alt="Loading..."
              className={classNames("image2M", classes.image, "col-12 rounded")}
            />
            <img
              src={content.image3}
              alt="Loading..."
              className={classNames("image3M", classes.image, "col-12 rounded")}
            />
          </div>
          <div
            className={classNames("col-12 homeCard")}
            style={{ textAlign: 'center' }}
          >
            <Link to={content.link} className={" title"}>
              <h1 style={{ color: "lightblue" }} className="title">
                {content.heading}
              </h1>
            </Link>
            <p className={classes.descriptionText}>{content.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

Parallax.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
};
export default withStyles(styles)(Parallax);
