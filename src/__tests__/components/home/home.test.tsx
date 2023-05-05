import { render, screen } from "@testing-library/react";
import Home from "../../../components/home";

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('<Home/>', () => {

    beforeEach(() => {
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null
        });
        window.IntersectionObserver = mockIntersectionObserver;
    });

    const mockStore = configureStore();

    /* test - render home initial rendering */
    it("render home initially with empty list", () => {
        const initialState = {
            itunes: {
                count: null,
                data: {
                    tunes: [],
                    loading: false,
                    error: null
                }
            }
        };
        let store = mockStore(initialState);
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        );
        let elements = screen.queryAllByTestId("itunes-card")
        expect(elements.length).toBe(0);
    });


    /* test - rendering 1 list Item in home */
    it("render list items in home", async () => {
        const initialState = {
            itunes: {
                count: 0,
                data: {
                    tunes: [
                        {
                            wrapperType: "artist",
                            artistName: "Eminem"
                        }
                    ],
                    loading: false,
                    error: null
                }
            }
        };
        let store = mockStore(initialState);

        render(
            <Provider store={store}>
                <Home />
            </Provider>
        );
        let elements = screen.getAllByTestId("itunes-card");
        expect(elements.length).toBe(1);
    });

    /* test - rendering multiple list items  */
    it("render multiple list items in home", async () => {
        const initialState = {
            itunes: {
                count: 0,
                data: {
                    tunes: [
                        {
                            wrapperType: "artist",
                            artistName: "Eminem"
                        },
                        {
                            wrapperType: "track",
                            artistName: "Eminem",
                            trackName: "Mockingbird"
                        },
                        {
                            wrapperType: "collection",
                            artistName: "Eminem",
                            collectionName: "encore"
                        }
                    ],
                    loading: false,
                    error: null
                }
            }
        };
        let store = mockStore(initialState);

        render(
            <Provider store={store}>
                <Home />
            </Provider>
        );
        let elements = screen.getAllByTestId("itunes-card");
        expect(elements.length).toBe(3);
    });

    /* test - rendering No result found*/
    it("render No result found in home", async () => {
        const initialState = {
            itunes: {
                data: {
                    count: 0,
                    tunes: []
                }
            }
        };
        let store = mockStore(initialState);

        render(
            <Provider store={store}>
                <Home />
            </Provider>
        );

        expect(screen.getByText("No results found")).toBeInTheDocument();
    });
});
