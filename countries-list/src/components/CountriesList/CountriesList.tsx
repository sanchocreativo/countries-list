import * as React from 'react';
import { CountriesListQuery } from '../../generated/graphql';
import './styles.css';
import { useNavigate } from "react-router-dom";

export interface OwnProps {
    handleIdChange: (newId: string) => void;
    code: Array<String>;
    handleContinentChange: (newId:any) => void;
}

interface Props {
    data: CountriesListQuery;
    handleIdChange: (newId: string) => void;
    handleContinentChange: (newId: Array<String>) => void;
    loading: boolean;
}

const className = 'CountriesList';

const CountriesList: React.FC<Props> = ({ data, handleIdChange, handleContinentChange, loading }) => {
    let navigate = useNavigate();
    const [value, setInputValue] = React.useState("");
    const [continent, setContinent] = React.useState('SA');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const continentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setContinent(e.target.value);
    }

    const singleCountryHandling = (item:string) =>{
        handleIdChange(item);
        navigate(`/country/${item}`);
    }

    return (
        <div className={className}>
            
            <div className={`${className}__fixedHeader`}>

                <label htmlFor="continentSearch">Buscar por Continente 🌍🌎🌏</label>
                <select value={continent} id="continentSearch" onChange={(event) => continentChange(event)}>
                    {!!data.continents && data.continents.map(continent => (
                        <option key={continent.code} id={continent.name} value={continent.code}>
                        {continent.name}
                        </option>
                    ))}
                </select>

                <label className={`${className}__inputLabel`} htmlFor="countrySearch">Buscar por Pais o Moneda</label>
                <input id="countrySearch" onChange={(e) => handleInputChange(e)} value={value} placeholder="Argentina" />
            </div>
            
            <ol className={`${className}__list`}>
                <>
            { !!data.countries && data.countries
                .filter((item) => {
                if (!value) return true
                if ( 
                    item.name.toLowerCase().includes(value.toLowerCase()) || 
                    item.currency?.toLowerCase().includes(value.toLowerCase())
                    ) {
                    return true
                }
             
                })
                .map((item, i) => {
                if( item.continent.code.trim().includes(continent.trim()) ){
                    return(
                    <li onClick={() => singleCountryHandling(item.code)}
                    key={i} className={`${className}__item`}>
                        {item.name}
                    </li>
                    )
                }
                })
            }
            </>
            {loading && <div>Cargando Paises</div>}
            </ol>
        </div>
    )
};

export default CountriesList;