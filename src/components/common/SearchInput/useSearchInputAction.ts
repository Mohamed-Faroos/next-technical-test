import { useState } from "react";
import { SearchInputProps } from ".";

const useSearchInputAction = (props:SearchInputProps) => {
    
    const [searchValue, setSearchValue] = useState<string>("");

    const onChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setSearchValue(event.currentTarget.value);
        props.onChangeInputText(event.currentTarget.value);
    }

    const onClearInput = () => {
        setSearchValue("");
        props.onChangeInputText("");
    }

    return { searchValue, onChangeInputValue, onClearInput }
};

export default useSearchInputAction;