import React from "react";
import { Grid, Image } from "semantic-ui-react";
import Balloon from "../assets/images/landing-page/about/baloon.png";
import Gaming from "../assets/images/landing-page/about/gaming-icon.png";
import Training from "../assets/images/landing-page/about/training.png";

import "../style/Info.css";

export default props => {
	return (
		<div>
			<section id="info-section">
				<h3 style={{ marginBottom: 32 }}>NOSSAS ATIVIDADES</h3>
				<Grid centered stackable columns={3} verticalAlign="top" style={{ marginTop: 32 }}>
					<Grid.Row centered columns={3} style={{padding: 0,}}>
						<Grid.Column>
							<Image ui src={Balloon} />
						</Grid.Column>

						<Grid.Column>
							<Image ui src={Gaming} />
						</Grid.Column>

						<Grid.Column>
							<Image ui src={Training} />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row centered columns={3} style={{padding: 0,}}>
						<Grid.Column>
							<h5>Competições</h5>
						</Grid.Column>

						<Grid.Column>
							<h5>Game Dev</h5>
						</Grid.Column>

						<Grid.Column>
							<h5>Treinamentos</h5>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row centered columns={3} style={{padding: 0,}}>
						<Grid.Column>
							<p>
								Todos os anos, nossa equipe participa das
								principais competições de programação do Brasil
								e do mundo: Olimpíada Brasileira de Informática
								(OBI), Maratona de Programação, Google Code Jam
								e TopCoder Open. Também produzimos simulados
								semanais para incentivar o aprendizado de
								programação no ITA.
							</p>
						</Grid.Column>

						<Grid.Column>
							<p>
								A equipe da ITABits também incentiva e participa
								diversas competições de games, como Game Jams e
								Ludum Dares. Além disso, também organizamos
								todos os anos a Competição Interna de Games
								(CIG) do ITA, como forma de incentivar alunos de
								graduação a iniciar no desenvolvimento de jogos.
							</p>
						</Grid.Column>

						<Grid.Column>
							<p>
								Nossa equipe também fornece treinamentos sobre
								computação dentro do ITA. Os treinamentos
								abrangem tópicos básicos, como introdução à
								programação em C, dois cursos (Básico e
								Avançado) sobre algoritmos e estruturas de dados
								e diversos cursos de game development com C# e
								Unity.
							</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</section>
		</div>
	);
};
