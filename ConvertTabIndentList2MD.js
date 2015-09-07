var ConvertTabIndentList2MD, converter;

ConvertTabIndentList2MD = (function() {
  function ConvertTabIndentList2MD() {}

  ConvertTabIndentList2MD.prototype.execute = function(texts) {
    var i, len, line, lines, result, str;
    lines = texts.split('\n');
    result = [];
    for (i = 0, len = lines.length; i < len; i++) {
      line = lines[i];
      result.push(line.replace(/^(\s*)/, '\n$1* '));
    }
    str = result.join('');
    return str.replace(/^\n/, '');
  };

  return ConvertTabIndentList2MD;

})();

converter = new ConvertTabIndentList2MD();

return converter.execute(clipText);
