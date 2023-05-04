import { useState } from "react";

const useHomeAction = () => {
    const [searchText, setSearchText] = useState<string>("");
    
    const onChangeInputText = (text: string) => {
        setSearchText(text);
    }

    return { onChangeInputText }
}

export default useHomeAction;