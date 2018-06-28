# Projeto Defender

1. Objeto Player
    - Adicionar um "canhão"
    - Adicionar o ponto de onde os tiros vao sair
    - Criar um novo script (PlayerController)
2. Player Controller
    - Codigo de olhar para a posicao do mouse
    - Codigo de atirar (criar campo public GameObject Bullet)
3. Objeto Bullet
    - Adicionar um novo script (Bullet)
    - Script faz a bullet ir para o lado (s += vt)
    - Colocar no player e mostrar que sao criados novas Bullet
4. Prefab Bullet
    - Explicar prefab, criando prefab do bullet
    - Arrastar o prefab no player e mostar que sao criados novas Bullets
5. Objeto Enemy
    - Copiar o script do enemy do _Projeto Follow_
    - Criar nova tag buller e colocar na bullet
    - Adicionar logica de colisao com a bullet
6. Objeto Enemy Spawner
    - Criar um novo script Enemy Spawner
    - Criar uma funcao Spawn()
    - Colocar no start um InvokeRepeating e explicar o funcionamento
    - Usar com prefab do enemy vai dar pau por desconhecimento do player
    - Pegar player com FindObjectsWithTag()
7. Desafios
    - Fazer o player se mover
    - Zumbi poder atirar
