var TableParser, clipText;

clipText = 'hoge	fuga	bar\nOK	N/A	N/A\nOK	N/A	N/A\nOK	OK	OK\nOK	OK	OK';

TableParser = (function() {
  function TableParser() {}

  TableParser.prototype.parse = function(text) {
    var i, line, lines, result, _i, _len;
    lines = text.split('\n');
    result = '';
    for (i = _i = 0, _len = lines.length; _i < _len; i = ++_i) {
      line = lines[i];
      if (i === 0) {
        text = this._parseHead(line);
      } else {
        text = this._parseBody(line);
      }
      result += text + '\n';
    }
    return result;
  };

  TableParser.prototype._parseHead = function(line) {
    var cell, cells, head, separator, _i, _len;
    cells = line.split('\t');
    head = cells.join(' | ');
    head = "| " + head + " |";
    separator = '| ---- ';
    for (_i = 0, _len = cells.length; _i < _len; _i++) {
      cell = cells[_i];
      separator += '| ---- ';
    }
    separator += '|';
    return head + '\n' + separator;
  };

  TableParser.prototype._parseBody = function(line) {
    var cells, result;
    cells = line.split('\t');
    result = cells.join(' | ');
    result = "| " + result + " |";
    return result;
  };

  return TableParser;

})();

(function() {
  var text;
  text = new TableParser().parse(clipText);
  console.log(text);
  return text;
})();
