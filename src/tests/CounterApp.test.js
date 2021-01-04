import { shallow } from "enzyme"
import CounterApp from "../CounterApp"

describe('Pruebas de CounterApp', () => {
    
    let wrapper = shallow(<CounterApp/>)
    
    beforeEach( () => {
        // inicializarlo antes de cada prueba
        wrapper = shallow(<CounterApp value={ 10 }/>)
        
    })
    
    test('Debe de mostrar <CounterApp/> correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot()
    })
    
    test('Debe mostrar el valor por defecto de 100', () => {
        
        const wrapper = shallow(<CounterApp value={ 100 }/>)
        const counterText = wrapper.find('h2').text()
        expect( counterText ).toBe( '100' )
    })
    
    test('Debe disminuir con el boton -1', () => {
        
        wrapper.find('button').at(0).simulate('click')
        const counterText = wrapper.find('h2').text().trim()
        expect( counterText ).toBe('9')
        
    })
    
    test('Debe incrementar con el boton +1', () => {
        
        wrapper.find('button').at(2).simulate('click')
        const counterText = wrapper.find('h2').text().trim()
        expect( counterText ).toBe('11')
        
    })
    
    test('Debe volver al valor inicial', () => {
        
        const wrapper = shallow(<CounterApp value={ 10 }/>)
        wrapper.find('button').at(2).simulate('click') // +1 = 11
        wrapper.find('button').at(1).simulate('click') // reset
        const counterText = wrapper.find('h2').text().trim()
        expect( counterText ).toBe('10')
        
    })
    
    
    
})