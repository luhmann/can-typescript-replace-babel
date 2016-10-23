let assert = require('power-assert')

describe('Spread-Operator', () => {
    it('should correctly merge two arrays', () => {
        // GIVEN: Two arrays
        let fruit = ['orange', 'apple', 'pear']
        let nut = ['hazelnut', 'pecan']

        // WHEN: combining them with rest
        let mixer = [ ...fruit, ...nut]

        // THEN: They should be combined
        assert.equals(mixer, ['orange', 'apple', 'pear', 'hazelnut', 'pecan'])
    })
})
