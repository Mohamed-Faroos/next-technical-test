import React from "react"
import { Box, Container, Divider, LinearProgress } from "@material-ui/core";

import SearchInput from "../common/SearchInput";
import { Itunes } from "../../common/interfaces";
import ITunesCard from "../common/ITunesCard";
import { useAppSelector } from "../../store/useStore";
import { RootState } from "../../store/store";
import useHomeAction from "./useHomeAction";
import * as properties from './../../common/constants/properties';

const Home = () => {

    const stateItunesData = useAppSelector((state: RootState) => state.itunes);
    const { refFinalElement, onChangeInputText, onClearSearchInput, onSearch } = useHomeAction();

    /* rendering list items or not found result UI */
    const renderItemList = () => {
        if (stateItunesData.data.tunes.length > 0) {
            return stateItunesData.data.tunes.map((tunes: Itunes, index: number) => {
                if (index === stateItunesData.data.tunes.length - 1) {
                    return (
                        <div key={index} ref={refFinalElement}>
                            <Divider />
                            <ITunesCard tunes={tunes} />
                        </div>
                    )
                } else {
                    return (
                        <div key={index}>
                            <Divider />
                            <ITunesCard tunes={tunes} />
                        </div>
                    )
                }
            })
        } if (stateItunesData.data.count === 0) {
            return (
                <div className="itunes-no-result-container" >
                    <div>{properties.NO_RESULT_LBL}</div>
                </div>
            )
        }
    }

    /* rendering Loading UI */
    const renderLoading = () => {
        if (stateItunesData.loading) {
            return (
                <Box sx={{ width: '100%' }}>
                    <LinearProgress className="itunes-loading-progress" />
                </Box>
            )
        }
    }
    return (
        <Container className="itunes-container" maxWidth={"sm"}>
            <div className="itunes-header">{properties.MAIN_SEARCH_HEADER}</div>
            <SearchInput
                onChangeInputText={onChangeInputText}
                onClear={onClearSearchInput}
                onSubmit={onSearch}
            />
            {renderLoading()}
            <div className="itunes-result-container">
                {renderItemList()}
            </div>
        </Container>
    )
}

export default Home;