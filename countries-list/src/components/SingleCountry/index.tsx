import * as React from 'react';
import { useCountryQuery } from '../../generated/graphql';
import SingleCountry from './SingleCountry';
import { useLocation } from 'react-router-dom';

interface OwnProps {
  code: string;
}

const SingleCountryContainer: React.FC<OwnProps> = ({ code }) => {
  const { data, error, loading, refetch } = useCountryQuery({ variables: { code: code } });
  const location = useLocation();

  React.useEffect(() => {
    refetch({ code: String(code) });
  }, [refetch, code]);

  React.useEffect(() => {
    if (location.pathname.includes('country')) {
      refetch({ code: String(location.pathname.split("/").pop()) });
    }
  }, [refetch, location]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Elije un Pais del panel</div>;
  }

  return <SingleCountry data={data} />;
};

export default SingleCountryContainer;