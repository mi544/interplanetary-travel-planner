const { expect } = require('chai')
const db = require('../models')

describe('Models', function () {
  describe('Amenity', function () {
    it('should have a name of Amenities', function () {
      expect(db.Amenity.tableName).to.equal('Amenities')
    })
  })
  describe('Company', function () {
    it('should have a name of Companies', function () {
      expect(db.Company.tableName).to.equal('Companies')
    })
  })
  describe('Country', function () {
    it('should have a name of Countries', function () {
      expect(db.Country.tableName).to.equal('Countries')
    })
  })
  describe('Flight', function () {
    it('should have a name of Flights', function () {
      expect(db.Flight.tableName).to.equal('Flights')
    })
  })
  describe('launchSite', function () {
    it('should have a name of launchSites', function () {
      expect(db.launchSite.tableName).to.equal('launchSites')
    })
  })
  describe('Planet', function () {
    it('should have a name of Planets', function () {
      expect(db.Planet.tableName).to.equal('Planets')
    })
  })
  describe('Rocket', function () {
    it('should have a name of Rockets', function () {
      expect(db.Rocket.tableName).to.equal('Rockets')
    })
  })
  describe('siteOperator', function () {
    it('should have a name of siteOperators', function () {
      expect(db.siteOperator.tableName).to.equal('siteOperators')
    })
  })
  describe('User', function () {
    it('should have a name of Users', function () {
      expect(db.User.tableName).to.equal('Users')
    })
  })
})
