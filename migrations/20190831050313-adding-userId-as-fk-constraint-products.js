'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint(
      'Products',
      ['userId'],{
        type: 'FOREIGN KEY',
        references: {
          name: 'userid-fk-in-products',
          table: 'users',
          field: 'id'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
