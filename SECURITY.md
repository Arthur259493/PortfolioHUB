# Política de Segurança — PortfolioHUB

Este documento descreve as práticas de segurança adotadas no projeto **PortfolioHUB**
de Arthur Vieira e como reportar problemas de segurança. As práticas seguem
recomendações de mercado e foram revisadas com apoio do **Google Gemini**.

## Versões suportadas

| Versão | Suportada |
| ------ | --------- |
| `main` (produção) | ✅ |
| Branches de feature | ⚠️ apenas durante o desenvolvimento |

## Como reportar uma vulnerabilidade

Encontrou um problema de segurança? **Não abra uma issue pública.**

1. Envie um email para **artubarao25@gmail.com** com o assunto `[SECURITY] PortfolioHUB`.
2. Descreva o problema, o impacto e, se possível, um passo a passo para reproduzir.
3. Você receberá uma resposta em até **5 dias úteis**.

## Práticas de segurança adotadas

- **Controle de acesso pelo princípio do menor privilégio:** apenas o proprietário
  tem permissão de escrita; colaboradores recebem acesso por convite e com o papel mínimo.
- **Proteção do branch `main`:** o branch de produção é protegido contra `force-push`
  e exclusão; alterações entram por *Pull Request*.
- **Autenticação forte:** uso de **2FA** na conta GitHub e de tokens/chaves SSH.
- **Sem segredos no código:** nenhum token, senha ou chave de API é versionado.
  O `.gitignore` evita o commit acidental de arquivos sensíveis (`.env`, credenciais).
- **Dependências externas confiáveis:** Bootstrap e ícones via CDNs oficiais (jsDelivr),
  com `rel="noopener"` em links externos.
- **HTTPS obrigatório:** o site é publicado via GitHub Pages com *Enforce HTTPS* ativado.
- **API somente leitura:** a integração com o GitHub usa apenas endpoints públicos de
  leitura, sem expor credenciais no front-end.

## Boas práticas para contribuidores

- Nunca faça commit de credenciais.
- Mantenha o 2FA ativo.
- Atualize dependências quando houver alertas do **Dependabot**.
- Revise *Pull Requests* antes do merge.
