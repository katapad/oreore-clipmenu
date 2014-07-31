

clipText = '''
hoge	fuga	bar
OK	N/A	N/A
OK	N/A	N/A
OK	OK	OK
OK	OK	OK
'''

class TableParser
  constructor: () ->

  parse: (text)->
    lines = text.split('\n')
    result = ''

    for line, i in lines
      if i == 0
        text = @_parseHead line
      else
        text = @_parseBody line

      result += text + '\n'

    return result


  _parseHead: (line)->
    cells = line.split('\t')
    head = cells.join(' | ')
    head = "| #{head} |"
    separator = ''
    for cell in cells
      sep = '| === '
      separator += sep.replace('===', @_getSep(cell.length))
    separator += '|'
    return head + '\n' + separator

  _getSep: (length)->
    result = ''
    for i in [0...length]
      result += '-'
    return result

  _parseBody: (line)->
    cells = line.split('\t')
    result = cells.join(' | ')
    result = "| #{result} |"
    return result


do ->
  text = new TableParser().parse(clipText)
  console.log text
  return text