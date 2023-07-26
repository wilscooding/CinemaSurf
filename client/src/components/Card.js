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
						<h3 className="movieName" onClick={()=> navigate("/player")}>Avengers</h3>
						<div className="icons">
							<IoPlayCircleSharp title="play" onClick={()=> navigate("/player")} />
							<RiThumbUpFill title="like"/>
							<RiThumbDownFill title="dislike"/>
							<BsCheck title="remove from list"/>
							<AiOutlinePlus title="add to my list"/>
						</div>
						<div className="info">
							<BiChevronDown title="more info"/>
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
	max-width: 230px;
	background-color: red;
`;
export default Card;
