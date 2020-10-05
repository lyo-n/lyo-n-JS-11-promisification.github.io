const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
  
  const toggleUserState = (allUsers, userName, callback) => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
  
    callback(updatedUsers);
  };
  
  const logger = updatedUsers => console.table(updatedUsers);
  
  const _toggleUserState = (allUsers, userName) =>{
    return new Promise((resolve, reject) =>{
        const _updatedUsers = allUsers.map(user => 
        user.name === userName ? { ...user, active: !user.active } : user
    );
    resolve(_updatedUsers);
    });
  };

  const _logger = updatedUsers => console.table(updatedUsers);

  /*
   * Сейчас работает так
   */
  toggleUserState(users, 'Mango', logger);
  toggleUserState(users, 'Lux', logger);
  
  /*
   * Должно работать так
   */
  _toggleUserState(users, 'Mango').then(_logger);
  _toggleUserState(users, 'Lux').then(_logger);