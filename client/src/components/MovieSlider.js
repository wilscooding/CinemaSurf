import React, {useState} from "react";
import Card from "./Card";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default React.memo(function MovieSlider({ data, title }) {

  const [controlVisibility, setControlVisibility] = useState(false)

	return (
		<Container>
			<h1>{title}</h1>
			<div className="wrapper">
				<div className={`slider-action left`}>
					<AiOutlineLeft />
				</div>

				<div className="slider">
					{data.map((movie, index) => {
						return (
							<Card
								movieData={movie}
								index={index}
								key={movie.id}
							/>
						);
					})}
				</div>
				<div className={`slider-action right`}>
					<AiOutlineRight />
				</div>
			</div>
		</Container>
	);
});

const Container = styled.div`
	gap: 0.7rem;
	position: relative;
	padding: 2rem 0;
	h1 {
		margin-left: 5px;
		font-size: 25px;
		font-family: "Times New Roman", Times, serif, sans-serif;
		color: white;
	}
	.wrapper {
		.slider {
			display: flex;
			width: max-content;
			gap: 0.6rem;
			transform: translateX(0px);
			margin-left: 5px;
		}
		.slider-action {
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			z-index: 99;
			height: 100%;
			top: 2rem;
			bottom: 0;
			width: 50px;
			transition: 1s ease-in-out;
			svg {
				font-size: 2rem;
				cursor: pointer;
				color: white;
			}
		}
		.left {
			left: 0;
		}
		.right {
			right: 0;
		}
	}
`;
