import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import { CloseRounded, SearchSharp } from '@material-ui/icons';

import useSearchInputAction from './useSearchInputAction';
import * as properties from './../../../common/constants/properties';

export type SearchInputProps = {
    onChangeInputText(text: string): void,
    onClear(): void,
    onSubmit(): void
}

const SearchInput = (props: SearchInputProps) => {
    
    const { searchValue, onChangeInputValue, onClearInput, onSubmit } = useSearchInputAction(props);

    /* rendering clear button if input value is found */
    const renderClearButton = () => {
        if (searchValue) {
            return (
                <IconButton onClick={onClearInput} className="itunes-close-button" size="medium">
                    <CloseRounded fontSize="inherit" />
                </IconButton>
            )
        }
    }
    return (
        <div className="itunes-search-input-container">
            <SearchSharp className="itunes-search-icon" fontSize="inherit" />
            <input
                className="itunes-search-input"
                type="search"
                value={searchValue}
                placeholder={properties.SEARCH_INPUT_PLACEHOLDER}
                onChange={onChangeInputValue}
            />
            <Button disabled={!searchValue} onClick={onSubmit} className="itunes-search-button">
                {properties.SEARCH_BUTTON_LBL}
            </Button>
            {renderClearButton()}
        </div>
    );
}

export default SearchInput;