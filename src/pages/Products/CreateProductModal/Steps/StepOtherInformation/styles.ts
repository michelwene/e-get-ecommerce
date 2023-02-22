import styled from "styled-components";

interface IProps {
	isPrevious?: boolean;
}

export const Container = styled.div``;

export const Wrapper = styled.div`
	margin-top: 2rem;

	display: flex;
	column-gap: 1rem;
`;

export const Button = styled.button<IProps>`
	background-color: ${({ isPrevious }) => (isPrevious ? "#999" : "#4a90e2")};

	color: #fff;
	font-family: ${({ theme }) => theme.fonts.primary};
	font-size: 1rem;
	font-weight: 600;

	border: none;
	border-radius: 4px;
	padding: 0.5rem 1rem;

	outline: none;
	cursor: pointer;

	transition: filter 0.2s;

	&:hover {
		filter: brightness(0.9);
	}

	&:active {
		filter: brightness(0.8);
	}
`;
