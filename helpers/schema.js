export function getSchemaFromField (field) {
  const schema = {}
  const ignore = ['nullable', 'virtual']

  for (let key in field) {
    if (ignore.indexOf(key) < 0) {
      let value = field[key]
      if (key === 'type') {
        if (value === 'id') {
          value = 'integer'
          schema.minimum = 1
        } else if (value === 'date') {
          value = 'string'
          schema.format = 'date'
        } else if (value === 'time') {
          value = 'string'
          schema.format = 'time'
        } else if (value === 'datetime') {
          value = 'string'
          schema.format = 'date-time'
        }
      }

      if (key !== 'name') {
        schema[key] = key === 'type' && field.nullable
          ? [value, 'null']
          : value
      }
    }
  }

  return schema
}

export function getSchemaFromTable (table, schemas) {
  const schema = {
    type: 'object',
    required: [],
    properties: {},
    additionalProperties: false
  }

  const timestamp = {
    type: 'string',
    format: 'date-time'
  }

  table.fields.forEach(field => {
    if (!field.virtual && field.type !== 'relation') {
      const props = schema.properties
      if (field.type === 'json') {
        props[field.name] = schemas
          ? schemas.find(s => s.field === field).schema
          : { $ref: field.ref }
      } else {
        props[field.name] = getSchemaFromField(field)
      }

      if (!field.nullable && field.name !== 'id') {
        schema.required.push(field.name)
      }
    }
  })

  Object.assign(schema.properties, {
    updatedAt: timestamp,
    createdAt: timestamp
  })

  return schema
}

export function generateUISchema (schema) {
  const uiSchema = {}
  const { properties } = schema
  const hidden = ['id', 'createdAt', 'updatedAt']

  for (let key in properties) {
    uiSchema[key] = {
      'ui:title': properties[key].title || key
    }

    if (hidden.indexOf(key) > -1) {
      uiSchema[key]['ui:widget'] = 'hidden'
    } else if (properties[key].type === 'string' && properties[key].maxLength > 255) {
      uiSchema[key]['ui:widget'] = 'textarea'
    }
  }

  return uiSchema
}
