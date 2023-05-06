import { useCallback, useEffect, useState } from "react";
import { useInViewEffect } from "react-hook-inview";

import { searchItunesData, searchItunesDataClear } from "../../store/itunes/action";
import { ISearchApiParams } from "../../common/interfaces";
import { useAppDispatch } from "../../store/useStore";

const useHomeAction = () => {

    const [searchText, setSearchText] = useState<string>("");
    const [isLastElement, setIsLastElement] = useState<boolean>(false);
    const [dataLimit, setDataLimit] = useState<number>(0);

    const dispatch = useAppDispatch();

    /* call api using dispatch method while data limit changing */
    const getSearchedData = useCallback( () => {
        if (dataLimit > 0) {
            const searchParams: ISearchApiParams = {
                term: searchText.replaceAll(" ", "+"),
                limit: dataLimit,
                media: "music",
                entities: "musicArtist,album,song"
            };

            dispatch(searchItunesData(searchParams));
        }
    }, [dataLimit]);

    /* this method indicate while changing search input value */
    const onChangeInputText = (text: string) => {
        setSearchText(text);
    };

    /* this method indicate while click on search button */
    const onSearch = () => {
        setDataLimit(10);
    };

    /* this method indicate while click on clear button in search input */
    const onClearSearchInput = () => {
        setSearchText("");
        dispatch(searchItunesDataClear());
        setDataLimit(0);
    };

    /* this is reference for last item in list */
    const refFinalElement = useInViewEffect(
        ([entry], observer) => {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
            }
            setIsLastElement(entry.isIntersecting);
        },
        { threshold: 0.5 }
    );

    /* this is for update data while reach the last element */
    useEffect(() => {
        if (isLastElement) {
            setDataLimit((dataLimit) => dataLimit + 10);
        }
    }, [isLastElement]);

    /* this hook will load initially */
    useEffect(() => {
        dispatch(searchItunesDataClear());
        getSearchedData();
    }, []);

    return { refFinalElement, onChangeInputText, onClearSearchInput, onSearch };
};

export default useHomeAction;