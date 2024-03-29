import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import TopNav from "../components/TopNav";
import { fetchMovies, getGenres } from "../store";
import SliderContainer from "../components/SliderContainer";

const CinemaSurf = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const navigate = useNavigate();

	const movies = useSelector((state)=> state.cinemaSurf.movies)
	const generesLoaded = useSelector((state)=>state.cinemaSurf.generesLoaded)

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getGenres());
	});

	useEffect(() => {
		if (generesLoaded) {
			dispatch(fetchMovies({ type: "all" }));
		}
	});


	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<HeroContainer>
			<div className="background">
				<TopNav isScrolled={isScrolled} />
				<img
					className="background-image"
					src="https://wallpapercave.com/wp/stPPnbo.jpg"
					alt="background img"
				/>
				<div className="container">
					<div className="title">
						<h1>Cinema Surf</h1>
						<p>A virtual movie theater in your pocket.</p>
					</div>
					<div className="buttons">
						<button
							onClick={() => navigate("/player")}
							className="playBtn"
						>
							Play
						</button>
						<button className="moreBtn">More</button>
					</div>
				</div>
			</div>
			<SliderContainer movies={movies}/>
		</HeroContainer>
	);
};

const HeroContainer = styled.div`
	.background {
		position: relative;
		.background-image {
			filter: brightness(40%);
		}
		img {
			height: 70vh;
			width: 100%;
		}
	}
	.container {
		position: absolute;
		bottom: 1rem;
		.title {
			h1 {
				margin-left: 5rem;
				text-transform: uppercase;
				font-size: 73px;
				background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
			p {
				margin-bottom: -50px;
				width: 640px;
				margin-left: 5rem;
				font-family: "lexend Deca", sans-serif;
				color: white;
			}
		}
		.buttons {
			display: flex;
			margin: 5rem;
			gap: 2rem;
		}
		.playBtn {
			display: flex;
			align-items: center;
			justify-content: center;
			color: blue;
			border-radius: 1rem;
			font-size: 1.4rem;
			gap: 1rem;
			padding: 0.9rem;
			padding-left: 2rem;
			padding-right: 2.4rem;
			border: none;
			cursor: pointer;
		}
		.moreBtn {
			display: flex;
			align-items: center;
			justify-content: center;
			color: white;
			background-color: black;
			border-radius: 1rem;
			font-size: 1.4rem;
			gap: 1rem;
			padding: 0.9rem;
			padding-left: 2rem;
			padding-right: 2.4rem;
			border: 0.1rem solid white;
			cursor: pointer;
		}
	}
`;

export default CinemaSurf;
