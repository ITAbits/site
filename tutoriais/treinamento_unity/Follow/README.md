# Projeto Follow

1. Objeto Player
  - Criar um sprite no paint
  - Adicionar um sprite no objeto vazio
  - Adicionar um novo script (PlayerController)
2. Player Controller Basico
  - Update
  - Input.GetKey    (LEMBRAR DE FAZER O PROXIMO PROJETO COM GET KEY DOWN E MOUSE)
  - transform.position (s = s0 + vt) (v é constante)
  - speed -> variavel publica (editar variavel publica no Unity, dentro e fora do jogo)
  - Opcional: Fazer os transforms usando GetAxis();
3. Objeto Enemy
  - Aproveitar Codigo do Player Basico (s = s0 + vt)
  - Pegar a posicao do player e usar como vetor direcao
  - Passar um GameObject público como parametro para poder 'arrastar' no Unity
  - v = direction * speed
4. Colliders
  - Colocar um Collider em forma de trigger no player
  - Colocar um component Collider e um RigidBody2D no enemy
  - Fazer o player ser destruido ao se chocar com o inimigo (Destroy(Player))
5. Opcionais (Viram desafios caso não dê tempo dedar na aula)
  - Botar um sprite bonitinho da internet
  - Botar o inimigo para spawnar a uma distancia (em posicao aleatoria)
6. Desafios (com conhecimentos futuros)
  - Fazer alguma condiçao de Game Over
  - Fazer uma parede 
  - Fazer aparecerem novos inimigos a cada intervalo de tempo
  
