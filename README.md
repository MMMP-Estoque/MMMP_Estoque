# 🛒 Mini Market Mix Plus — MMMP Estoque

**Sistema Integrado de Gestão para Minimercado**

O **Mini Market Mix Plus (MMMP Estoque)** é um projeto de desenvolvimento de um sistema integrado de gestão para minimercados autônomos, com foco na centralização e automação dos processos de produtos, estoque, compras, vendas e finanças.

O projeto tem como objetivo substituir controles manuais, planilhas e registros descentralizados por uma aplicação que permita gerenciar as operações do minimercado de maneira integrada, organizada e rastreável.

A solução busca garantir maior confiabilidade das informações, reduzir erros operacionais, facilitar a reposição de mercadorias e fornecer dados consistentes para a tomada de decisões administrativas e financeiras.

---

# 📑 Sumário

1. [Visão Geral](#-1-visão-geral)
2. [Contexto do Projeto](#-2-contexto-do-projeto)
3. [Problema Identificado](#-3-problema-identificado)
4. [Objetivos do Sistema](#-4-objetivos-do-sistema)
5. [Stakeholders](#-5-stakeholders)
6. [Atores do Sistema](#-6-atores-do-sistema)
7. [Processos do Negócio](#-7-processos-do-negócio)
8. [Módulos do Sistema](#-8-módulos-do-sistema)
9. [Requisitos Funcionais](#-9-requisitos-funcionais)
10. [Requisitos Não Funcionais](#-10-requisitos-não-funcionais)
11. [Regras de Negócio](#-11-regras-de-negócio)
12. [Restrições e Permissões](#-12-restrições-e-permissões)
13. [Integrações e Sistemas Externos](#-13-integrações-e-sistemas-externos)
14. [Entidades e Informações Gerenciadas](#-14-entidades-e-informações-gerenciadas)
15. [Casos de Uso](#-15-casos-de-uso)
16. [Backlog do Produto](#-16-backlog-do-produto)
17. [Definições Consolidadas do Discovery](#-17-definições-consolidadas-do-discovery)
18. [Pontos em Aberto](#-18-pontos-em-aberto)
19. [Documentação do Projeto](#-19-documentação-do-projeto)
20. [Equipe](#-20-equipe)
21. [Mapa Consolidado do Discovery](#-21-mapa-consolidado-do-discovery)

---

# 🛒 1. Visão Geral

| **Informação** | **Descrição** |
|---|---|
| Nome do sistema | Mini Market Mix Plus — MMMP Estoque |
| Sigla | MMMP |
| Domínio | Gestão integrada de minimercados autônomos |
| Empresa solicitante | Mini Market Mix Plus |
| Segmento | Comércio varejista |
| Modelo de negócio | Minimercados autônomos em condomínios fechados |
| Usuários | Responsáveis administrativos, operacionais e financeiros |
| Interface | Administrativa e de autoatendimento |
| Instituição | FATEC Sorocaba |
| Curso | Tecnologia em Análise e Desenvolvimento de Sistemas |
| Disciplina | Engenharia de Software I |

O MMMP Estoque tem como propósito centralizar as informações administrativas e operacionais do minimercado, permitindo o gerenciamento integrado de produtos, movimentações de estoque, compras, vendas e finanças.

A aplicação deverá oferecer uma interface administrativa para os responsáveis pela gestão e uma interface de autoatendimento para os consumidores, respeitando as permissões e responsabilidades de cada perfil.

# 🏪 2. Contexto do Projeto

A empresa Mini Market Mix Plus atua no segmento de minimercados autônomos instalados em condomínios fechados.

Seu catálogo contempla produtos de diferentes categorias, como:

- Produtos de limpeza;
- Produtos de higiene pessoal;
- Alimentos;
- Bebidas;
- Demais mercadorias comercializadas pelo estabelecimento.

Atualmente, parte dos processos administrativos e operacionais depende de controles manuais, planilhas do Excel, anotações em papel e sistemas externos.

O controle de estoque e parte das atividades financeiras concentram-se em poucos responsáveis, gerando sobrecarga e dificultando a consulta e a manutenção das informações.

Entre os processos existentes, destacam-se:

- Cadastro e acompanhamento de produtos;
- Compras em mercados e atacadistas;
- Conferência e reposição de mercadorias;
- Controle de estoque;
- Vendas por autoatendimento;
- Registro de receitas e despesas;
- Acompanhamento de contas a pagar e a receber;
- Atendimento e suporte aos consumidores.

O novo sistema pretende integrar esses processos, reduzindo a dependência de controles paralelos e proporcionando maior consistência entre as informações.

# 🚨 3. Problema Identificado

Com base no documento original e nas entrevistas realizadas durante o levantamento de requisitos, foram identificados os seguintes problemas:

1. **Dificuldade no controle de estoque:** grande parte do acompanhamento depende de observação visual e registros manuais.
2. **Inconsistência nas quantidades:** produtos vendidos em kits, fardos e combos podem ocasionar divergências no estoque.
3. **Falta de rastreabilidade:** dificuldade para identificar responsáveis pelas movimentações e alterações realizadas.
4. **Descentralização das informações:** dados distribuídos em planilhas, papéis e sistemas diferentes.
5. **Sobrecarga operacional:** concentração de diversas atividades em poucos funcionários.
6. **Dificuldade na reposição:** necessidade de verificar manualmente quais produtos precisam ser comprados.
7. **Controle de validade limitado:** dificuldade para acompanhar produtos próximos do vencimento.
8. **Falta de integração:** informações de estoque, vendas e financeiro não estão completamente integradas.
9. **Dificuldade no acompanhamento financeiro:** possibilidade de esquecimento de contas e pagamentos em atraso.
10. **Dificuldade de recuperação histórica:** consulta de informações de períodos anteriores pouco organizada.
11. **Dependência de processos manuais:** decisões operacionais dependem da experiência e intervenção dos responsáveis.
12. **Dificuldade de identificar inconsistências nas vendas:** necessidade de mecanismos para identificar possíveis duplicidades e recebimentos suspeitos.

O MMMP Estoque pretende solucionar esses problemas por meio de uma plataforma integrada, com registros centralizados, validações e histórico das operações.

# 🎯 4. Objetivos do Sistema

Os principais objetivos identificados são:

- Centralizar as informações administrativas e operacionais.
- Gerenciar o cadastro de produtos.
- Controlar entradas, saídas e ajustes de estoque.
- Manter o histórico das movimentações.
- Garantir a baixa correta dos componentes de produtos compostos.
- Controlar produtos próximos do vencimento.
- Gerar alertas de estoque baixo.
- Automatizar sugestões e listas de compras.
- Comparar preços entre fornecedores quando houver informações disponíveis.
- Registrar e consultar vendas.
- Integrar vendas e movimentações de estoque.
- Integrar vendas e registros financeiros.
- Controlar receitas e despesas.
- Gerenciar contas a pagar e a receber.
- Acompanhar recebimentos suspeitos e possíveis duplicidades.
- Permitir importação de documentos fiscais.
- Gerar relatórios e indicadores gerenciais.
- Implementar autenticação e controle de permissões.
- Registrar os responsáveis pelas operações.
- Preservar o histórico de alterações relevantes.
- Facilitar a tomada de decisões administrativas.

# 👥 5. Stakeholders

| **Stakeholder** | **Responsabilidade / Interesse** |
|---|---|
| Proprietários | Administração geral e decisões estratégicas do minimercado |
| Responsáveis pelo estoque | Controle das movimentações, inventários e reposição |
| Responsáveis pelas compras | Aquisição de mercadorias e comparação de preços |
| Responsáveis financeiros | Controle de receitas, despesas e obrigações financeiras |
| Responsáveis pelo atendimento | Suporte aos consumidores e tratamento de ocorrências |
| Clientes / moradores | Utilização do autoatendimento e realização de compras |
| Equipe de desenvolvimento | Levantamento, especificação, desenvolvimento e manutenção do sistema |

# 👤 6. Atores do Sistema

Os atores representam os diferentes perfis que interagem com a aplicação.

A matriz definitiva de permissões deverá ser mantida conforme os requisitos consolidados.

## 6.1 Administrador

Responsável pela administração geral da aplicação.

Possíveis responsabilidades:

- Gerenciar usuários;
- Administrar permissões;
- Consultar informações gerenciais;
- Acompanhar operações;
- Consultar históricos e registros de auditoria;
- Gerenciar configurações administrativas autorizadas.

## 6.2 Responsável pelo Estoque

Responsável pelo acompanhamento e controle das mercadorias.

Principais responsabilidades:

- Consultar produtos;
- Registrar entradas e saídas;
- Realizar inventários;
- Registrar ajustes autorizados;
- Acompanhar movimentações;
- Consultar produtos próximos do vencimento;
- Acompanhar alertas de estoque baixo;
- Gerenciar listas de reposição.

## 6.3 Responsável pelas Compras

Responsável pelas atividades de aquisição e reposição de mercadorias.

Principais responsabilidades:

- Consultar produtos que precisam ser repostos;
- Gerenciar listas de compras;
- Registrar informações de fornecedores;
- Comparar preços disponíveis;
- Acompanhar compras;
- Registrar recebimentos de mercadorias.

## 6.4 Responsável Financeiro

Responsável pelo acompanhamento financeiro do minimercado.

Principais responsabilidades:

- Consultar receitas e despesas;
- Registrar movimentações financeiras;
- Gerenciar contas a pagar;
- Gerenciar contas a receber;
- Acompanhar recebimentos;
- Analisar recebimentos suspeitos;
- Consultar relatórios financeiros.

## 6.5 Responsável pelo Atendimento

Responsável pelo suporte aos consumidores e tratamento de ocorrências.

Principais responsabilidades:

- Consultar informações necessárias ao atendimento;
- Acompanhar ocorrências;
- Auxiliar na identificação de problemas;
- Consultar informações de vendas, conforme autorização.

## 6.6 Cliente

Responsável pela utilização da interface de autoatendimento.

Principais responsabilidades:

- Consultar produtos disponíveis;
- Selecionar mercadorias;
- Realizar compras;
- Efetuar pagamentos;
- Receber informações relacionadas à compra.

**Observação:** os perfis acima representam a organização funcional dos atores. A separação definitiva entre cargos, usuários e permissões depende da matriz de acesso aprovada.

# ⚙️ 7. Processos do Negócio

Os processos identificados são organizados nas seguintes categorias.

## 7.1 Gestão de Produtos

- Cadastro de produtos;
- Consulta de produtos;
- Atualização de informações;
- Organização por categorias;
- Controle de preços;
- Identificação de produtos unitários e compostos;
- Gerenciamento de unidades de medida;
- Controle de validade.

## 7.2 Gestão de Estoque

- Registro de entradas;
- Registro de saídas;
- Registro de ajustes;
- Controle de inventário;
- Consulta de saldo disponível;
- Histórico de movimentações;
- Identificação de divergências;
- Alertas de estoque baixo;
- Alertas de vencimento próximo.

## 7.3 Gestão de Produtos Compostos

- Cadastro de kits;
- Cadastro de fardos;
- Cadastro de combos;
- Associação entre produtos principais e componentes;
- Definição de quantidades dos componentes;
- Controle de composição;
- Baixa proporcional dos componentes após a venda;
- Gerenciamento de alterações na composição.

## 7.4 Gestão de Compras e Reposição

- Identificação de produtos que precisam ser repostos;
- Geração de listas de compras;
- Consulta de preços;
- Comparação de fornecedores;
- Registro de aquisições;
- Conferência de mercadorias;
- Entrada de produtos no estoque.

## 7.5 Gestão de Vendas

- Consulta de produtos;
- Seleção de mercadorias;
- Leitura de códigos de barras;
- Registro de itens vendidos;
- Cálculo dos valores;
- Processamento de pagamentos;
- Registro da venda;
- Atualização do estoque;
- Registro financeiro;
- Consulta de vendas anteriores.

## 7.6 Gestão Financeira

- Registro de receitas;
- Registro de despesas;
- Controle de contas a pagar;
- Controle de contas a receber;
- Acompanhamento de vencimentos;
- Histórico financeiro;
- Controle de recebimentos;
- Identificação de possíveis inconsistências;
- Relatórios financeiros.

## 7.7 Gestão de Documentos Fiscais

- Importação de documentos fiscais;
- Leitura de arquivos PDF;
- Leitura de arquivos XML;
- Identificação de produtos;
- Conferência das informações;
- Tratamento de documentos duplicados;
- Identificação de informações inválidas;
- Registro dos resultados da importação.

## 7.8 Gestão de Usuários e Segurança

- Autenticação;
- Gerenciamento de usuários;
- Controle de permissões;
- Identificação dos responsáveis;
- Histórico de operações;
- Registro de alterações;
- Controle de acesso às funcionalidades.

## 7.9 Monitoramento e Ocorrências

- Identificação de possíveis vendas duplicadas;
- Identificação de recebimentos suspeitos;
- Geração de alertas;
- Notificação dos responsáveis;
- Análise das ocorrências;
- Registro de decisões;
- Histórico de tratamento;
- Reabertura de falhas por meio de novas ocorrências vinculadas.

# 🧩 8. Módulos do Sistema

A organização funcional do MMMP Estoque contempla os seguintes módulos:

| **Módulo** | **Descrição** |
|---|---|
| Módulo 1 — Produtos | Cadastro, consulta, edição e organização dos produtos |
| Módulo 2 — Estoque | Entradas, saídas, ajustes, inventários e histórico |
| Módulo 3 — Produtos Compostos | Gerenciamento de kits, fardos, combos e componentes |
| Módulo 4 — Compras e Reposição | Listas de compras, fornecedores e comparação de preços |
| Módulo 5 — Vendas | Registro, consulta e gerenciamento das vendas |
| Módulo 6 — Financeiro | Receitas, despesas, contas a pagar e a receber |
| Módulo 7 — Documentos Fiscais | Importação, leitura e validação de documentos fiscais |
| Módulo 8 — Relatórios e Indicadores | Indicadores de estoque, vendas e finanças |
| Módulo 9 — Usuários e Permissões | Autenticação, autorização e gerenciamento de acessos |
| Módulo 10 — Alertas e Ocorrências | Monitoramento, notificações e tratamento de inconsistências |
| Módulo 11 — Unidades de Medida | Unidades, conversões e histórico de alterações |
| Módulo 12 — Backup e Recuperação | Proteção e recuperação das informações |

Os módulos deverão compartilhar informações de maneira integrada, respeitando as regras de negócio e a consistência dos dados.

# 📋 9. Requisitos Funcionais

Os requisitos funcionais foram identificados a partir do documento original, das entrevistas e do processo de Discovery.

As funcionalidades contempladas incluem:

| **Área** | **Requisitos funcionais identificados** |
|---|---|
| Produtos | Cadastrar, consultar e editar produtos; organizar categorias; gerenciar preços e informações |
| Estoque | Registrar entradas, saídas e ajustes; consultar saldo; realizar inventários; manter histórico |
| Produtos compostos | Cadastrar kits, fardos e combos; associar componentes; calcular baixas proporcionais |
| Unidades de medida | Configurar unidades e conversões; manter histórico das alterações |
| Compras | Gerenciar fornecedores, listas de compras e aquisições |
| Reposição | Identificar produtos com estoque baixo e sugerir reposições |
| Validade | Registrar datas de validade e identificar produtos próximos do vencimento |
| Vendas | Registrar vendas, itens, quantidades, valores e formas de pagamento |
| Financeiro | Registrar receitas e despesas; gerenciar contas a pagar e a receber |
| Recebimentos | Identificar recebimentos suspeitos, permitir análise e registrar decisões |
| Duplicidades | Identificar possíveis vendas ou recebimentos duplicados |
| Documentos fiscais | Importar e validar documentos fiscais em formatos previstos |
| Relatórios | Consultar indicadores e relatórios por período |
| Usuários | Gerenciar usuários, autenticação e permissões |
| Auditoria | Registrar responsáveis, datas, horários, justificativas e alterações relevantes |
| Alertas | Gerar notificações relacionadas a estoque, validade e ocorrências |

Os requisitos detalhados devem ser consultados no documento formal de requisitos funcionais, que constitui a referência para os identificadores, descrições e critérios de aceitação.

# 🔒 10. Requisitos Não Funcionais

Os requisitos não funcionais estabelecem as características de qualidade e as restrições de funcionamento do sistema.

| **Categoria** | **Descrição** |
|---|---|
| Usabilidade | Interfaces claras, intuitivas e consistentes |
| Responsividade | Adaptação das interfaces aos diferentes dispositivos |
| Compatibilidade | Compatibilidade com os navegadores e dispositivos definidos no documento de referência |
| Segurança | Autenticação, controle de acesso e proteção das informações |
| Privacidade | Tratamento adequado de dados pessoais, respeitando a LGPD |
| Integridade | Consistência dos dados entre estoque, vendas e financeiro |
| Confiabilidade | Validação de entradas e tratamento adequado de erros |
| Rastreabilidade | Registro das operações relevantes e identificação dos responsáveis |
| Disponibilidade | Tratamento de falhas e indisponibilidade de serviços externos |
| Backup | Proteção e possibilidade de recuperação das informações |
| Manutenibilidade | Organização do código e facilidade de manutenção |
| Testabilidade | Possibilidade de verificar as funcionalidades por meio de testes |
| Interoperabilidade | Comunicação com serviços e sistemas externos quando definidos |
| Documentação | Disponibilização de documentação técnica e orientações de utilização |
| Acessibilidade | Interfaces que considerem as necessidades de acessibilidade dos usuários |

**Observações importantes:**

- As vendas dependem de conexão com a internet, conforme identificado nas entrevistas.
- O sistema não deverá assumir funcionamento offline para concluir vendas.
- Os parâmetros quantitativos de desempenho e disponibilidade ainda precisam ser formalmente definidos.
- A frequência, retenção e política de recuperação dos backups devem ser aprovadas.

# 📜 11. Regras de Negócio

As regras de negócio estabelecem as condições que devem ser respeitadas durante a execução das operações.

## 11.1 Estoque

- Toda movimentação deve registrar o produto, a quantidade, a data e hora, o tipo de movimentação e o responsável.
- As entradas devem atualizar o saldo disponível.
- As saídas devem atualizar o saldo disponível.
- Os ajustes devem preservar o histórico da operação.
- Ajustes de estoque devem exigir autorização e justificativa, conforme as regras de permissão aprovadas.
- O saldo disponível deve permanecer coerente com as movimentações registradas.

## 11.2 Produtos Compostos

- Produtos compostos devem possuir relacionamento com seus componentes.
- A venda de um kit, fardo ou combo deve realizar a baixa dos respectivos componentes.
- A composição deve considerar as quantidades configuradas.
- Alterações na composição devem preservar o histórico necessário.
- A descontinuação de produtos compostos deve considerar a existência de registros e vínculos anteriores.

## 11.3 Compras e Recebimentos

- A entrada de mercadorias poderá ser registrada manualmente após conferência ou por meio de entrada assistida pela nota fiscal.
- O estoque deve ser atualizado imediatamente após a conferência e o registro de cada entrada.
- Documentos fiscais importados devem passar por validação.
- Documentos duplicados e informações inválidas devem ser tratados sem comprometer a integridade dos registros.

## 11.4 Unidades de Medida

- Unidades e conversões devem ser configuráveis.
- Alterações nas conversões devem manter o histórico da configuração anterior e da nova.
- O histórico deve identificar a data, a hora e o responsável.
- Movimentações anteriores devem preservar a interpretação correspondente à conversão utilizada no momento do registro.

## 11.5 Vendas e Financeiro

- A conclusão de uma venda deve gerar os registros correspondentes.
- A venda deve atualizar o estoque.
- A venda deve manter relação com seu registro financeiro.
- As informações da venda devem permitir consultas posteriores.
- Recebimentos suspeitos devem seguir o fluxo de análise definido.
- Possíveis duplicidades devem ser identificadas e tratadas conforme as decisões autorizadas.

## 11.6 Alertas e Ocorrências

- Alertas devem ser direcionados aos responsáveis definidos.
- Recebimentos suspeitos sem análise devem gerar novo alerta e elevação de prioridade após o período estabelecido.
- As decisões sobre recebimentos suspeitos devem registrar justificativa, responsável e data e hora.
- Ocorrências encerradas que apresentarem novamente o mesmo problema devem gerar uma nova ocorrência vinculada à anterior, preservando o encerramento original.

## 11.7 Internet e Autoatendimento

- A realização de vendas depende da disponibilidade de conexão com a internet.
- Em caso de indisponibilidade, a compra não poderá ser concluída.
- Uma compra interrompida por falha no sistema deverá receber tratamento adequado, evitando registros financeiros ou movimentações inconsistentes.

# 🔐 12. Restrições e Permissões

O sistema deverá utilizar autenticação e controle de acesso para garantir que cada usuário execute somente as operações autorizadas.

As permissões deverão considerar:

- Perfil do usuário;
- Funcionalidade acessada;
- Tipo de operação;
- Responsabilidade operacional;
- Necessidade de autorização;
- Histórico de ações realizadas.

Entre as operações que exigem atenção especial estão:

- Ajustes de estoque;
- Alterações de composição de produtos;
- Alterações de unidades e conversões;
- Análise de recebimentos suspeitos;
- Descarte de recebimentos suspeitos;
- Alterações financeiras;
- Gerenciamento de usuários e permissões;
- Restauração de backups.

A matriz definitiva de permissões deverá ser mantida no documento de requisitos correspondente.

# 🌐 13. Integrações e Sistemas Externos

O projeto contempla integrações previstas para apoiar as operações do minimercado.

## 13.1 Sistemas de Pagamento

Possibilidade de integração com serviços externos para:

- Processamento de pagamentos via Pix;
- Processamento de pagamentos via cartão;
- Recebimento de confirmações de pagamento;
- Registro dos resultados das transações.

A escolha dos provedores e os contratos de integração ainda dependem de definição técnica e validação.

## 13.2 Documentos Fiscais

O sistema deverá contemplar importação de documentos fiscais, incluindo:

- Arquivos PDF;
- Arquivos XML.

A importação deverá prever:

- Validação das informações;
- Identificação de documentos duplicados;
- Tratamento de dados inválidos;
- Tratamento de falhas de leitura;
- Conferência antes da efetivação dos registros.

## 13.3 Fornecedores

Poderão ser utilizadas informações de fornecedores para apoiar:

- Consulta de preços;
- Comparação de valores;
- Planejamento de compras;
- Reposição de mercadorias.

A comparação dependerá da disponibilidade e confiabilidade dos dados.

## 13.4 Sistemas Existentes

O documento original menciona o sistema Mercatus no contexto dos processos atuais.

Sua substituição, continuidade de utilização ou integração com o MMMP Estoque deverá ser definida conforme os requisitos técnicos e operacionais aprovados.

**Importante:** as integrações são funcionalidades previstas. Não se considera que estejam implementadas ou homologadas.

# 🗂️ 14. Entidades e Informações Gerenciadas

As principais entidades conceituais identificadas são:

| **Entidade** | **Informações gerenciadas** |
|---|---|
| Produto | Identificação, descrição, categoria, preço e unidade de medida |
| Categoria | Classificação dos produtos |
| Unidade de Medida | Unidade utilizada para quantificar produtos |
| Conversão de Unidade | Relação entre unidades e histórico de alterações |
| Produto Composto | Identificação do kit, fardo ou combo |
| Componente | Produto associado a uma composição e sua quantidade |
| Estoque | Quantidade disponível por produto |
| Movimentação | Produto, quantidade, tipo, data, hora e responsável |
| Inventário | Contagem física, saldo registrado e divergências |
| Fornecedor | Identificação e informações comerciais |
| Compra | Produtos adquiridos, quantidades, valores e fornecedor |
| Recebimento | Conferência e registro da entrada de mercadorias |
| Documento Fiscal | Informações importadas e dados de validação |
| Venda | Data, itens, valores, quantidades e situação |
| Item da Venda | Produto, quantidade e valor correspondente |
| Pagamento | Forma, valor, identificação e situação da transação |
| Receita | Valores recebidos e informações relacionadas |
| Despesa | Valores pagos ou previstos e suas classificações |
| Conta a Pagar | Valor, vencimento e situação |
| Conta a Receber | Valor, vencimento e situação |
| Usuário | Identificação e dados de acesso |
| Perfil e Permissão | Autorizações de acesso e operação |
| Alerta | Tipo, destinatário, prioridade e situação |
| Ocorrência | Problema identificado, responsável e histórico de tratamento |
| Auditoria | Operação, responsável, data, hora e alterações realizadas |
| Backup | Informações relacionadas às cópias e restaurações |

Os atributos completos, relacionamentos, cardinalidades e restrições de integridade deverão ser especificados na modelagem do banco de dados.

# 📊 15. Casos de Uso

Os casos de uso deverão representar as interações entre os atores e as funcionalidades da aplicação.

Entre os principais casos de uso identificados estão:

**Produtos**
- Cadastrar produto;
- Consultar produto;
- Editar produto;
- Gerenciar categorias;
- Gerenciar unidades de medida.

**Estoque**
- Registrar entrada;
- Registrar saída;
- Realizar ajuste;
- Consultar movimentações;
- Realizar inventário;
- Consultar alertas de estoque;
- Consultar validade.

**Produtos Compostos**
- Cadastrar kit;
- Cadastrar fardo;
- Cadastrar combo;
- Associar componentes;
- Atualizar composição;
- Consultar histórico de composição.

**Compras**
- Criar lista de compras;
- Consultar fornecedores;
- Comparar preços;
- Registrar compra;
- Conferir recebimento.

**Vendas**
- Consultar produtos;
- Registrar venda;
- Processar pagamento;
- Consultar vendas;
- Consultar histórico.

**Financeiro**
- Registrar receita;
- Registrar despesa;
- Gerenciar contas a pagar;
- Gerenciar contas a receber;
- Consultar relatórios financeiros.

**Segurança e Ocorrências**
- Autenticar usuário;
- Gerenciar permissões;
- Consultar auditoria;
- Analisar recebimento suspeito;
- Registrar decisão;
- Encerrar ocorrência;
- Reabrir falha por nova ocorrência vinculada.

Os diagramas de casos de uso deverão acompanhar a documentação formal de requisitos.

# 📚 16. Backlog do Produto

O backlog do MMMP Estoque foi organizado seguindo uma estrutura hierárquica de gerenciamento de requisitos:

```text
EPIC
  └── FEATURE
        └── USER STORY
```

## 16.1 Identificadores

| **Elemento** | **Padrão** |
|---|---|
| Epic | EPIC-XXX |
| Feature | FEAT-XXX |
| User Story | US-XXX |

Os identificadores devem ser estáveis e preservados durante as revisões do backlog.

## 16.2 Estrutura das User Stories

Cada User Story deverá conter:

- ID;
- Título;
- Epic;
- Feature, quando aplicável;
- Objetivo;
- Ator;
- História de usuário;
- Descrição detalhada;
- Prioridade;
- Valor de negócio.

## 16.3 Organização do Backlog

O backlog contempla as seguintes áreas de negócio:

- Gestão de produtos;
- Gestão de estoque;
- Produtos compostos;
- Compras e reposição;
- Controle de vendas;
- Gestão financeira;
- Importação fiscal;
- Usuários e permissões;
- Alertas e ocorrências;
- Unidades de medida;
- Backup e recuperação;
- Relatórios e indicadores.

O detalhamento integral das Epics, Features e User Stories deverá permanecer no documento específico do backlog.

## 16.4 Priorização

A priorização deverá seguir as classificações adotadas no backlog consolidado, preservando os valores definidos para cada história.

A implementação deverá respeitar as dependências entre funcionalidades, especialmente as relacionadas à integridade do estoque, vendas e financeiro.

# 🧭 17. Definições Consolidadas do Discovery

O Discovery foi realizado para esclarecer ambiguidades do documento original, identificar regras operacionais e consolidar decisões necessárias para a especificação do sistema.

Até a consolidação desta documentação, foram registradas respostas para 83 perguntas de Discovery.

Entre as decisões registradas, destacam-se:

| **Assunto** | **Definição consolidada** |
|---|---|
| Entrada de mercadorias | Permitir registro manual após conferência e entrada assistida pela nota fiscal |
| Atualização do estoque | Atualizar imediatamente após a conferência e o registro de cada entrada |
| Produtos compostos | Considerar o relacionamento entre produtos principais e componentes |
| Produtos descontinuados | Permitir tratamento conforme a existência de vínculos e registros |
| Unidades de medida | Permitir unidades e conversões configuráveis |
| Alterações de conversão | Manter histórico anterior e novo, com data, hora e responsável |
| Duplicidade de vendas | Identificar possíveis recebimentos ou registros duplicados |
| Recebimentos suspeitos | Permitir análise e decisão por responsável autorizado |
| Tratamento de suspeitas | Permitir processar ou descartar recebimentos suspeitos, mediante justificativa e identificação |
| Descarte de suspeitas | Excluir o registro operacional suspeito após registrar a justificativa em histórico separado |
| Destinatários de alertas | Direcionar notificações aos responsáveis definidos |
| Suspeitas sem análise | Reenviar o alerta e elevar sua prioridade após o período estabelecido |
| Decisão sobre recebimento suspeito | Registrar decisão, justificativa, responsável e data e hora |
| Confirmação de operações | Registrar usuário responsável e data e hora da confirmação |
| Reabertura de falhas | Criar nova ocorrência vinculada à falha anterior, mantendo a ocorrência original encerrada |

As definições apresentadas representam decisões registradas no Discovery. Os fluxos completos, condições e critérios de aceitação devem permanecer vinculados aos requisitos correspondentes.

# ❓ 18. Pontos em Aberto

Os pontos em aberto representam informações que ainda precisam de definição, detalhamento ou validação.

Os identificadores oficiais devem ser mantidos no registro consolidado de requisitos, utilizando o padrão `OPEN-XXX`.

Entre os temas que exigem atenção estão:

## Produtos e Unidades de Medida

- Detalhamento dos atributos obrigatórios dos produtos;
- Regras completas para descontinuação e inativação;
- Tratamento de alterações de composição;
- Regras de arredondamento e conversão de unidades, quando aplicáveis.

## Estoque

- Critérios de autorização para cada tipo de ajuste;
- Limites de estoque mínimo por produto;
- Critérios de inventário;
- Tratamento de divergências;
- Política de bloqueio ou permissão para saldo insuficiente.

## Compras e Fornecedores

- Dados obrigatórios dos fornecedores;
- Critérios de comparação de preços;
- Origem e atualização dos preços;
- Regras para aprovação de compras;
- Tratamento de recebimentos parciais.

## Vendas e Pagamentos

- Provedores de pagamento;
- Regras de confirmação e conciliação;
- Tratamento de estornos e cancelamentos;
- Regras completas de identificação de duplicidades;
- Critérios de análise e encerramento de recebimentos suspeitos.

## Financeiro

- Regras completas para classificação de receitas e despesas;
- Critérios de geração e atualização de contas;
- Tratamento de juros, multas e pagamentos parciais;
- Regras de conciliação financeira.

## Documentos Fiscais

- Definição das fontes de documentos;
- Regras de validação fiscal;
- Tratamento de notas parcialmente processadas;
- Regras de vinculação dos documentos aos produtos e compras.

## Usuários e Permissões

- Matriz completa de acesso;
- Regras de autorização para operações críticas;
- Política de gerenciamento de usuários;
- Tratamento de usuários inativos.

## Segurança e Infraestrutura

- Estratégia de armazenamento;
- Frequência e retenção dos backups;
- Política de recuperação;
- Parâmetros de desempenho e disponibilidade;
- Estratégia de monitoramento e diagnóstico.

## Integrações

- Definição dos provedores de pagamento;
- Possibilidade de integração com o Mercatus;
- Definição das interfaces de integração fiscal;
- Contratos e formatos das APIs externas.

**Observação:** esta seção apresenta os temas que merecem acompanhamento. Ela não substitui o registro oficial de pendências e não deve ser utilizada para alterar silenciosamente o status dos itens OPEN já cadastrados.

# 📖 19. Documentação do Projeto

A documentação do MMMP Estoque utiliza como fonte principal o documento de levantamento de requisitos elaborado durante a disciplina Engenharia de Software I.

## 19.1 Documento de Referência

**Grupo 3 — Sistema para Minimercado — Versão Final.pdf**

Conteúdo:

- Solicitação do sistema;
- Contexto da empresa;
- Descrição dos processos e setores;
- Problemas identificados;
- Entrevistas;
- Situação atual;
- Requisitos do novo sistema;
- Requisitos funcionais;
- Requisitos não funcionais;
- Prototipação;
- Telas da aplicação.

## 19.2 Documentação Complementar

O projeto também contempla os seguintes artefatos:

- Mapa Inicial do Discovery;
- Registro das perguntas e respostas do Discovery;
- Requisitos funcionais consolidados;
- Requisitos não funcionais consolidados;
- Regras de negócio;
- Registro de pontos em aberto;
- Backlog do produto;
- Epics;
- Features;
- User Stories;
- Diagramas de casos de uso;
- Modelagem de dados;
- Documentação de arquitetura;
- Plano de testes;
- Documentação técnica;
- Manual de utilização.

## 19.3 Estado do Projeto

A documentação de requisitos e Discovery constitui a base para as próximas etapas de arquitetura e implementação.

O status das funcionalidades deverá ser atualizado conforme evidências reais do desenvolvimento:

| **Status** | **Significado** |
|---|---|
| Planejado | Funcionalidade prevista nos requisitos ou backlog |
| Em desenvolvimento | Implementação iniciada |
| Implementado | Implementação concluída |
| Testado | Testes executados e resultados registrados |
| Validado | Funcionalidade aprovada conforme critérios de aceitação |

A existência de um requisito ou protótipo não significa que a funcionalidade esteja implementada.

# 🎓 20. Equipe

Projeto desenvolvido por estudantes do curso de Tecnologia em Análise e Desenvolvimento de Sistemas da FATEC Sorocaba.

**Disciplina:** Engenharia de Software I

**Professor:** Levi Rodrigues Munhoz

**Grupo:** Grupo 3

**Integrantes:**

- João Victor Soares
- Marcus André
- Matheus Macário
- Ryan de Lima
- Stella Maris Ferreira de Barros
- Sofia Oliveira da Silva

**Local:** Sorocaba — SP

**Período do documento inicial:** Abril de 2026

# 🗺️ 21. Mapa Consolidado do Discovery

## MAPA DO PROJETO MMMP ESTOQUE

| **Dimensão** | **Consolidação** |
|---|---|
| Sistema | Mini Market Mix Plus — MMMP Estoque |
| Contexto | Gestão de minimercados autônomos em condomínios fechados |
| Problema central | Controles descentralizados, processos manuais e inconsistência de informações |
| Solicitante | Mini Market Mix Plus |
| Stakeholders | Proprietários, responsáveis operacionais, financeiros e clientes |
| Atores | Administrador, responsáveis por estoque, compras, financeiro, atendimento e clientes |
| Objetivos | Centralização, automação, integridade, rastreabilidade e confiabilidade |
| Processos | Produtos, estoque, compras, reposição, vendas e finanças |
| Produtos especiais | Kits, fardos e combos |
| Regras principais | Controle por movimentações, baixa de componentes, histórico e autorização |
| Segurança | Autenticação, permissões e auditoria |
| Integrações | Pagamentos, documentos fiscais, fornecedores e sistemas existentes, conforme definição |
| Requisitos de qualidade | Usabilidade, responsividade, segurança, integridade e manutenibilidade |
| Conectividade | Vendas dependentes de internet |
| Discovery | 83 perguntas respondidas |
| Backlog | Estrutura Epic → Feature → User Story |
| Pontos em aberto | Mantidos no registro oficial de requisitos |
| Estado documental | Requisitos e Discovery consolidados como base para arquitetura e implementação |

## Considerações finais

O Mini Market Mix Plus — MMMP Estoque representa uma proposta de modernização dos processos administrativos, operacionais e financeiros de um minimercado autônomo.

A documentação apresentada consolida o conhecimento obtido por meio do documento original, das entrevistas e das decisões registradas durante o Discovery.

A principal preocupação do projeto é garantir que as informações de produtos, estoque, compras, vendas e finanças permaneçam integradas e consistentes.

O desenvolvimento deverá ocorrer de maneira incremental, priorizando inicialmente os processos essenciais e preservando a rastreabilidade das operações.

As próximas etapas deverão contemplar a arquitetura da aplicação, a modelagem do banco de dados, a definição dos contratos de integração, a implementação dos módulos e a validação das regras de negócio por meio de testes.

Este README deverá evoluir junto com o projeto, mantendo alinhamento com os requisitos aprovados, o backlog e o estado real da implementação.

---

**Mini Market Mix Plus — MMMP Estoque**

*Centralizando informações. Integrando operações. Garantindo o controle.* 🛒
