import React from 'react'
import { Grid, Container, List } from 'semantic-ui-react'

import '../style/About.css'

export default props => {
  return (
    <div id='about-container'>
      <section id='about-section'>
        <h3>QUEM SOMOS?</h3>
        <p>
          A ITA Bits é um grupo de desenvolvimento de software criado e mantido por alunos de graduação do Instituto Tecnológico de Aeronáutica (ITA).
          O objetivo da equipe é centralizar o desenvolvimento de software em um ambiente onde as pessoas possam aprender e produzir juntas.
          Os membros da ITA Bits participam de diversas competições, como a Olimpíada Brasileira de Informática (OBI) e a Maratona de Programação, além de desenvolverem
          jogos, sites e outros. A ITA Bits realiza também todos os anos a CIG (Competição Interna de Games do ITA), uma competição focada em promover o desenvolvimento de jogos feitos por alunos
          de graduação de todos os anos. Além disso, todos os anos a equipe organiza treinamentos voltados para programação competitiva e desenvolvimento de jogos.
        </p>
        <p>
          A ITA Bits foi criada em 2008 com um grupo de amigos da Turma 2012, com o objetivo de participar do Simpósio Brasileiro de Jogos e Entretenimento Digital (SBGames).
          Em 2009, o projeto foi inserido na disciplina MTP-02 (Introdução à Engenharia) do ITA, demonstrando apoio da escola. Paralelamente, um dos veteranos que havia ganhado
          essa mesma competição em 2007 estava auxiliando o grupo de segundanistas. O projeto ganhou a Feira de Ciências do ITA. Em 2009, esse grupo de amigos levou o projeto
          para frente: assim surgia a ITA Bits.
        </p>
        <a href="/members"><button className='goto-button'><span>SAIBA MAIS</span></button></a>
      </section>
    </div>
  )
}
