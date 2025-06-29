'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [
      {
        id: '41444d4e-0000-4001-a001-000000000001', 
        name: 'Admin',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '41444342-0000-4002-a002-000000000002',
        name: 'Admin Cabang',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '4353424b-0000-4003-a003-000000000003', 
        name: 'CS Booking',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '44525652-0000-4004-a004-000000000004', 
        name: 'Sopir / Driver',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '4f504844-0000-4005-a005-000000000005', 
        name: 'Operational Head (OH)',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '41444844-0000-4006-a006-000000000006', 
        name: 'Admin Head (ADH)',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '46494e43-0000-4007-a007-000000000007', 
        name: 'Finance',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '43555354-0000-4008-a008-000000000008', 
        name: 'Customer',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', {
      id: [
        '41444d4e-0000-4001-a001-000000000001',
        '41444342-0000-4002-a002-000000000002',
        '4353424b-0000-4003-a003-000000000003',
        '44525652-0000-4004-a004-000000000004',
        '4f504844-0000-4005-a005-000000000005',
        '41444844-0000-4006-a006-000000000006',
        '46494e43-0000-4007-a007-000000000007',
        '43555354-0000-4008-a008-000000000008'
      ]
    }, {});
  }
};