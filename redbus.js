

describe('Red Bus Test', function() {

    it('First Test', async () => {

        browser.url('https://www.redbus.in/')

        await $('[id="src"]').setValue('Banglore')

        await $('[id="dest"]').setValue('Guntur')

        browser.pause(10000)

    })
})

