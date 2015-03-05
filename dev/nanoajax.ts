interface AjaxRequestParam {
  url : string;
  type : string;// 'GET' or 'POST'. if undefined then 'GET'.
  contentType: string;// if undefinded then 'application/x-www-form-urlencoded'
  data: string;
  dataType:string;// response type. if 'json' then response parsed to json.
  
  success : (res: any, statuscode: number) => void;// if dataType is 'json' then res is Object(json). Otherwise res is string.
  error: (statuscode: number) => void;
}
function nanoAjax(p: AjaxRequestParam){
  var r: XMLHttpRequest = null;
  if (this.ActiveXObject) r = new ActiveXObject('Microsoft.XMLHTTP');
  else if (this.XMLHttpRequest) r = new XMLHttpRequest();
  if(!r) return;
  
  r.onreadystatechange = () => {
    if(r.readyState < 4) return;// not completed
    
    if(r.status < 400) {// success
      if(p.success) {
        p.success(p.dataType == 'json' ? JSON.parse(r.responseText) : r.responseText, r.status);
      }
    } else if(p.error) {// failed
      p.error(r.status);
    }
  };

  if (p.type == 'POST') {
    r.open("POST", p.url, true);
    r.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    r.setRequestHeader('Content-type', p.contentType || 'application/x-www-form-urlencoded');
  } else {
    r.open("GET", p.url, true);
  }

  r.send(p.data || '');
}