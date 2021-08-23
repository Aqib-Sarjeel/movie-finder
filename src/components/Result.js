import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Sidebar from "./Sidebar";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    left: "25%",
    right: "25%",
    width: "auto",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const Result = (props) => {
  const [data, setdata] = useState([]);

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = (val) => {
    setOpen(true);
    setdata(val);
    console.log("this is val==>", val);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#efefef";
  }, []);

  return (
    <React.Fragment>
      <Sidebar />
      <div className="main">
        <div className="flex-container">
          {props.getData.map((m) => {
            return (
              <React.Fragment key={m.id}>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  <div className={classes.paper}>
                    {[data].map((movieDaata) => {
                      return (
                        <React.Fragment key={movieDaata.id}>
                          <div className="text-center">
                            <img
                              height="400px"
                              width="auto"
                              src={
                                "https://image.tmdb.org/t/p/w500" +
                                movieDaata.poster_path
                              }
                            />
                          </div>

                          <h2 id="simple-modal-title">
                            {movieDaata.title || <p>Title missing...</p>}
                          </h2>
                          <h4>
                            {movieDaata.popularity > 60 ? (
                              <div>
                                <span>Popularity:</span>
                                <span className="text-success">
                                  {movieDaata.popularity}
                                </span>
                              </div>
                            ) : (
                              <div>
                                <span>Popularity:</span>
                                <span className="text-danger">
                                  {movieDaata.popularity}
                                </span>
                              </div>
                            )}
                          </h4>
                          <strong>Movie Description</strong>
                          <p id="simple-modal-description">
                            {movieDaata.overview}
                          </p>
                          {movieDaata.adult ? (
                            <div>
                              <h3 className="text-danger">18+</h3>
                            </div>
                          ) : (
                            <div>
                              <span
                                style={{
                                  height: "30px",
                                  width: "30px",
                                  borderRadius: "50%",
                                  display: "inline-block",
                                  backgroundColor: "green",
                                }}
                              ></span>
                            </div>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </Modal>
                <div
                  onClick={() => handleOpen(m)}
                  className="card bt-card"
                  style={{ width: "18rem" }}
                >
                  <img
                    className="card-img-top"
                    src={"https://image.tmdb.org/t/p/w500" + m.poster_path}
                    alt="Poster Not Found"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      {m.title || m.original_name}
                    </h5>
                    <h6 className="card-text text-muted text-center">
                      Release Date:{" "}
                      {m.release_date || (
                        <span className="text-danger">Not Availabe</span>
                      )}
                      <br />
                      Rating:
                      <span className="text-success">{m.vote_average}</span>
                    </h6>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Result;
