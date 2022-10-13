import styled from 'styled-components';

export const JobContainer = styled.div`
	display: flex;
	min-height: 200px;
	border: 1px #6a6acd solid;
	flex: 1;
	border-radius: 10px;
	padding: 20px 10px;
	transition: all 0.3s ease-in-out;
	margin-bottom: 20px;

	&:hover {
		box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
		cursor: pointer;
	}
`;

export const ImageContainer = styled.div`
	width: 100px;
	display: flex;
	flex: 0.1;
	align-items: center;
	justify-content: center;
`;

export const ContentContainer = styled.div`
	display: flex;
	flex: 1;
	margin-left: 20px;
	flex-direction: column;
	justify-content: center;
`;

export const OtherContainer = styled.div`
	display: flex;
`;

export const CompanyLogo = styled.img`
	height: 50px;
	width: 50px;
`;

export const Separator = styled.div`
	width: 8px;
	height: 8px;
	background-color: #ccc;
	margin: 0 4px;
	display: flex;
	border-radius: 100%;
	align-self: center;
`;
