import React from "react";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import "./index.scss";

export default function MatchCard() {
  return (
    <Card className="team_card">
      <div className="header">
        <span className="title">IPL LEAUGE</span>
      </div>
      <div className="teams">
        <div className="teamDetails">
          <div className="container">
            <img
              className="logo"
              src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RAR-CR1@2x.png"
            />
            <img
              className="avatar"
              src="https://d13ir53smqqeyp.cloudfront.net/player-images/5996.png"
            />
          </div>
          <span>IND</span>
        </div>
        <span className="vs">VS</span>
        <div className="teamDetails">
          <div className="container">
            <img
              className="logo"
              src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RAR-CR1@2x.png"
            />
            <img
              className="avatar"
              src="https://d13ir53smqqeyp.cloudfront.net/player-images/5996.png"
            />
          </div>
          <span>IND</span>
        </div>
      </div>
      <div>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </div>
    </Card>
  );
}
