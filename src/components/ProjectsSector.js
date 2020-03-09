import React from "react";
import { Icon } from "semantic-ui-react";
import "../style/ProjectsSector.css";

export default props => {
	return (
		<div id="projects-container">
			<section id="project-section">
				<h3 style={{ marginBottom: 32 }}>Projetos</h3>
				<h5 id="subtitle-text">
					<i>
						Paixão é a nossa marca. A ITABits foi criada para
						centralizar o desenvolvimento de software em um ambiente
						onde as pessoas possam aprender e produzir juntas!"
					</i>
				</h5>
				<a href="/projects">
					<button className="goto-button" style={{ marginTop: 32 }}>
						<span>DEMOS</span>
					</button>
				</a>
			</section>
		</div>
	);
};
