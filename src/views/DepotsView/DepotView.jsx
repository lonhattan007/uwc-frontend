import Sidebar from '@components/Sidebar/Sidebar';
import Mapbox from '@components/Mapbox/Mapbox';

const DepotsView = () => {
  return (
    <>
      <Sidebar />
      <div id="workspace">
        <Mapbox />
      </div>
    </>
  );
};

export default DepotsView;
