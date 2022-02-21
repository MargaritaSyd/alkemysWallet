module.exports = function(sequelize, dataTypes)
 {
     const alias = "category";
     const cols = {
         id: {
             type: dataTypes.INTEGER,
             primaryKey: true,
             autoIncrement: true,
             allowNull: false
         },
         category_name: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
     };
     const config = {
         tableName: "category",
         timestamps: false,
     };
     const category = sequelize.define(alias, cols, config);
     category.associate = (models) => {
         category.hasMany(models.operations, {
             as: "operations",
             foreignKey: "id_category"
         })
     }
     return category

 }