var ajax = require("basic-ajax");

var content = '<a id="a"><b id="b">hey!</b></a>'; // the body of the new file...
var blob = new Blob([content], { type: "text/xml"});

var formData = new FormData();
formData.append("testfile", blob);

ajax.post('/', {}, formData);

