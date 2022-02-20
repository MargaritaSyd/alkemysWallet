module.exports = function(sequelize, dataTypes)
 {
     const alias = "users";
     const cols = {
         id: {
             type: dataTypes.INTEGER,
             primaryKey: true,
             autoIncrement: true,
             allowNull: false
         },
         name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        mail: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
     };
     const config = {
         tableName: "users",
         timestamps: false,
     };
     const users = sequelize.define(alias, cols, config);
     users.associate = (models) => {
         users.hasMany(models.operations, {
             as: "operations",
             foreignKey: "id_users"
         })
     }
     return users

 }