import * as React from 'react';
import { useCountriesListQuery } from '../../generated/graphql';
import CountriesList, {OwnProps} from './CountriesList';

const CountriesListContainer: React.FC<OwnProps> = (props:any) => {
  const { data, error, loading } = useCountriesListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <CountriesList data={data} {...props} />;
};

export default CountriesListContainer;