import { shallow } from 'enzyme'
import PrimeraApp from "../PrimeraApp"

describe('Pruebas en PrimeraApp', () => {
    
    // test('Debe mostrar el mensaje Hola Props', () => {
        
    //     const saludo = 'Hola Props'
    //     // const wrapper = render(<PrimeraApp/>)
    //     const { getByText } = render(<PrimeraApp saludo={ saludo }/>)
    //     expect( getByText('Hola Props')).toBeInTheDocument()
    // })
    test('Debe mostrar <PrimeraApp/> correctamente', () => {
        
        const saludo = 'Hola Props'
        const wrapper = shallow(<PrimeraApp saludo={ saludo }/>)
        
        expect( wrapper ).toMatchSnapshot()
    })
    
    test('Debe mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola Props'
        const subtitulo = 'Volvemos a vernos'
        const wrapper = shallow(
            <PrimeraApp 
                saludo={ saludo }
                // subtitulo={ subtitulo }
            />
        )
        const textoParrafo = wrapper.find('p').text()
        console.log(textoParrafo)
        expect( textoParrafo ).toBe( subtitulo )
    })
    
    
})