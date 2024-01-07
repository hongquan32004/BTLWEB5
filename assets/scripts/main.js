const importPartial = (url, partialId) => {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(partialId).innerHTML = html;
        })
};

importPartial('partials/header.html', 'header');
importPartial('partials/clients.html', 'clients');
importPartial('partials/team.html', 'team');
importPartial('partials/blog.html', 'blog');
importPartial('partials/footer.html', 'footer');