# Documentação de Implantação — PortfolioHUB + IA Gemini

**Autor:** Arthur Vieira Fernandes Ribeiro
**Projeto:** PortfolioHUB — plataforma centralizada de projetos e portfólio digital
**Repositório:** https://github.com/Arthur259493/PortfolioHUB
**Site em produção:** https://arthur259493.github.io/PortfolioHUB/

Este documento descreve, seção a seção, o processo completo de implantação do PortfolioHUB,
conforme exigido no desafio *Entrega Final*. O **Google Gemini** foi utilizado como ferramenta
de apoio e guia em todas as etapas.

---

## 1. Planejamento da Implantação

### Objetivo
Implantar uma plataforma web que centralize e exiba meus projetos e portfólio digital,
integrada ao GitHub, com práticas de gestão de usuários, segurança e controle de acesso.

### Plano de implantação

| Etapa | Descrição | Ferramentas |
| ----- | --------- | ----------- |
| 1 | Planejamento e definição de escopo | Google Gemini |
| 2 | Configuração do ambiente e repositório no GitHub | Git, GitHub |
| 3 | Desenvolvimento do site e integração com o GitHub | HTML, CSS, JS, API do GitHub |
| 4 | Gestão de usuários e segurança | GitHub (2FA, papéis, branch protection) |
| 5 | Compartilhamento e controle de acesso | Git, Pull Requests, CODEOWNERS |
| 6 | Finalização, testes e deploy em produção | GitHub Actions, GitHub Pages |
| 7 | Revisão final e apresentação | Documentação + vídeo (YouTube) |

### Papel do Google Gemini
O Gemini foi usado como guia da trilha de implantação: estruturar o plano, esclarecer
conceitos de Git/GitHub, revisar boas práticas de segurança e validar decisões técnicas.

---

## 2. Configuração Inicial e Integração com o GitHub

### Ambiente
- Repositório **`PortfolioHUB`** (público) na conta `Arthur259493`.
- Estrutura organizada: `css/`, `js/`, `assets/`, `docs/`, `.github/`.
- Controle de versão com Git e commits descritivos (*Conventional Commits*).

### Integração com o GitHub (armazenamento de projetos)
A página **Projetos** (`projects.html`) consome a **API pública do GitHub** para listar
automaticamente os repositórios:

```javascript
fetch("https://api.github.com/users/Arthur259493/repos?sort=updated&per_page=100")
  .then(r => r.json())
  .then(render);
```

Cada repositório vira um card com nome, descrição, linguagem, estrelas e links. Assim, o
GitHub funciona como **back-end de armazenamento dos projetos** — qualquer novo repositório
aparece no portfólio sem edição manual.

---

## 3. Gestão de Usuários e Segurança

### Gestão de usuários
- **Proprietário (owner):** Arthur — acesso de administrador.
- **Colaboradores:** adicionados por convite, com permissão **Write** (sem push direto na `main`).
- **Público:** acesso de leitura ao código e ao site.

### Políticas de segurança implementadas
- ✅ **2FA** ativado na conta GitHub.
- ✅ **Proteção do branch `main`** (sem `force-push`, sem exclusão; mudanças via PR).
- ✅ **Princípio do menor privilégio** na concessão de acessos.
- ✅ **Sem segredos versionados** — `.gitignore` cobre `.env`, chaves e credenciais.
- ✅ **HTTPS obrigatório** no GitHub Pages.
- ✅ **Dependabot** monitorando dependências de Actions.
- ✅ **API somente leitura** (sem expor tokens no front-end).

Detalhes em [`SECURITY.md`](../SECURITY.md).

---

## 4. Compartilhamento e Controle de Acesso com o GitHub

- **Versionamento e compartilhamento:** todo o código é versionado e compartilhado no GitHub.
- **Branch protegida (`main`):** garante que o código de produção só receba alterações revisadas.
- **CODEOWNERS:** define o proprietário como revisor obrigatório dos Pull Requests.
- **Fluxo por Pull Request:** branches de feature → PR → revisão → merge → deploy.
- **Práticas de colaboração** documentadas em [`CONTRIBUTING.md`](../CONTRIBUTING.md).

---

## 5. Finalização da Integração e Testes

### Integração e entrega contínua (CI/CD)
O arquivo [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml) define um pipeline
no **GitHub Actions** com dois estágios:

1. **Validar** — valida o HTML (`html-validate`) e confere a existência dos arquivos essenciais (**testes**).
2. **Deploy** — empacota o site e publica no **GitHub Pages** automaticamente na `main`.

### Testes realizados
- ✅ Validação automática de HTML no pipeline.
- ✅ Verificação de presença dos arquivos críticos.
- ✅ Teste manual: carregamento dos projetos via API, navegação, responsividade e links.

### Produção
O site está publicado em **https://arthur259493.github.io/PortfolioHUB/**.

---

## 6. Revisão Final e Apresentação

### Revisão
- Conferência de todas as páginas, links e da integração com o GitHub.
- Revisão da documentação e das políticas de segurança.
- Validação final do deploy em produção.

### Apresentação (YouTube)
Apresentação em vídeo demonstrando as etapas da implantação e os desafios superados.

> 🎥 **Link do vídeo:** _(inserir o link do YouTube aqui)_

---

## Conclusão

O PortfolioHUB foi implantado com sucesso, integrando GitHub, segurança, controle de acesso e
CI/CD, com o Google Gemini como guia em todo o processo.
