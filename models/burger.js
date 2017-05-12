
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
    	type: DataTypes.STRING,
    	valdiate:{
    	notNull: true
    }
    },
    devoured: {
    	type: DataTypes.BOOLEAN,
    	defaultValue: false
},
	date : {
		type: DataTypes.DATE
	}
  });
  return Burger;
};
