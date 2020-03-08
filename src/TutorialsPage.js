import React, { Component } from "react";

import "./style/TutorialsPage.css";

class TutorialsPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
    
    // TODO put this
    let subtitle = 
      <p>
        Aqui Você encontra alguns dos tutoriais disponíveis no site original da bits, bem como materiais de treinamentos.
        Você é livre para usar, distribuir ou alterar nossos treinamentos livremente, mas pedimos que cite os autores originais.
      </p>;

    return (
      <section id='tutorials'>
        <h1>Tutoriais<a href='/tutorials' /></h1>
        <div style={{backgroundColor: 'white', flex: 1, width: '50%' }}>
          <div style={{flex: 1}}>
            <img src={"https://i.gifer.com/67st.gif"} style={{width: '100%'}}></img>
          </div>
        </div>
        <p style={{ color: '#333333', width: 'auto', color: '#E0E0E0', marginTop: 10}}>
          Página em construção
        </p>
      </section>
    )
	}
}

export default TutorialsPage;
