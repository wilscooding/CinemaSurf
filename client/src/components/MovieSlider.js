import React from "react";
import Card from "./Card";
import styled from "styled-components";

const MovieSlider = ({ data, title }) => {
	return (
		<Container>
			<h1>{title}</h1>
			<div className="wrapper">
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
			</div>
		</Container>
	);
};

const Container = styled.div`
	gap: 0.7rem;
	position: relative;
	padding: 2rem 0;
	h1 {
		margin-left: 50px;
		font-size: 25px;
		font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
			sans-serif;
	}
  .wrapper{
    .slider{
      display: flex;
    }
  }
`;

export default MovieSlider;
