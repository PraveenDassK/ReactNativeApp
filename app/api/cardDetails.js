

import { enfuceClient as client }from './client'




const getCardResponse = (id) => {
    const data = id
    const cardId = id
    const endpoint = `/v4/card/${cardId}/controlToken?auditUser=`
    return client.post(endpoint, data, { 
    auth: {
      username: 'carbonyte_test_demo_apiuser',
      password: 'yAo8dvc*B6pDgfGcYQae_z!Hgndhv.MN'
    },
   
  });
}

const getCardDetails = (url, token) => {
    client.setBaseURL(url)
    client.setHeaders( {
        'Content-Type':'application/x-www-form-urlencoded'
    })

    return client.any({ method: 'POST', params: { token }, data: {},  headers: {
        'Accept': '*/*',
        'Content-Type': 'application/x-www-form-urlencoded', 
      } })
}

export default {
    getCardDetails,
    getCardResponse
}