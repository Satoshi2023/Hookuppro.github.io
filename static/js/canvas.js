var $btn = document.getElementById('tryhtml2canvas'); $btn.addEventListener('mousedown', onScreenShotClick); function download(canvas, filename) { const a = document.createElement('a'); a.download = filename; a.href = canvas.toDataURL("image/png;base64"); a.style.display = 'none'; document.body.appendChild(a); a.click(); document.body.removeChild(a); }
function onScreenShotClick(event) { const element = document.querySelector("#capture");window.pageYoffset =0;
document.documentElement.scrollTop =0;
document.body.scrollTop =0;
html2canvas(element).then((canvas) => { download(canvas, 'Telegram@ZaoJiaShi'); }); }