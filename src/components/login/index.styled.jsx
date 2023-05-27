import styled from "styled-components";

export const registerStraight = styled.div`
  text-align: center;

`;

export const widthForm = styled.div`
  max-width: 150px;
`;

export const buttonStyling = styled.button`
margin: 30px;
background: linear-gradient(to bottom right, #EF4765, #FF9A5A);
border: 0;
border-radius: 12px;
color: #FFFFFF;
cursor: pointer;
display: inline-block;
font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
font-size: 16px;
font-weight: 500;
line-height: 2.5;
outline: transparent;
padding: 0 1rem;
text-align: center;
text-decoration: none;
transition: box-shadow .2s ease-in-out;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
white-space: nowrap;
&:hover {
  color: black;
}`;

  export const loadingWrapper = styled.div`* {
	border: 0;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
:root {
	--hue: 223;
	--bg: hsl(var(--hue),90%,90%);
	--fg: hsl(var(--hue),90%,10%);
	--trans-dur: 0.3s;
	font-size: calc(20px + (30 - 20) * (100vw - 320px) / (1280 - 320));
}
body {
	background: var(--bg);
	color: var(--fg);
	font: 1em/1.5 sans-serif;
	height: 100vh;
	display: grid;
	place-items: center;
}
.pencil {
	display: block;
	width: 10em;
	height: 10em;
}
.pencil__body1,
.pencil__body2,
.pencil__body3,
.pencil__eraser,
.pencil__eraser-skew,
.pencil__point,
.pencil__rotate,
.pencil__stroke {
	animation-duration: 3s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
}
.pencil__body1,
.pencil__body2,
.pencil__body3 {
	transform: rotate(-90deg);
}
.pencil__body1 {
	animation-name: pencilBody1;
}
.pencil__body2 {
	animation-name: pencilBody2;
}
.pencil__body3 {
	animation-name: pencilBody3;
}
.pencil__eraser {
	animation-name: pencilEraser;
	transform: rotate(-90deg) translate(49px,0);
}
.pencil__eraser-skew {
	animation-name: pencilEraserSkew;
	animation-timing-function: ease-in-out;
}
.pencil__point {
	animation-name: pencilPoint;
	transform: rotate(-90deg) translate(49px,-30px);
}
.pencil__rotate {
	animation-name: pencilRotate;
}
.pencil__stroke {
	animation-name: pencilStroke;
	transform: translate(100px,100px) rotate(-113deg);
}

/* Animations */
@keyframes pencilBody1 {
	from,
	to {
		stroke-dashoffset: 351.86;
		transform: rotate(-90deg);
	}
	50% {
		stroke-dashoffset: 150.8; /* 3/8 of diameter */
		transform: rotate(-225deg);
	}
}
@keyframes pencilBody2 {
	from,
	to {
		stroke-dashoffset: 406.84;
		transform: rotate(-90deg);
	}
	50% {
		stroke-dashoffset: 174.36;
		transform: rotate(-225deg);
	}
}
@keyframes pencilBody3 {
	from,
	to {
		stroke-dashoffset: 296.88;
		transform: rotate(-90deg);
	}
	50% {
		stroke-dashoffset: 127.23;
		transform: rotate(-225deg);
	}
}
@keyframes pencilEraser {
	from,
	to {
		transform: rotate(-45deg) translate(49px,0);
	}
	50% {
		transform: rotate(0deg) translate(49px,0);
	}
}
@keyframes pencilEraserSkew {
	from,
	32.5%,
	67.5%,
	to {
		transform: skewX(0);
	}
	35%,
	65% {
		transform: skewX(-4deg);
	}
	37.5%, 
	62.5% {
		transform: skewX(8deg);
	}
	40%,
	45%,
	50%,
	55%,
	60% {
		transform: skewX(-15deg);
	}
	42.5%,
	47.5%,
	52.5%,
	57.5% {
		transform: skewX(15deg);
	}
}
@keyframes pencilPoint {
	from,
	to {
		transform: rotate(-90deg) translate(49px,-30px);
	}
	50% {
		transform: rotate(-225deg) translate(49px,-30px);
	}
}
@keyframes pencilRotate {
	from {
		transform: translate(100px,100px) rotate(0);
	}
	to {
		transform: translate(100px,100px) rotate(720deg);
	}
}
@keyframes pencilStroke {
	from {
		stroke-dashoffset: 439.82;
		transform: translate(100px,100px) rotate(-113deg);
	}
	50% {
		stroke-dashoffset: 164.93;
		transform: translate(100px,100px) rotate(-113deg);
	}
	75%,
	to {
		stroke-dashoffset: 439.82;
		transform: translate(100px,100px) rotate(112deg);
	}
}`