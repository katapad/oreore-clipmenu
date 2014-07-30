var _checkLink, _convert, _convertText;

_convert = function(text) {
  return _convertText(text);
};

_convertText = function(text) {
  var i, lastName, line, lines, name, nameReg, result, t;
  result = "";
  lines = text.split("\n");
  lastName = "";
  result += "\n\n";
  i = 0;
  while (i < lines.length) {
    line = lines[i];
    if (line === "") {
      ++i;
      continue;
    }
    nameReg = new RegExp(/^\[([\d+\/?]+)\s+([\d+:?]+)\]\s*([^:]+)\s*:(.*)/);
    if (nameReg.test(line)) {
      name = line.replace(nameReg, "$3");
      t = line.replace(nameReg, "$4");
      if (lastName !== name) {
        result += '\n\n>' + name + "\n";
      }
      lastName = name;
      t = t.replace(/^\s/, '');
      result += t + "\n";
    } else {
      line = line.replace(/^\s/, '');
      result += line + "\n";
    }
    i++;
  }
  result = result.replace(/^\n{4}/, '');
  return result;
};

_checkLink = function(t) {
  return t.replace(/(https*:\/\/[\x21-\x7e]+)/g, "<a href=\"$1\" target=\"_blank\">$1</a>");
};

return _convert(clipText);
