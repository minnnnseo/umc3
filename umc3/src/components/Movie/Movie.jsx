import React, { useState, useCallback } from "react";
import { MovieContainer, MovieInfo, MovieDetail, MovieImage } from './components/Movie/Movie.style';
import PropTypes from "prop-types";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({ title, poster_path, vote_average, overview }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = useCallback(() => {
        setIsHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
    }, []);

    return (
        <MovieContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <MovieImage src={IMG_BASE_URL + poster_path} alt={`영화 ${title}의 포스터`} />
            <MovieInfo>
                <h4>{title}</h4>
                <span>{vote_average}</span>
            </MovieInfo>
            {isHovered && (
                <MovieDetail>
                    <h4>{title}</h4>
                    <p>{overview}</p>
                </MovieDetail>
            )}
        </MovieContainer>
    );
}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  };
  
  