import { useState } from "react";
import { SearchInputProps } from ".";

const useSearchInputAction = (props: SearchInputProps) => {

    const [searchValue, setSearchValue] = useState<string>("");

    const onChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.currentTarget.value);
        props.onChangeInputText(event.currentTarget.value);
    }

    const onClearInput = () => {
        setSearchValue("");
        props.onClear();
    }

    const onSubmit = () => {
        props.onSubmit();
    }

    return { searchValue, onChangeInputValue, onClearInput, onSubmit }
};

export default useSearchInputAction;