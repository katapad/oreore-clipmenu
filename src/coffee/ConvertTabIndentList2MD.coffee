clipText = """
list1
	ABC
	DEF
		1
			xyz
		2
			www
"""

class ConvertTabIndentList2MD
  constructor: () ->
  execute: (texts)->

    lines = texts.split('\n')
    result = []
    for line in lines
      result.push line.replace(/^(\s*)/, '\n$1* ')

    str = result.join('')
    return str.replace(/^\n/, '')

converter = new ConvertTabIndentList2MD()

#console.log converter.execute(clipText)
return converter.execute(clipText)

