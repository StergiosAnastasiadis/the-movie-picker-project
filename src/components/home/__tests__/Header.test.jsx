import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import DataContext from "../../../context/DataContext";

// const mockedUsedNavigate = jest.fn();

// jest.mock('react-router-dom', () => ({
//    ...jest.requireActual('react-router-dom') as any,
//   useNavigate: () => mockedUsedNavigate,
// }));

describe("Header test is not Authenticated", () => {

    it("should render no name and 0 movies", () => {
        const testValues = {
            isAuth: false,
            moviesInsideCart: [],
        };
        render(<BrowserRouter><DataContext.Provider value={testValues}><Header /></DataContext.Provider></BrowserRouter>);
        expect(screen.getByRole('heading', { name: /Hello you have 0 Movies in your Cart/i })).toBeInTheDocument();
    });

    it("should render no name and 1 movie", () => {
        const testValues = {
            isAuth: false,
            moviesInsideCart: [1],
        };
        render(<BrowserRouter><DataContext.Provider value={testValues}><Header /></DataContext.Provider></BrowserRouter>);
        expect(screen.getByRole('heading', { name: /Hello you have 1 Movie in your Cart/i })).toBeInTheDocument();
    });

    it("should render no name and 2 movies", () => {
        const testValues = {
            isAuth: false,
            moviesInsideCart: [1, 2],
        };
        render(<BrowserRouter><DataContext.Provider value={testValues}><Header /></DataContext.Provider></BrowserRouter>);
        expect(screen.getByRole('heading', { name: /Hello you have 2 Movies in your Cart/i })).toBeInTheDocument();
    });
});

describe("Header test is Authenticated", () => {

    it("should render name and 0 movies", () => {
        const testValues = {
            isAuth: true,
            userName: "Stergios",
            moviesInsideCart: [],
        };
        render(<BrowserRouter><DataContext.Provider value={testValues}><Header /></DataContext.Provider></BrowserRouter>);
        expect(screen.getByRole('heading', { name: /Hello Stergios, you have 0 Movies in your Cart/i })).toBeInTheDocument();
    });

    it("should render name and 1 movie", () => {
        const testValues = {
            isAuth: true,
            userName: "Stergios",
            moviesInsideCart: [1],
        };
        render(<BrowserRouter><DataContext.Provider value={testValues}><Header /></DataContext.Provider></BrowserRouter>);
        expect(screen.getByRole('heading', { name: /Hello Stergios, you have 1 Movie in your Cart/i })).toBeInTheDocument();
    });

    it("should render name and 2 movies", () => {
        const testValues = {
            isAuth: true,
            userName: "Stergios",
            moviesInsideCart: [1, 2],
        };
        render(<BrowserRouter><DataContext.Provider value={testValues}><Header /></DataContext.Provider></BrowserRouter>);
        expect(screen.getByRole('heading', { name: /Hello Stergios, you have 2 Movies in your Cart/i })).toBeInTheDocument();
    });
})

describe("Button when user is not Authenticated", () => {

    it("render button is not Authenticated", () => {
        const testValues = {
            isAuth: false,
            moviesInsideCart: []
        }
        render(<BrowserRouter><DataContext.Provider value={testValues}><Header /></DataContext.Provider></BrowserRouter>);
        expect(screen.getByRole("button", { name: /Sign in/i })).toBeInTheDocument();
    });

    it("when user presses Sign In Button", () => {
        const testValues = {
            isAuth: false,
            moviesInsideCart: []
        }
        render(<BrowserRouter><DataContext.Provider value={testValues}><Header /></DataContext.Provider></BrowserRouter>);
        //expect
    })
})

describe("Button when user is Authenticated", () => {

    it("render button is Authenticated", () => {
        const testValues = {
            isAuth: true,
            moviesInsideCart: []
        }
        render(<BrowserRouter><DataContext.Provider value={testValues}><Header /></DataContext.Provider></BrowserRouter>);
        expect(screen.getByRole("button", { name: /Logout/i })).toBeInTheDocument();
    });

    it("when user presses Logout Button", () => {// ------To do
        const testValues = {
            isAuth: true,
            moviesInsideCart: []
        }
        render(<BrowserRouter><DataContext.Provider value={testValues}><Header /></DataContext.Provider></BrowserRouter>);
        //expect
    })
})

// useContextMock = React.useContext = jest.fn();
// useContextMock.mockReturnValue("Test Value");