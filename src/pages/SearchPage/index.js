import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";

import "./SearchPage.css";
import { useDebounce } from "../../hooks/useDebounce";

const SearchPage = () => {
    const navigate = useNavigate();
    const useQuery = () => new URLSearchParams(useLocation().search);
    let query = useQuery();
    const debouncedSearchTerm = useDebounce(query.get("q"), 500);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (debouncedSearchTerm) {
            fetchSearchMovie(debouncedSearchTerm);
        }
    }, [debouncedSearchTerm])

    const fetchSearchMovie = async (searchTerm) => {
        try {
            const request = await axios.get(
                `search/multi?include_adult=true&query=${searchTerm}`
            );
            setSearchResults(request.data.results);
        } catch (error) {
            console.error("error:", error);
        }
    }

    if (searchResults.length > 0) {
        return (
            <section className="search-container">
                {searchResults.map((movie) => {
                    if (movie.backdrop_path !== null && movie.media_type !== "person") {
                        const imgURL = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
                        return (
                            <div className="movie" key={movie.id}>
                                <div className="movie__column-poster"
                                    onClick={() => navigate(`/${movie.id}`)}
                                >
                                    <img
                                        src={imgURL}
                                        alt={movie.title}
                                        className="movie__poster"
                                    />
                                </div>
                            </div>
                        )
                    } else {
                        return null
                    }
                })}
            </section>
        );
    } else {
        return (
            <section className="no-results">
                <div className="no-results__text">
                    <p>No Results Found for "{debouncedSearchTerm}"</p>
                </div>
            </section>
        )
    }
}

export default SearchPage;