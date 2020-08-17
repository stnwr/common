const fieldTypes = [
  'string', 'integer', 'number', 'boolean',
  'date', 'time', 'datetime', 'json'
]
const allowDefault = fieldTypes
const allowNullable = fieldTypes
const allowIndex = fieldTypes.filter(type => type !== 'json')
const allowPrimary = fieldTypes.filter(type => type !== 'json' && type !== 'boolean')
const allowUnique = fieldTypes.filter(type => type !== 'json' && type !== 'boolean')

module.exports = {
  allowDefault,
  allowNullable,
  allowIndex,
  allowPrimary,
  allowUnique
}
