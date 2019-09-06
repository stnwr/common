export const fieldTypes = [
  'string', 'integer', 'number', 'boolean',
  'date', 'time', 'datetime', 'json'
]
export const allowDefault = fieldTypes
export const allowNullable = fieldTypes
export const allowIndex = fieldTypes.filter(type => type !== 'json')
export const allowPrimary = fieldTypes.filter(type => type !== 'json' && type !== 'boolean')
export const allowUnique = fieldTypes.filter(type => type !== 'json' && type !== 'boolean')
