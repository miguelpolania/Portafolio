// Enlaces para compartir en redes (usan la URL real donde esté publicada la página)
const url = location.href.split('#')[0];
const texto = 'Portafolio de Miguel Ángel Polanía, Tecnólogo en ADSO';

document.getElementById('shWa').href = 'https://wa.me/?text=' + encodeURIComponent(texto + ' ' + url);
document.getElementById('shIn').href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(url);

document.getElementById('btnCopiar').addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(url);
        bootstrap.Toast.getOrCreateInstance(document.getElementById('toastCopiado')).show();
    } catch (e) {
        prompt('Copia este enlace:', url);
    }
});
