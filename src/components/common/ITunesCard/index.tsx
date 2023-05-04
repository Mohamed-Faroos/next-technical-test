import React from 'react';
import { Avatar } from '@material-ui/core';

const ITunesCard = () => {
    return (
        <div className="itunes-card-container">
            <Avatar className="itunes-card-image-artist" sizes="lg" alt="Remy Sharp" src="https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f3b" />
            {/* <img className="itunes-card-image-others" src={"https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b"} alt={"artist"} /> */}
            <div className="itunes-card-detail-view">
                <div className="itunes-card-title">Mockingbird</div>
                <div className="itunes-card-sub-title">Artist • Eminem</div>
            </div>
        </div>
    )
};

export default ITunesCard;