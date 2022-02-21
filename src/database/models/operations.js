module.exports = function(sequelize, dataTypes)
 {
     const alias = "operations";
     const cols = {
         id: {
             type: dataTypes.INTEGER,
             primaryKey: true,
             autoIncrement: true,
             allowNull: false
         },
         concept: {
            type: dataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        type: {
            type: dataTypes.STRING,
            allowNull: false
        },

        date: {
            type: dataTypes.STRING,
            allowNull: false
        },

        id_category: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        
        id_users: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        
        
    };
     const config = {
         tableName: "operations",
         timestamps: false
     };
     const operations = sequelize.define(alias, cols, config);
     operations.associate = (models) => {
         operations.belongsTo(models.category, {
             as: "category",
             foreignKey: "id_category"
         })
     }
     operations.associate = (models) => {
        operations.belongsTo(models.users, {
            as: "users",
            foreignKey: "id_users"
        })
    }
     return operations

 }