import * as React from 'react';
import { CountryQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
  data: CountryQuery;
}

const className = 'SingleCountry';

const SingleCountry: React.FC<Props> = ({ data }) => {
  if (!data.country) {
    return <div className={className}>Selecciona un País para que aparezca aquí! 🙂</div>;
  }

  if (data.country) {
    console.log(data.country.languages);
  }
  return (
    <div className={className}>
      <div className={`${className}__status`}>
        <img
          className={`${className}__flag`}
          alt={data.country.name}
          src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${data.country.code}.svg`} />
        <h1 className={`${className}__title`}>Codigo de Pais: <strong>{data.country.code}</strong> </h1>
        <h1 className={`${className}__title`}>Nombre de Pais: <strong>{data.country.name} </strong> la capital siendo <strong>{data.country.capital}</strong> </h1>
      </div>
      <h1 className={`${className}__title`}>
        💲: Su moneda oficial es <strong> {data.country.currency}</strong>
      </h1>
      <h1 className={`${className}__title`}>
        💬 Idiomas
      </h1>
      <div className={`${className}__status`}>

        {!!data.country && data.country.languages.map((val, i) => {
          return (
            <h1 key={i}><strong> {val.name} </strong>
            </h1>
          )
        })
        }
      </div>
    </div>
  );
}

export default SingleCountry;