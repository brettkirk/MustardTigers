const crypto = require('crypto');
const {Sequelize, db} = require('../connection');

const hashData = function(data, salt = '') {
  var shasum = crypto.createHash('sha256');
  shasum.update(data + salt);
  return shasum.digest('hex');
};

const UserModel = db.define('users', {
  username: {
    type: Sequelize.STRING(40),
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING(64),
    allowNull: false
  },
  salt: {
    type: Sequelize.STRING(64),
  }
}, {
  hooks: {
    beforeCreate: function(user) {
      user.salt = crypto.randomBytes(32).toString('hex');

      user.password = hashData(user.password, user.salt);
    }
  }
});

UserModel.beforeCreate

UserModel.sync();

module.exports = UserModel;