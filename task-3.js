const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  const makeTransaction = (transaction, onSuccess, onError) => {
    const delay = randomIntegerFromInterval(200, 500);
  
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
  
      if (canProcess) {
        onSuccess(transaction.id, delay);
      } else {
        onError(transaction.id);
      }
    }, delay);
  };
  
  const _makeTransaction = transaction => {
    const _delay = randomIntegerFromInterval(200, 500);
    return new Promise((resolve, reject) =>{
        let id = transaction.id;
        setTimeout(() => {
            const canProcess = Math.random() > 0.3;
        
            if (canProcess) {
             const result = {id, _delay};
             resolve(result);
            } else {
              reject(Error(transaction.id));
            }
          }, _delay);
    });
  };

  const _logSuccess = (result) =>{
    console.log(`Transaction ${result.id} processed in ${result._delay}ms`);
  };

  const logSuccess = (id, time) => {
    console.log(`Transaction ${id} processed in ${time}ms`);
  };

  const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
  };
  
  /*
   * Работает так
   */
  makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
  makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
  makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
  makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
  /*
   * Должно работать так
   */
  _makeTransaction({ id: 70, amount: 150 })
    .then(_logSuccess)
    .catch(logError);
  
  _makeTransaction({ id: 71, amount: 230 })
    .then(_logSuccess)
    .catch(logError);
  
  _makeTransaction({ id: 72, amount: 75 })
    .then(_logSuccess)
    .catch(logError);
  
  _makeTransaction({ id: 73, amount: 100 })
    .then(_logSuccess)
    .catch(logError);