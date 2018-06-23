import React from 'react'
import { Grid, Container, List } from 'semantic-ui-react'


export default props => {
  return (
    <div style={{color:'white'}}>
      <Container textAlign='center'>
          <Grid centered columns={2} verticalAlign='middle'>
            <Grid.Row centered columns={2}>
              <Grid.Column>
                <p class="animate-reveal animate-first">
                    <h4>Missão</h4>
                    Centralizar o desenvolvimento de software em um ambiente onde as pessoas possam aprender e produzir juntas.
                  </p>
              </Grid.Column>
              <Grid.Column>
                <p class="animate-reveal animate-first">
                    <h4>Visão</h4>
                    Tornar-se um centro de tecnologia e entretenimento.
                  </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={2}>
              <Grid.Column>
                <p class="animate-reveal animate-second">
                <h4>Valores</h4>
                    <List>
                      <List.Item>Perpetuar o conhecimento</List.Item>
                      <List.Item>Divirta-se</List.Item>
                      <List.Item>Respeito mútuo</List.Item>
                      <List.Item>Siga as regras do jogo</List.Item>
                      <List.Item>Valorize o trabalho em equipe</List.Item>
                      <List.Item>Há sempre o que aprender</List.Item>
                      <List.Item>Não moque o bizu</List.Item>
                      <List.Item>Gostoso é melhor que grande</List.Item>
                      <List.Item>Busque resultados</List.Item>
                    </List>
                </p>
              </Grid.Column>
              <Grid.Column>
                <p  class="animate-reveal animate-second">
                <h4>Um pouco de História</h4>
                  Tudo começou no final de 2008 com um grupo de amigos da turma 12, com o objetivo de participar do Simpósio Brasileiro de Jogos e Entretenimento Digital (SBGames). Em 2009, o projeto foi inserido na disciplina MTP-02 do ITA, demonstrando o apoio da escola. Paralelamente, um dos veteranos que tinha ganhado essa mesma competição em 2007 estava auxiliando o grupo de segundanistas. O projeto ficou em 1º lugar na Feira de Ciências do ITA.
                <br/>
                  No fim de 2009, o grupo decidiu expandir e criar uma iniciativa para competicões na área de jogos eletrônicos a exemplo da Aerodesign e Baja. Com a divulgação da idéia, um membro que era da antiga ITAndroids (iniciativa voltado para competições de robótica) trouxe a sugestão de criar uma iniciativa que abrangesse diversos projetos de Computação voltados para competições. Dado a interseccão de muitos temas entre as áreas na Computação, o que permite trocas de experiências e auxílio entre os membros, a sugestão foi acatada e foi dado início oficial à iniciativa.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    </div>
  )
}
