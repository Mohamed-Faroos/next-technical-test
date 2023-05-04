import React from 'react';
import useSearchInputAction from './useSearchInputAction';
import { Button, IconButton } from '@material-ui/core';
import { CloseRounded, SearchSharp } from '@material-ui/icons';

export type SearchInputProps = {
    onChangeInputText(text: string): void
}

const SearchInput = (props:SearchInputProps) => {
    const { searchValue, onChangeInputValue, onClearInput } = useSearchInputAction(props);

    return (
        <div className="itunes-search-input-container">
            <SearchSharp className="itunes-search-icon" fontSize="inherit" />
            <input
                className="itunes-search-input"
                type="search"
                value={searchValue}
                placeholder="Artists, Albums and Songs"
                onChange={onChangeInputValue}
            />
            <Button className="itunes-search-button">
                search
            </Button>
            {
                searchValue &&
                <IconButton onClick={onClearInput} className="itunes-close-button" size="medium">
                    <CloseRounded fontSize="inherit" />
                </IconButton>
            }
        </div>
    );
}

export default SearchInput;