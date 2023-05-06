import React from "react";
import { Avatar } from "@material-ui/core";

import { Itunes } from "../../../common/interfaces";
import { TUNES_DATA_TYPE } from "../../../common/enums";
import * as properties from "./../../../common/constants/properties";

export type ITunesCardProps = {
    tunes: Itunes
}

/* rendering different cards using wrapper type */
const renderCards = (tunes: Itunes) => {
    
    /* render if wrapper-type is artist */
    if (tunes.wrapperType === TUNES_DATA_TYPE.ARTIST) {
        return (
            <div>
                <Avatar className="itunes-card-image-artist" sizes="lg" alt={tunes.artistName} src={tunes.artworkUrl} />
                <div className="itunes-card-detail-view">
                    <div className="itunes-card-title">{tunes.artistName}</div>
                    <div className="itunes-card-sub-title">{properties.ARTIST_LBL}</div>
                </div>
            </div>
        );
    /* render if wrapper-type is collection */
    } else if (tunes.wrapperType === TUNES_DATA_TYPE.COLLECTION) {
        return (
            <div>
                <img className="itunes-card-image-others" alt={tunes.artistName} src={tunes.artworkUrl} />
                <div className="itunes-card-detail-view">
                    <div className="itunes-card-title">{tunes.collectionName}</div>
                    <div className="itunes-card-sub-title">{properties.ALBUM_LBL}{tunes.artistName} </div>
                </div>
            </div>
        );
    /* render if wrapper-type is track */
    } else if (tunes.wrapperType === TUNES_DATA_TYPE.TRACK) {
        return (
            <div>
                <img className="itunes-card-image-others" alt={tunes.artistName} src={tunes.artworkUrl} />
                <div className="itunes-card-detail-view">
                    <div className="itunes-card-title">{tunes.trackName}</div>
                    <div className="itunes-card-sub-title"> {properties.SONG_LBL}{tunes.artistName} </div>
                </div>
            </div>
        );
    }
};

const ITunesCard = (props: ITunesCardProps) => {
    return (
        <div data-testid={"itunes-card"} className="itunes-card-container">
            {renderCards(props.tunes)}
        </div>
    );
};

export default ITunesCard;