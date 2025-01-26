import "./font-icons.css";

const Icon = ({ name }) => {
    // Utilizamos un span para que podamos incluir los iconos con un display inline por defecto
    return <span className={`cb-icon-${name}`}></span>;
};

Icon.propTypes = {
    name: "",
};

export default Icon;