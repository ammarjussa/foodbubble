import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const Item = () => (
  <div
    className="p-2"
    style={{
      width: '210px',
      height: '210px',
      border: '1px solid silver',
      backgroundColor: 'white',
    }}
  >
    <div className="d-flex justify-content-between">
      <p>1 fruit</p>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: '50px', backgroundColor: 'silver', color: 'white' }}
      >
        1
      </div>
    </div>
    <div className="d-flex align-items-center justify-content-center pt-5">
      <AddCircleOutlineIcon />
    </div>
  </div>
);

const Column = ({ day }) => {
  return (
    <div>
      <div
        className="pl-4"
        style={{ height: '40px', backgroundColor: 'whitesmoke', width: '210px' }}
      >
        <p style={{ color: 'lightslategray' }}>{day}</p>
      </div>
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default Column;
