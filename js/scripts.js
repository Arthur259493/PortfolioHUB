/*!
* PortfolioHUB - Arthur Vieira
* Integração com a API pública do GitHub para exibir os projetos automaticamente.
*/

(function () {
    "use strict";

    const GITHUB_USER = "Arthur259493";
    const grid = document.getElementById("projects-grid");

    if (!grid) return;

    const loadingEl = document.getElementById("projects-loading");
    const errorEl = document.getElementById("projects-error");

    const LANG_ICONS = {
        JavaScript: "bi-filetype-js",
        TypeScript: "bi-filetype-tsx",
        HTML: "bi-filetype-html",
        CSS: "bi-filetype-css",
        SCSS: "bi-filetype-scss",
        Python: "bi-filetype-py",
        Java: "bi-filetype-java",
        Shell: "bi-terminal"
    };

    function escapeHtml(str) {
        const div = document.createElement("div");
        div.textContent = str == null ? "" : String(str);
        return div.innerHTML;
    }

    function formatDate(iso) {
        try {
            return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
        } catch (e) {
            return "";
        }
    }

    function cardTemplate(repo) {
        const name = escapeHtml(repo.name);
        const desc = escapeHtml(repo.description || "Repositório sem descrição.");
        const lang = repo.language ? escapeHtml(repo.language) : "—";
        const icon = LANG_ICONS[repo.language] || "bi-folder2-open";
        const homepage = repo.homepage && repo.homepage.trim() !== ""
            ? `<a class="btn btn-sm btn-primary" href="${escapeHtml(repo.homepage)}" target="_blank" rel="noopener"><i class="bi bi-box-arrow-up-right"></i> Ver site</a>`
            : "";

        return `
        <div class="col-md-6 col-xl-4">
            <div class="card h-100 shadow border-0 rounded-4">
                <div class="card-body p-4 d-flex flex-column">
                    <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i class="bi ${icon}"></i></div>
                    <h5 class="fw-bolder mb-2">${name}</h5>
                    <p class="text-muted small flex-grow-1">${desc}</p>
                    <div class="d-flex align-items-center gap-3 small text-muted mb-3">
                        <span><i class="bi bi-circle-fill text-primary" style="font-size:.6rem"></i> ${lang}</span>
                        <span><i class="bi bi-star-fill text-warning"></i> ${repo.stargazers_count}</span>
                        <span><i class="bi bi-diagram-2"></i> ${repo.forks_count}</span>
                    </div>
                    <div class="small text-muted mb-3"><i class="bi bi-clock-history"></i> Atualizado em ${formatDate(repo.updated_at)}</div>
                    <div class="d-flex gap-2 mt-auto">
                        <a class="btn btn-sm btn-outline-dark" href="${escapeHtml(repo.html_url)}" target="_blank" rel="noopener"><i class="bi bi-github"></i> Código</a>
                        ${homepage}
                    </div>
                </div>
            </div>
        </div>`;
    }

    function render(repos) {
        const visible = repos
            .filter(r => !r.fork && !r.archived)
            .sort((a, b) => (b.stargazers_count - a.stargazers_count) || (new Date(b.updated_at) - new Date(a.updated_at)));

        if (visible.length === 0) {
            loadingEl.classList.add("d-none");
            errorEl.classList.remove("d-none");
            return;
        }

        grid.innerHTML = visible.map(cardTemplate).join("");
        loadingEl.classList.add("d-none");
    }

    function showError() {
        if (loadingEl) loadingEl.classList.add("d-none");
        if (errorEl) errorEl.classList.remove("d-none");
    }

    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`, {
        headers: { "Accept": "application/vnd.github+json" }
    })
        .then(resp => {
            if (!resp.ok) throw new Error("GitHub API status " + resp.status);
            return resp.json();
        })
        .then(render)
        .catch(err => {
            console.error("Falha ao carregar repositórios do GitHub:", err);
            showError();
        });
})();
