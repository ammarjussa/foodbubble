import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const Item = () => (
  <div className="p-2 item">
    <div className="d-flex justify-content-between">
      <p>1 fruit</p>
      <div className="number d-flex justify-content-center align-items-center">1</div>
    </div>
    <div className="d-flex align-items-center justify-content-center pt-5">
      <AddCircleOutlineIcon className="plus" />
    </div>
  </div>
);

const Column = ({ day }) => {
  return (
    <div>
      <div className="column-bar pl-4">
        <p style={{ color: 'lightslategray' }}>{day}</p>
      </div>
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default Column;
