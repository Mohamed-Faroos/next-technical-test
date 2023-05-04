import React, { useEffect } from "react"
import { Container, Divider } from "@material-ui/core";

import { SearchApiParams } from "../../common/interfaces";
import { getItunesSearchDataAPI } from "../../services/itunes/itunesService";
import SearchInput from "../common/SearchInput";
import useHomeAction from "./useHomeAction";
import ITunesCard from "../common/ITunesCard";

const Home = () => {

    // useEffect(() => {
    //     getSearchedData();
    // }, []);

    // const getSearchedData = async () => {
    //     let searchParams: SearchApiParams = {
    //         term: "anirudh",
    //         limit: 10,
    //         media: "music",
    //         entities: "musicArtist,album,song"
    //     };

    //     let result = await getItunesSearchDataAPI(searchParams);
    //     console.log("result:", result);
    // }

    const { onChangeInputText } = useHomeAction();

    return (
        <Container className="itunes-container" maxWidth={"sm"}>
            <div className="itunes-header">Search</div>
            <SearchInput onChangeInputText={onChangeInputText} />
            <div className="itunes-result-container">
                <Divider/>
                <ITunesCard/>
                <Divider/>
                <ITunesCard/>
                <Divider/>
                <ITunesCard/>
                <Divider/>
                <ITunesCard/>
                <Divider/>
                <ITunesCard/>
                <Divider/>
                <ITunesCard/>
                <Divider/>
                <ITunesCard/>
                <Divider/>
                <ITunesCard/>
                <Divider/>
                <ITunesCard/>
            </div>
        </Container>
    )
}

export default Home;