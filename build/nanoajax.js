function nanoAjax(p) {
    var r = null;
    if (this.ActiveXObject)
        r = new ActiveXObject('Microsoft.XMLHTTP');
    else if (this.XMLHttpRequest)
        r = new XMLHttpRequest();
    if (!r)
        return;
    r.onreadystatechange = function () {
        if (r.readyState < 4)
            return; // not completed
        if (r.status < 400) {
            if (p.success) {
                p.success(p.dataType == 'json' ? JSON.parse(r.responseText) : r.responseText, r.status);
            }
        }
        else if (p.error) {
            p.error(r.status);
        }
    };
    if (p.type == 'POST') {
        r.open("POST", p.url, true);
        r.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        r.setRequestHeader('Content-type', p.contentType || 'application/x-www-form-urlencoded');
    }
    else {
        r.open("GET", p.url, true);
    }
    r.send(p.data || '');
}
