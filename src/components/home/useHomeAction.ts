import { useEffect, useState } from "react";
import { useInViewEffect } from "react-hook-inview";

import { searchItunesData, searchItunesDataClear } from "../../store/itunes/action";
import { ISearchApiParams } from "../../common/interfaces";
import { useAppDispatch } from "../../store/useStore";

const useHomeAction = () => {

    const [searchText, setSearchText] = useState<string>("");
    const [isLastElement, setIsLastElement] = useState<boolean>(false)
    const [dataLimit, setDataLimit] = useState<number>(10);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(searchItunesDataClear());
    }, []);

    /* call api using dispatch method */
    const getSearchedData = async () => {
        let searchParams: ISearchApiParams = {
            term: searchText.replaceAll(" ", "+"),
            limit: dataLimit,
            media: "music",
            entities: "musicArtist,album,song"
        };

        dispatch(searchItunesData(searchParams));
    }

    const onChangeInputText = (text: string) => {
        setSearchText(text);
    }

    /* indicate while click on search button */
    const onSearch = () => {
        getSearchedData();
    }

    /* indicate while click on clear button in search input */
    const onClearSearchInput = () => {
        setSearchText("");
        dispatch(searchItunesDataClear());
        setDataLimit(10);
    }

    /* this is reference for last iten in list */
    const refFinalElement = useInViewEffect(
        ([entry], observer) => {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
            }
            setIsLastElement(entry.isIntersecting);
        },
        { threshold: 0.5 }
    );

    /* this is for update page size while reach the final element */
    useEffect(() => {
        if (isLastElement) {
            setDataLimit((dataLimit) => dataLimit + 10);
        }
    }, [isLastElement]);

    useEffect(() => {
        if (dataLimit > 10) {
            getSearchedData();
        }
    }, [dataLimit]);

    return { refFinalElement, onChangeInputText, onClearSearchInput, onSearch }
}

export default useHomeAction;