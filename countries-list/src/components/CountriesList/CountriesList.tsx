import * as React from 'react';
import { CountriesListQuery } from '../../generated/graphql';
import './styles.css';

export interface OwnProps {
    handleIdChange: (newId: string) => void;
}

interface Props {
  data: CountriesListQuery;
  handleIdChange: (newId: string) => void;
}

const className = 'CountriesList';

const CountriesList: React.FC<Props> = ({ data, handleIdChange }) => (
  <div className={className}>
    <h3>Countries List</h3>
    <ol className={`${className}__list`}>
      {!!data.countries &&
        data.countries.map(
          (ctry, i) =>
            !!ctry && (
              <li   onClick={() => handleIdChange(ctry.code)}
               key={i} className={`${className}__item`}>
                {ctry.name} 
              </li>
            ),
        )}
    </ol>
  </div>
);

export default CountriesList;