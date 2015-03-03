function nanoAjax(p) {
    var req = null;
    if (window['ActiveXObject'])
        req = new ActiveXObject('Microsoft.XMLHTTP');
    else if (window['XMLHttpRequest'])
        req = new XMLHttpRequest();
    if (!req)
        return;
    req.onreadystatechange = function () {
        if (req.readyState < 4)
            return; // not completed
        if (req.status < 400) {
            if (p.success) {
                p.success(p.dataType == 'json' ? JSON.parse(req.responseText) : req.responseText, req.status);
            }
        }
        else if (p.error) {
            p.error(req.status);
        }
    };
    if (p.type == 'POST') {
        req.open("POST", p.url, true);
        req.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        req.setRequestHeader('Content-type', p.contentType || 'application/x-www-form-urlencoded');
    }
    else {
        req.open("GET", p.url, true);
    }
    req.send(p.data || '');
}
