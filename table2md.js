var TableParser, text;

TableParser = (function() {
  function TableParser() {}

  TableParser.prototype.parse = function(text) {
    var i, j, len, line, lines, result;
    lines = text.split('\n');
    result = '';
    for (i = j = 0, len = lines.length; j < len; i = ++j) {
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

  TableParser.prototype._parseHeadLength = function(line) {
    var cell, cells, j, len, results;
    cells = line.split('\t');
    results = [];
    for (j = 0, len = cells.length; j < len; j++) {
      cell = cells[j];
      results.push(cell.length);
    }
    return results;
  };

  TableParser.prototype._parseHead = function(line) {
    var cell, cells, head, j, len, sep, separator;
    cells = line.split('\t');
    head = cells.join(' | ');
    head = "| " + head + " |";
    separator = '';
    for (j = 0, len = cells.length; j < len; j++) {
      cell = cells[j];
      sep = '| === ';
      separator += sep.replace('===', this._getSep(cell.length));
    }
    separator += '|';
    return head + '\n' + separator;
  };

  TableParser.prototype._getSep = function(length) {
    var i, j, ref, result;
    result = '';
    for (i = j = 0, ref = length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      result += '-';
    }
    return result;
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

text = new TableParser().parse(clipText);

return text;
