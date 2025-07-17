1. O que é a Ocupação de Pátios?
   A ocupação de pátios é um conceito fundamental na logística ferroviária que se refere ao uso de uma linha ou recurso específico dentro de um pátio ferroviário por um trem durante um determinado período de tempo.
   Um pátio ferroviário não é um ponto único, mas uma área complexa com múltiplas linhas (trilhos) usadas para diversas finalidades:
   Estacionamento de trens (aguardando liberação, tripulação, etc.).
   Manobras (montagem e desmontagem de composições).
   Carga e descarga de vagões.
   Cruzamento ou ultrapassagem de outros trens.
   Cada uma dessas linhas é um recurso finito. A "ocupação" é o ato de um trem utilizar esse recurso, tornando-o indisponível para outros trens durante aquele intervalo de tempo.
2. O que ela representa?
   A ocupação de pátios representa uma restrição de tempo e espaço no planejamento ferroviário. De forma mais detalhada, ela representa:
   Uso de Recurso Finito: Uma linha de pátio só pode ser ocupada por um trem de cada vez. A ocupação representa a "reserva" desse recurso.
   Um Intervalo de Tempo: A ocupação não é instantânea. Ela tem uma data/hora de início (quando o trem entra na linha ou para) e uma data/hora de fim (quando o trem libera a linha). A diferença entre esses dois momentos é a duração da ocupação.
   Fonte de Conflitos Operacionais: A principal representação da ocupação é como uma restrição. Se o Trem A ocupa a Linha 1 do Pátio X das 10:00 às 11:00, nenhum outro trem pode usar essa mesma linha nesse intervalo. Tentar agendar o Trem B para a mesma linha às 10:30 geraria um conflito, que o sistema de planejamento (como o OptMove) deve detectar e ajudar o planejador a resolver.
   Uma Ferramenta de Planejamento Visual: Para os planejadores, a visualização de todas as ocupações de pátio ao longo do tempo permite identificar gargalos, otimizar o fluxo de trens e tomar decisões mais eficientes. A forma mais comum de visualizar isso é através de um Diagrama de Gantt, onde cada linha do pátio é um recurso e as barras representam os trens que a ocupam ao longo do tempo.
3. Como está sendo utilizada no código fornecido?
   Analisando os arquivos, a "ocupação de pátios" é um conceito central e é utilizada de várias maneiras:
   a) Modelagem e Visualização Gráfica (Gráfico de Trens)
   O arquivo UTPMovimentoSeries.cpp é a chave para entender a representação. Um "movimento" de trem é desenhado em um gráfico onde o eixo X é o tempo e o eixo Y é a localização (quilometragem ou pátios).
   Parada = Ocupação: Quando um trem para em um pátio, sua linha no gráfico se torna horizontal. O início dessa linha horizontal é a DataChegada e o fim é a DataSaida. Essa linha horizontal é a representação visual da ocupação do pátio.
   Cálculo de Pontos: A função PlotarPontos recebe coordenadas (X1, Y1), (X2, Y2), (X3, Y3).
   (X1, Y1) a (X2, Y2) representa o deslocamento do trem (linha diagonal).
   (X2, Y2) a (X3, Y2) representa a parada no pátio (linha horizontal). A duração da ocupação é X3 - X2.
   Cancelamento de Ocupação: No arquivo UTPHintSeries.cpp, a variável IsCancelarOcupacao sugere que o sistema pode diferenciar entre uma parada (que gera uma ocupação planejada) e uma simples passagem pelo pátio, que pode não ser contada como uma ocupação de recurso para fins de planejamento de conflitos.
   b) Visualização Dedicada (Gantt de Ocupação)
   O arquivo FWidgetGanttOcupacao.h indica claramente que existe um componente de interface gráfica (um "widget") especificamente para mostrar a ocupação dos pátios em um formato de Diagrama de Gantt. Isso permite ao planejador focar exclusivamente no uso dos recursos do pátio, em vez de ver o gráfico de movimentação completo. A ação acOcupacaoPatiosExecute no arquivo FTP.cpp provavelmente é o que abre essa tela.
   c) Detecção de Conflitos
   A ocupação é a base para a detecção de conflitos.
   Os arquivos UTPConflitoSeries.h e UTPSBConflitoSeries.h mostram que o sistema tem classes para representar e desenhar conflitos.
   Um conflito ocorre quando duas ou mais "ocupações" (seja por trens ou por uma restrição/interdição) se sobrepõem no mesmo recurso (linha do pátio) e no mesmo intervalo de tempo.
   A função acVerificarConflitosExecute em FTP.cpp certamente aciona a lógica que percorre todos os movimentos, analisa suas ocupações e identifica essas sobreposições.
   d) Interação e Planejamento
   O código em UTPMovimentoSeries.cpp possui funções para interagir com o mouse (DoSeriesMouseEnter, DoSeriesMouseDblClick, etc.) e menções a "arrasto" (Arrastando). Isso indica que o planejador pode clicar e arrastar os movimentos dos trens no gráfico. Ao fazer isso, ele está, na prática, alterando os horários de chegada e saída e, consequentemente, o período de ocupação do pátio. O sistema então recalcula tudo e mostra se a nova programação gera algum conflito.
   Resumo
   Em suma, no contexto do projeto OptMove:
   O que é: A ocupação de pátios é o período em que uma linha de um pátio está sendo usada por um trem, tornando-a indisponível para outros.
   O que representa: Representa uma restrição de tempo e espaço, sendo a principal causa de conflitos operacionais e um elemento crucial para o planejamento.
   Como é usada: É modelada através dos horários de chegada e saída dos movimentos dos trens (TTPMovimento). É visualizada tanto no gráfico principal de trens (linhas horizontais) quanto em um Diagrama de Gantt dedicado (FWidgetGanttOcupacao). O sistema utiliza essa informação para detectar e exibir conflitos, permitindo que o planejador ajuste os horários de forma interativa para otimizar o uso dos pátios e garantir um plano de circulação viável.

O gráfico de ocupação de pátio é uma visualização do tipo Diagrama de Gantt, projetado para mostrar o uso de recursos (linhas do pátio) ao longo do tempo.

1. Estrutura Geral e Eixos
   O gráfico é bidimensional:
   Eixo Y (Vertical): Recursos - Linhas do Pátio
   Cada "faixa" ou "linha" horizontal no eixo Y representa um recurso físico discreto: uma linha específica dentro de um pátio ferroviário.
   Rótulos do Eixo Y: Os rótulos para cada faixa são os nomes das linhas do pátio (ex: "Linha 1", "Linha 2", "Linha de Desvio", "Perna de Triângulo", etc.). No seu código, isso corresponde ao NomeVia da classe TTPSB.
   Ordenação: As linhas no eixo Y são geralmente ordenadas de forma lógica, seja por número (Linha 1, 2, 3...) ou por sua disposição geográfica no pátio. O código (UTPSBSeries.cpp) menciona uma ordenação (ordNormal vs ordLinhas), o que confirma essa flexibilidade.
   Eixo X (Horizontal): Linha do Tempo
   O eixo X representa o tempo, fluindo da esquerda para a direita.
   Escala: A escala é contínua, representando data e hora (TDateTime).
   Rótulos do Eixo X: Os rótulos são marcadores de tempo, como horas cheias ("10:00", "11:00", "12:00") e, dependendo do nível de zoom, subdivisões (ex: a cada 15 ou 30 minutos). O código (FTP.cpp) define o incremento do eixo como UMAHORA.
   Linhas de Grade Verticais: Linhas de grade verticais são desenhadas em intervalos regulares (geralmente a cada hora) para facilitar a leitura dos horários.
2. Elementos Gráficos Dentro do Gráfico
   Dentro da área do gráfico, as ocupações são representadas por barras horizontais.
   Barras de Ocupação (Tarefas do Gantt):
   O que representam: Cada barra horizontal representa um trem ocupando uma linha específica do pátio.
   Posicionamento:
   A posição vertical da barra corresponde à linha do pátio que está sendo ocupada (seu recurso no eixo Y).
   A posição horizontal da barra é determinada pelo seu tempo de início e fim. A barra começa no X0 (data/hora de início da ocupação) e termina no X1 (data/hora de fim da ocupação).
   Cor da Barra: A cor da barra é crucial e representa o tipo de trem ou seu status. O código (UTPTremSeries.cpp) busca a cor do TipoTrem (fCorSerie\_), indicando que trens de carga, de passageiros, de serviço, etc., têm cores distintas para fácil identificação.
   Rótulo da Barra: Dentro ou ao lado da barra, é exibido o prefixo do trem (seu identificador, ex: "XPT-123"). Isso permite saber qual trem está ocupando a linha. O código em UTPTremSeries.cpp (SeriePrefixo->Text->Add(texto)) confirma a exibição do prefixo.
   Estilo da Barra: As barras podem ter estilos diferentes para comunicar informações adicionais:
   Sólida: Geralmente representa um movimento realizado ou confirmado.
   Tracejada/Hachurada: Pode representar um movimento planejado ou uma ocupação por uma atividade específica (como carga/descarga). O código em UTPTremSeries.cpp usa psDash para movimentos planejados e bsFDiagonal ou bsDiagCross para restrições.
   Barras de Restrição/Interdição:
   Além dos trens, o gráfico também exibe restrições e interdições como barras.
   Aparência: Essas barras geralmente têm uma cor e um padrão distintos para diferenciá-las das ocupações por trens. Por exemplo, uma interdição pode ser uma barra vermelha com hachuras. O código (UTPRestricaoSeries.cpp) define cores específicas para restrições (COR_RESTRICAO_PLAN, COR_RESTRICAO_INIC) e usa transparência para indicar seu status.
   Linha do Tempo Atual:
   Uma linha vertical proeminente (geralmente vermelha ou de cor viva) atravessa todo o gráfico na posição do tempo atual. Isso ajuda o planejador a ver o estado "agora" e comparar o planejado com o realizado. O código em TTPLinhaTempoSeries.h define a classe para essa linha (tltHoraAtual).
