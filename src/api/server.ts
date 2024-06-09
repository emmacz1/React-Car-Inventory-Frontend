const token = 'a10e6be13fd95906f4ef9d104edbb93c707210fd859494a2';

export const server_calls = {
  get: async () => {
    const response = await fetch(`https://car-inventory-cndb.onrender.com/api/cars`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data from the server');
    }

    return await response.json();
  },

  create: async (data: any = {}) => {
    const response = await fetch(`https://car-inventory-cndb.onrender.com/api/cars`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Failed to create new data on the server');
    }

    return await response.json();
  },

  update: async (id: string, data: any = {}) => {
    const response = await fetch(`https://car-inventory-cndb.onrender.com/api/cars/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Failed to update data on server');
    }

    return await response.json();
  },

  delete: async (id: string) => {
    const response = await fetch(`https://car-inventory-cndb.onrender.com/api/cars/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token
      }
    });

    if (!response.ok) {
      throw new Error('Failed to delete data on server');
    }
  }
};
