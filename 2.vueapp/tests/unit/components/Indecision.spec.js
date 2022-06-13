import { shallowMount, mount } from '@vue/test-utils'
import Indecision from '@/components/Indecision'

describe('Indesicion Component', () => {

    let wrapper
    let clgSpy

    global.fetch = jest.fn( () => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }))

    beforeEach( () => { 

        wrapper = shallowMount( Indecision )
        
        clgSpy = jest.spyOn( console, 'log')

        jest.clearAllMocks()

    })
    https://yesno.wtf/assets/yes/2.gif
    test('Debe hacer Match con la SnapShot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Escribir en el input no de hacer nada', async () => {

        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )

        const  input = wrapper.find('input')

        await input.setValue('HolaMundo')

        expect( clgSpy ).toHaveBeenCalled() 
        expect( getAnswerSpy ).not.toHaveBeenCalled()

    })

    test('Escribir el simbolo de ? debe disparar el getAnswer', async () => {

        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )

        const  input = wrapper.find('input')
        await input.setValue('HolaMundo?')

        expect( getAnswerSpy ).toHaveBeenCalled()

    })

    test('Pruebas en getAnswer', async () => {

        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect( img.exists() ).toBeTruthy()
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect(wrapper.vm.answer).toBe('Si!')

    })

    test('Pruebas en getAnswer - Fallo en el API', async () => {

        fetch.mockImplementationOnce( () => Promise.reject('API is Down'))

        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect( img.exists() ).toBeFalsy()
        expect(wrapper.vm.answer).toBe('No se pudo cargar la API')

    })

})