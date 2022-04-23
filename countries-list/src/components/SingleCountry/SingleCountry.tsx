import * as React from 'react';
import { CountryQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
  data: CountryQuery;
}

const className = 'SingleCountry';

const SingleCountry: React.FC<Props> = ({ data }) => {
  if (!data.country) {
    return <div>No launch available</div>;
  }

  return (
    <div className={className}>
      <div className={`${className}__status`}>
        <span>Country {data.country.name}: </span>
        {data.country.currency? (
          <span className={`${className}__success`}>Success</span>
        ) : (
          <span className={`${className}__failed`}>Failed</span>
        )}
      </div>
      <h1 className={`${className}__title`}>
        {data.country.currency}
      </h1>
      <p className={`${className}__description`}>{data.country.emoji}</p>
    </div>
  );
};

export default SingleCountry;