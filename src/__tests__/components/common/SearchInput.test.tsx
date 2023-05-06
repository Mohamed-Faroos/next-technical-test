import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SearchInput from "./../../../components/common/SearchInput";

describe("<SearchInput/>", () => {

    /* test input text changing */
    it("should render entering text", () => {
        const onChangeInputText = jest.fn((value) => { });
        const onClear = jest.fn(() => { });
        const onSubmit = jest.fn(() => { });

        render(<SearchInput onChangeInputText={onChangeInputText} onClear={onClear} onSubmit={onSubmit} />);
        const searchInput = screen.queryByTestId("itunes-search-input") as HTMLInputElement;

        fireEvent.change(searchInput, { target: { value: "test" } });

        expect(searchInput.value).toBe("test");
    });

    /* test - close button render while input search text available */
    it("should render clear button", () => {
        const onChangeInputText = jest.fn((value) => { });
        const onClear = jest.fn(() => { });
        const onSubmit = jest.fn(() => { });

        render(<SearchInput onChangeInputText={onChangeInputText} onClear={onClear} onSubmit={onSubmit} />);
        const searchInput = screen.queryByTestId("itunes-search-input") as HTMLInputElement;
        fireEvent.change(searchInput, { target: { value: "test" } });
        expect(screen.getByTestId("itunes-close-button")).toBeInTheDocument();
    });

    /* test - rendering disabled search button at the initial */
    it("should render disabled search button at the initial", () => {
        const onChangeInputText = jest.fn((value) => { });
        const onClear = jest.fn(() => { });
        const onSubmit = jest.fn(() => { });

        render(<SearchInput onChangeInputText={onChangeInputText} onClear={onClear} onSubmit={onSubmit} />);

        const searchButton = screen.getByTestId("itunes-search-button") as HTMLButtonElement;
        expect(searchButton.disabled).toBe(true);
    });

    // /* test - rendering disabled search button while search input available */
    it("should render not disabled search button", () => {
        const onChangeInputText = jest.fn((value) => { });
        const onClear = jest.fn(() => { });
        const onSubmit = jest.fn(() => { });

        render(<SearchInput onChangeInputText={onChangeInputText} onClear={onClear} onSubmit={onSubmit} />);
        const searchInput = screen.queryByTestId("itunes-search-input") as HTMLInputElement;

        fireEvent.change(searchInput, { target: { value: "test" } });

        const searchButton = screen.getByTestId("itunes-search-button") as HTMLButtonElement;
        expect(searchButton.disabled).toBe(false);
    });
});

