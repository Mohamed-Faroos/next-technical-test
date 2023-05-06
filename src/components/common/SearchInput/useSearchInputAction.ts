import { useState } from "react";
import { SearchInputProps } from ".";

const useSearchInputAction = (props: SearchInputProps) => {

    const [searchValue, setSearchValue] = useState<string>("");

    /* method to set changing input value */
    const onChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.currentTarget.value);
        props.onChangeInputText(event.currentTarget.value);
    };

    /* method to clear input value */
    const onClearInput = () => {
        setSearchValue("");
        props.onClear();
    };

    /* this method will call while click on search button */
    const onSubmit = () => {
        props.onSubmit();
    };

    return { searchValue, onChangeInputValue, onClearInput, onSubmit };
};

export default useSearchInputAction;