// const types = {
//   BelongsToOne: { foreignKey: () => true },
//   HasOne: { foreignKey: (relation) => relation.join.from.column !== 'id' },
//   HasMany: { foreignKey: () => false }
// }

// const types1 = {
//   BelongsToOne: { foreignKey: () => true },
//   HasOne: { foreignKey: (relation) => relation.from !== 'id' },
//   HasMany: { foreignKey: () => false }
// }

const helper = {
  // getTableDependencies (app, table) {
  //   const tableRelations = helper.getRelationsFromTable(app, table)

  //   return tableRelations
  //     .filter(relation => types[relation.type].foreignKey(relation))
  // },

  // getColumnDependencies (app, table, columnName) {
  //   const columnRelations = helper.getRelationsFromColumn(app, table, columnName)

  //   return columnRelations
  //     .filter(relation => types[relation.type].foreignKey(relation))
  // },

  // getRelationsToTable (app, table) {
  //   return app.relations
  //     .filter(relation => relation.join.to.table === table.name)
  // },

  // getRelationsFromTable (app, table) {
  //   return app.relations
  //     .filter(relation => relation.join.from.table === table.name)
  // },

  // getRelationsFromColumn (app, table, columnName) {
  //   return helper.getRelationsFromTable(app, table)
  //     .filter(relation => relation.join.from.column === columnName)
  // },

  // getRelationsToColumn (app, table, columnName) {
  //   return helper.getRelationsToTable(app, table)
  //     .filter(relation => relation.join.to.column === columnName)
  // },

  // get Types () {
  //   return types
  // },

  // get Types1 () {
  //   return types1
  // }
}

export default helper
