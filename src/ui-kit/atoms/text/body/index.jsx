import './style.css';

const BodyText = ({ children, size }) => {
    if (size === "xs") {
        // Si el texto es extra pequeño
        return <p className='cb-body cb-body--xs'>{children}</p>;
    }

    if (size === "sm") {
        // Si el texto es pequeño
        return <p className='cb-body cb-body--sm'>{children}</p>;
    }

    if (size === "lg") {
        // Si el texto es grande
        return <p className='cb-body cb-body--lg'>{children}</p>;
    }

    // por defecto lo tratamos como md
    return <p className='cb-body cb-body--md'>{children}</p>;
};

// Definimos la estructura que va a tener las props
BodyText.propTypes = {
    children: "",
    size: "",
};

export default BodyText;