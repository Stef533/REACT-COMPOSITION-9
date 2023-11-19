import useCurrentLocation from './useCurrentLocation';

const LocationComponent = () => {
  const { location, error, loading, getCurrentLocation } = useCurrentLocation();

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {location && (
        <p>
          Your current location is: {location.latitude}, {location.longitude}
        </p>
      )}
      <button onClick={getCurrentLocation} disabled={loading}>
        Get Current Location
      </button>
    </div>
  );
};

export default LocationComponent;
