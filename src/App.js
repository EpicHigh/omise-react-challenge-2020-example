import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCharities, getPayments } from './store/actions';
import { getCharitiesState, getMessageState, getDonateState } from './store/selectors';
import { payments } from './static';

const Card = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
`;

const App = () => {
  const dispatch = useDispatch();

  const charities = useSelector(getCharitiesState);
  const message = useSelector(getMessageState);
  const donate = useSelector(getDonateState);

  const style = {
    color: 'red',
    margin: '1em 0',
    fontWeight: 'bold',
    fontSize: '16px',
    textAlign: 'center',
  };

  useEffect(() => {
    dispatch(getCharities());
    dispatch(getPayments());
  }, [dispatch]);

  return (
    <div>
      <h1>Tamboon React</h1>
      <p>All donations: {donate}</p>
      <p style={style}>{message.error}</p>
      {charities.map((charity, i) => (
        <Card key={`${i}`}>
          <p>{charity?.name}</p>
          {payments.map((amount, j) => (
            <label key={`${j}`}>
              <input type="radio" name={`${amount}-payment-${j}`} />
              {amount}
            </label>
          ))}
          <button>Pay</button>
        </Card>
      ))}
    </div>
  );
};

export default App;
