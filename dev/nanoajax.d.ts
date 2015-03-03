interface AjaxRequestParam {
  url : string;
  type : string;// 'GET' or 'POST'. if undefined then 'GET'.
  contentType: string;// if undefinded then 'application/x-www-form-urlencoded'
  data: string;
  dataType:string;// response type. if 'json' then response parsed to json.
  
  success : (res: any, statuscode: number) => void;// if dataType is 'json' then res is Object(json). Otherwise res is string.
  error: (statuscode: number) => void;
}
declare function nanoAjax(p: AjaxRequestParam);