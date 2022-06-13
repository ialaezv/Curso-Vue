import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount( Counter )
    })

    // test('Debe de hacer match con el snapshot', () => {

    //     const wrapper = shallowMount(Counter)

    //     expect( wrapper.html() ).toMatchSnapshot()

    // })

    test('H2 debe tener el valor por defecto "Counter"', () => {
        
        expect(wrapper.find('h2').exists() ).toBeTruthy()

        const h2 = wrapper.find('h2').text()
 
        expect(h2).toBe('Counter')
    })

    test('EL valor por defevto debe de ser 100 en el p', () => {

        const p = wrapper.find('[data-testid="p-tag"]').text()

        expect(p).toBe('100')

    })

    test('Debe de incrementar en 1 el valor del contador', async () => {

        const [incrementar, decrementar] = wrapper.findAll('button')

        await incrementar.trigger('click')
        await incrementar.trigger('click')
        await incrementar.trigger('click')

        await decrementar.trigger('click')
        await decrementar.trigger('click')
        
        const value = wrapper.find('[data-testid="p-tag"]').text()
        
        expect( value ).toBe('101')

    })

    test('Debe de establecer el valor por defecto', () => {

        const { start } = wrapper.props()

        const value = wrapper.find('[data-testid="p-tag"]').text()

        expect( Number(value) ).toBe( start )

    }) 

    test('Debe mostrar la prop de title', () => {

        const title = 'Hola MUndo!!!!'

        const wrapper = shallowMount( Counter, {
            props: {
                title,
            }
        })
        
        expect( wrapper.find('h2').text() ).toBe( title )

    })


})