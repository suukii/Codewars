function domainName(url){
  var reg = /(https:\/\/)?(http:\/\/)?(www\.)?([^.]+)/;
	return reg.exec(url)[4];
}
