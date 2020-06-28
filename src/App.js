import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCharities, getPayments, makePayments } from './store/actions';
import { getCharityList, getMessageState, getDonateState } from './store/selectors';
import { payments } from './static';

const Card = styled.div`
  border: 1px solid #ccc;
  margin: 10px;
`;

const Box = styled.div`
  display: flex;
`;

const Success = styled.p`
  color: green;
  font-size: 16px;
  font-weight: bold;
  margin: 1em 0;
  text-align: center;
`;

const Error = styled.p`
  color: red;
  font-size: 16px;
  font-weight: bold;
  margin: 1em 0;
  text-align: center;
`;

const App = () => {
  const [selectedAmount, setSelectedAmount] = useState(10);
  const dispatch = useDispatch();

  const charities = useSelector(getCharityList);
  const message = useSelector(getMessageState);
  const donate = useSelector(getDonateState);

  useEffect(() => {
    dispatch(getCharities());
    dispatch(getPayments());
  }, [dispatch]);

  const handlePayments = useCallback(
    (charitiesId, amount, currency) => () => dispatch(makePayments(charitiesId, amount, currency)),
    [dispatch],
  );

  return (
    <div>
      <h1>Tamboon React</h1>
      <p>All donations: {donate}</p>
      {message.success && <Success>{message.success}</Success>}
      {message.error && <Error>{message.error}</Error>}
      {charities?.map((charity, i) => (
        <Card key={`${i}`}>
          <p>{charity?.name}</p>
          <Box>
            {payments?.map((amount, j) => (
              <div key={`payment-${j}`}>
                <input
                  id={`${amount}-payment-${i}${j}`}
                  name="payment"
                  type="radio"
                  onClick={() => setSelectedAmount(amount)}
                />
                <label htmlFor={`${amount}-payment-${i}${j}`}>{amount}</label>
              </div>
            ))}
            <button type="submit" onClick={handlePayments(charity.id, selectedAmount, charity.currency)}>
              Pay
            </button>
          </Box>
        </Card>
      ))}
    </div>
  );
};

export default App;
