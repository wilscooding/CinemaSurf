import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";

const Card = () => {
	const [Hover, setHover] = useState(false);
	const navigate = useNavigate();
	return (
		<CardContainer
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCor4AIV__zuNlgGZTSr424NdUudWBQKBrA&usqp=CAU://filmartgallery.com/cdn/shop/products/The-Avengers-Vintage-Movie-Poster-Original-1-Sheet-27x41_f7a83b7a-9d50-4743-b630-3fbd34b35e5a.jpg?v=1671051716"
				alt="Movie Poster"
				onClick={() => navigate("/player")}
			/>
			{Hover && (
				<div className="hover">
					<div className="image-video-wrapper">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCor4AIV__zuNlgGZTSr424NdUudWBQKBrA&usqp=CAU://filmartgallery.com/cdn/shop/products/The-Avengers-Vintage-Movie-Poster-Original-1-Sheet-27x41_f7a83b7a-9d50-4743-b630-3fbd34b35e5a.jpg?v=1671051716"
							alt="Movie Poster"
							onClick={() => navigate("/player")}
						/>
						<video
							src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4"
							autoPlay
							loop
							controls
							muted
						/>
					</div>
					<div className="info-container">
						<h3
							className="movieName"
							onClick={() => navigate("/player")}
						>
							Avengers
						</h3>
						<div className="icons">
							<IoPlayCircleSharp
								title="play"
								onClick={() => navigate("/player")}
							/>
							<RiThumbUpFill title="like" />
							<RiThumbDownFill title="dislike" />
							<BsCheck title="remove from list" />
							<AiOutlinePlus title="add to my list" />
						</div>
						<div className="info">
							<BiChevronDown title="more info" />
						</div>
					</div>
					<div className="genre">
						<ul>
							<li>Action & Adventure</li>
							<li>Science Fiction</li>
						</ul>
					</div>
				</div>
			)}
			;
		</CardContainer>
	);
};

const CardContainer = styled.div`
	margin-top: 1rem;
	max-width: 230px;
	width: 230px;
	height: 100%;
	cursor: pointer;
	position: relative;
	/* background-color: red; */
	img {
		border-radius: 0.2rem;
		width: 100%;
		height: 100%;
		z-index: 10;
	}
	.hover {
		z-index: 99;
		height: max-content;
		width: 20rem;
		position: absolute;
		top: -18vh;
		left: 0;
		border-radius: 0.2rem;
		border: 0.1rem solid gray;
		background-color: #181818;
		transition: 0.3s ease-out;
		.image-video-wrapper {
			position: relative;
			height: 140px;
			img {
				width: 100%;
				height: 150px;
				object-fit: cover;
				border-radius: 0.3rem;
				top: 0;
				z-index: 4;
				position: absolute;
			}
			video {
				width: 100%;
				height: 150px;
				object-fit: cover;
				border-radius: 0.3rem;
				top: 0;
				z-index: 4;
				position: absolute;
			}
		}
		.info-container {
			display: flex;
			flex-direction: column;
			padding: 1rem;
			gap: 0.5rem;
			.movieName {
				color: white;
			}
		}
		.icons {
			display: flex;
			justify-content: space-between;
			.controls {
				display: flex;
				gap: 0.5rem;
			}
		}
		svg {
			color: white;
			border: 0.1rem solid white;
			border-radius: 50%;
			font-size: 1.5rem;
			cursor: pointer;
			transition: 0.3s ease-in-out;
			&:hover {
				background-color: #b8b8b8;
			}
		}
		.genre {
			display: flex;
			color: white;
			ul {
				display: flex;
				gap: 1rem;
				li {
					padding-right: 0.7rem;
					&:first-of-type {
						list-style-type: none;
					}
				}
			}
		}
	}
`;
export default Card;
