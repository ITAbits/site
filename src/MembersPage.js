import React from "react";
import {
	Icon,
	Container,
	Header,
	Grid,
	Button,
	Modal,
	Image,
	Loader,
	Dimmer,
} from "semantic-ui-react";
import MemberCard from "./components/member_card.js";

import "./style/MembersPage.css";

class MembersPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
		};
	}

	componentDidMount() {
		let members = [
			{
				callby: "Bragaia",
				firstname: "Igor",
				github: "https://github.com/igorbragaia",
				id: 1,
				imagelink:
					"https://republicacerta.s3.amazonaws.com/BITSc264b6b0-cc43-41b9-b1ca-f7f7eebef5eb.jpg",
				linkedin: "https://www.linkedin.com/in/igor-bragaia-23517a115/",
				secondname: "Bragaia",
				since: 16,
				to: 18,
			},
			{
				callby: "Precioso",
				firstname: "Eric",
				github: "https://github.com/ericpqmor",
				id: 2,
				imagelink:
					"https://republicacerta.s3.amazonaws.com/BITS019ad887-6154-41ed-b345-c9d74ea99a67.jpg",
				linkedin: "https://www.linkedin.com/in/ericpqmoreira/",
				secondname: "Moreira",
				since: 16,
				to: 18,
			},
			{
				callby: "Coimbra",
				firstname: "Felipe",
				github: "https://github.com/FelipeCoimbra",
				id: 3,
				imagelink:
					"https://republicacerta.s3.amazonaws.com/BITS448b45d6-c5ad-4f8d-9884-a22ba727c169.jpeg",
				linkedin: "https://www.linkedin.com/felipevcoimbra",
				secondname: "Vieira Coimbra",
				since: 16,
				to: 18,
			},
			{
				callby: "Henriqueh",
				firstname: "Luiz Henrique",
				github: "https://github.com/HikkusT",
				id: 4,
				imagelink:
					"https://republicacerta.s3.amazonaws.com/BITS47c4e2f7-999d-47fa-ba92-ac2421ac7e70.png",
				linkedin:
					"https://www.linkedin.com/in/luiz-henrique-aguiar-5784b8128/",
				secondname: "Aguiar",
				since: 16,
				to: 18,
			},
			{
				callby: "Mexicano",
				firstname: "Lucas",
				github: "https://github.com/splucs",
				id: 5,
				imagelink:
					"https://republicacerta.s3.amazonaws.com/BITS5d60ac6d-1160-4473-af8d-a97c11e94738.jpg",
				linkedin: "",
				secondname: "Fran\u00e7a",
				since: 14,
				to: 18,
			},
			{
				callby: "Mutante",
				firstname: "Gustavo",
				github: "https://github.com/Ghust1995",
				id: 6,
				imagelink:
					"https://republicacerta.s3.amazonaws.com/BITS7f466e45-bf54-4308-a797-de1007527768.jpg",
				linkedin: "https://www.linkedin.com/in/gustavoceci95/",
				secondname: "Guimaraes",
				since: 13,
				to: 18,
			},
			{
				callby: "Guima",
				firstname: "Felipe",
				github: "https://github.com/guimafelipe",
				id: 7,
				imagelink:
					"https://republicacerta.s3.amazonaws.com/BITS9f7e2da7-a853-492d-900d-0310cb90599b.jpeg",
				linkedin: "",
				secondname: "Guimar\u00e3es",
				since: 15,
				to: 18,
			},
			{
				callby: "Shark",
				firstname: "Carlos",
				github: "https://github.com/CarlosMatheus",
				id: 8,
				imagelink:
					"https://republicacerta.s3.amazonaws.com/BITS580ad28d-0e92-42ca-839b-991f345a2969.jpeg",
				linkedin: "https://www.linkedin.com/in/carlosmatheusbs/",
				secondname: "Matheus",
				since: 16,
				to: 18,
			},
			{
				callby: "Le\u00e3o",
				firstname: "Matheus",
				github: "https://github.com/leaomatheus",
				id: 9,
				imagelink:
					"https://republicacerta.s3.amazonaws.com/BITS9a1c8a4d-34b7-471f-9331-e2e279e8e1e8.jpeg",
				linkedin:
					"https://www.linkedin.com/in/matheus-le%C3%A3o-51298791/",
				secondname: "Le\u00e3o",
				since: 13,
				to: 18,
			},
			{
				callby: "Chico",
				firstname: "Francisco",
				github: "https://github.com/chicomcastro",
				id: 10,
				imagelink:
					"https://republicacerta.s3.amazonaws.com/BITS7360670d-2fa1-46a9-8e7f-3d256d0d03c7.jpeg",
				linkedin: "https://www.linkedin.com/in/franciscomcastro/",
				secondname: "Castro",
				since: 16,
				to: 18,
			},
			{
				callby: "Bertolino",
				firstname: "Matheus",
				github: "https://github.com/MatheusBertolino",
				id: 11,
				imagelink:
					"https://republicacerta.s3.amazonaws.com/BITS2a6cde51-d485-4db5-80c1-eedead52ea42.jpeg",
				linkedin: "https://www.linkedin.com/in/matheusbertolino/",
				secondname: "Bertolino",
				since: 15,
				to: 18,
			},
			{
				callby: "Gar\u00e7a",
				firstname: "Caio",
				github: "https://github.com/cakine",
				id: 12,
				imagelink:
					"https://republicacerta.s3.amazonaws.com/BITSfc1a6857-853a-4e41-b5c9-fc985dedcec3.png",
				linkedin: "",
				secondname: "Kinelski",
				since: 14,
				to: 16,
			},
			{
				callby: "Ilharco",
				firstname: "Gabriel",
				github: "https://github.com/gabrielilharco",
				id: 13,
				imagelink:
					"https://republicacerta.s3.amazonaws.com/BITS8668c51a-e661-40d9-beae-9703739341dd.jpeg",
				linkedin:
					"https://www.linkedin.com/in/gabrielilharco/detail/photo/",
				secondname: "Ilharco",
				since: 13,
				to: 15,
			},
			{
				callby: "Gru",
				firstname: "Guilherme",
				github: "https://github.com/dukilee",
				id: 14,
				imagelink:
					"https://republicacerta.s3.amazonaws.com/BITS0aac07cb-fbd8-4dc2-be23-48552fa3f8e5.jpeg",
				linkedin: "",
				secondname: "Oliveira",
				since: 15,
				to: 18,
			},
			{
				callby: "Roim",
				firstname: "Rodrigo",
				github: "https://github.com/roim",
				id: 15,
				imagelink:
					"https://republicacerta.s3.amazonaws.com/BITS0828ea54-fcb9-42c9-b150-8e9bcbc65839.jpeg",
				linkedin: "https://www.linkedin.com/in/rodrigoroim/",
				secondname: "Roim",
				since: 11,
				to: 15,
			},
		];

		this.setState({
			items: members,
		});
	}

	render() {
		const members = this.state.items.map((item, index) => {
			return (
				<MemberCard
					firstname={item.firstname}
					secondname={item.secondname}
					callby={item.callby}
					imagelink={item.imagelink}
					to={item.to}
					since={item.since}
				/>
			);
		});

		return (
			<section id="members">
				<h1 >Membros</h1>
				<Container card>
					<Grid doubling centered columns={6}>
						{members}
					</Grid>
				</Container>
			</section>
		);
	}
}

export default MembersPage;
