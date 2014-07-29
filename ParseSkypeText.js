var text = clipText.split(/(\r\n|\n|\r)/);
var n = text.length;
for(var i=0; i<n; i++)
	text[i] = text[i].replace(/^[^\]]+\] ([^:]+:\s)/, '> $1\n');
return text.join('\n');
