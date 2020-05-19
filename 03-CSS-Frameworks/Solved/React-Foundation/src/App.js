import React from "react";
import "foundation-sites/dist/css/foundation.min.css";
import { TopBar, TopBarLeft, TopBarRight, Menu, MenuItem, GridContainer, Row } from "react-foundation";

function App() {
	return (
		<>
			<TopBar>
				<TopBarLeft>
					<Menu>
						<MenuItem>John Doe</MenuItem>
					</Menu>
				</TopBarLeft>
				<TopBarRight>
					<Menu>
						<MenuItem><a href="#">Resume</a></MenuItem>
						<MenuItem><a href="#">GitHub</a></MenuItem>
						<MenuItem><a href="#">LinkedIn</a></MenuItem>
						<MenuItem><a href="#">Contact</a></MenuItem>
					</Menu>
				</TopBarRight>
			</TopBar>
			<GridContainer>
				<Row>
					<h3>Portfolio</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend imperdiet ipsum et iaculis. Vestibulum tincidunt ex et orci ornare, vel vehicula magna laoreet. Proin gravida maximus pellentesque. Maecenas vitae fermentum eros. Fusce congue ipsum nec ultrices mollis. Nullam vel finibus risus, sed tincidunt nisi. In volutpat malesuada tortor, nec mollis ipsum porttitor et. Morbi eu dictum purus. Sed nunc odio, viverra vel nulla ut, semper euismod tellus. Nullam hendrerit maximus mi vel venenatis. Suspendisse potenti. In consectetur, quam at faucibus maximus, nisi diam feugiat dolor, rutrum vehicula est dolor quis tellus. Nam nec ipsum malesuada, accumsan mauris in, ultrices purus.</p>
					<p>Nulla sodales felis ut eros pellentesque, eget faucibus odio laoreet. Praesent sed turpis eu est tempor sagittis. Donec ac risus eget purus mattis gravida vitae sed mi. Aenean euismod erat non imperdiet rhoncus. Sed placerat, nisi id rutrum aliquet, dui massa sodales orci, pellentesque finibus purus tortor quis lacus. Sed ut convallis nisl. Fusce eu leo justo.</p>
				</Row>
				<Row>
					<h3>About Me</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend imperdiet ipsum et iaculis. Vestibulum tincidunt ex et orci ornare, vel vehicula magna laoreet. Proin gravida maximus pellentesque. Maecenas vitae fermentum eros. Fusce congue ipsum nec ultrices mollis. Nullam vel finibus risus, sed tincidunt nisi. In volutpat malesuada tortor, nec mollis ipsum porttitor et. Morbi eu dictum purus. Sed nunc odio, viverra vel nulla ut, semper euismod tellus. Nullam hendrerit maximus mi vel venenatis. Suspendisse potenti. In consectetur, quam at faucibus maximus, nisi diam feugiat dolor, rutrum vehicula est dolor quis tellus. Nam nec ipsum malesuada, accumsan mauris in, ultrices purus.</p>
					<p>Nulla sodales felis ut eros pellentesque, eget faucibus odio laoreet. Praesent sed turpis eu est tempor sagittis. Donec ac risus eget purus mattis gravida vitae sed mi. Aenean euismod erat non imperdiet rhoncus. Sed placerat, nisi id rutrum aliquet, dui massa sodales orci, pellentesque finibus purus tortor quis lacus. Sed ut convallis nisl. Fusce eu leo justo.</p>
				</Row>
				<Row>
					<h3>Contact</h3>
					<ul>
						<li>Email: <a href="mailto:john@john.com">john@john.com</a></li>
						<li>Phone: <a href="tel:(123) 456-7890">(123) 456-7890</a></li>
					</ul>
				</Row>
			</GridContainer>
		</>
	);
}

export default App;