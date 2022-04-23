import * as React from 'react';
import { useCountryQuery } from '../../generated/graphql';
import SingleCountry from './SingleCountry';

interface OwnProps {
    code: string;
  }

const SingleCountryContainer: React.FC<OwnProps> = ({code}) => {
  const { data, error, loading, refetch } = useCountryQuery({ variables: { code: code } });

  React.useEffect(() => {
    refetch({ code: String(code) });
  }, [refetch, code]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a Country from the panel</div>;
  }

  return <SingleCountry data={data} />;
};

export default SingleCountryContainer;