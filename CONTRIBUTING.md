# Guia de Colaboração — PortfolioHUB

Este guia documenta o fluxo de trabalho e as práticas de colaboração com **Git e GitHub**
adotadas no PortfolioHUB de Arthur Vieira. Faz parte da seção *Compartilhamento e
Controle de Acesso* da implantação.

## Fluxo de trabalho (Git Flow simplificado)

1. **Sincronize** o repositório local:
   ```bash
   git pull origin main
   ```
2. **Crie uma branch** para cada tarefa (nunca trabalhe direto na `main`):
   ```bash
   git checkout -b feat/nome-da-tarefa
   ```
3. **Faça commits pequenos e descritivos** seguindo *Conventional Commits*:
   - `feat:` nova funcionalidade
   - `fix:` correção de bug
   - `docs:` documentação
   - `style:` formatação/estilo
   - `refactor:` refatoração sem mudança de comportamento
4. **Envie a branch** e abra um *Pull Request*:
   ```bash
   git push origin feat/nome-da-tarefa
   ```
5. **Revisão:** o PR é revisado (code review) antes do merge na `main`.
6. **Deploy automático:** ao integrar na `main`, o GitHub Actions publica o site no GitHub Pages.

## Papéis e permissões

| Papel | Permissão | Descrição |
| ----- | --------- | --------- |
| **Owner** (Arthur) | Admin | Gerencia o repositório, branches protegidas e colaboradores. |
| **Collaborator** | Write | Pode criar branches e abrir PRs; não faz push direto na `main`. |
| **Visitante** | Read | Visualiza o código e o site público. |

## Padrões de qualidade

- Mantenha o HTML válido (verificado pelo workflow de CI).
- Use os componentes/estilos já existentes em `css/styles.css`.
- Escreva textos em **português (pt-BR)**.
- Não inclua segredos ou dados sensíveis nos commits.

## Reportando problemas

- **Bugs / melhorias:** abra uma *issue* descrevendo o comportamento esperado e o atual.
- **Segurança:** siga o processo do arquivo [`SECURITY.md`](SECURITY.md).
