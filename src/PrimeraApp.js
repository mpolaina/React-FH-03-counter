import PropTypes from 'prop-types';

// FUNCTIONAL COMPONENT

const PrimeraApp = ({ saludo, subtitulo }) => {
    
    // const saludo = 'Hola React'
    
    return ( 
        <>
            <h1>{ saludo }</h1>
            <p>{ subtitulo }</p>
        </>
     );
}

PrimeraApp.propType = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Volvemos a vernos'
}
 
export default PrimeraApp;