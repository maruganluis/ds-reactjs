import './style.css';

// Otra forma de definir un componente es como una variable de tipo función
const Subtitle = ({ children, size }) => {
    if (size === "xs") {
        // si el subtitulo es pequeño, lo definimos como un h4
        return <h4 className="cb-subtitle cb-subtitle--xs">{children}</h4>;
    }

    if (size === "md") {
        // si el subtitulo es mediano, lo definimos como un h3
        return <h3 className='cb-subtitle cb-subtitle--md'>{children}</h3>;
    }

    // por defecto lo tratamos como lg
    return <h2 className='cb-subtitle cb-subtitle--lg'>{children}</h2>;
};

// Definimos la estructura que va a tener las props del componente
Subtitle.propTypes = {
    children: "",
    size: "",
};

export default Subtitle; // lo exportamos para que se pueda usar en otros lados