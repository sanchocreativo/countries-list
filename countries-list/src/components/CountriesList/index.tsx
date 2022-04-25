import * as React from 'react';
import { useCountriesListQuery } from '../../generated/graphql';
import CountriesList, {OwnProps} from './CountriesList';


const CountriesListContainer: React.FC<OwnProps> = (props:any) => {
  const { data, error, loading, refetch } = useCountriesListQuery();

  React.useEffect(() => {
    refetch({ code: props.code[0] });
  }, [refetch, props.code]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  return <CountriesList data={data} {...props} loading={loading} />;
};

export default CountriesListContainer;