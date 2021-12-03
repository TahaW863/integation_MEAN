//OpenCRX

const axios = require('axios');

const baseUrl = 'https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX';
const credentials = {
    username: 'guest',
    password: 'guest',
};

const config = {
    headers: {
        'Accept': 'application/json'
    },
    auth: credentials,
};

module.exports= {
    loadCustomers: async function loadCustomers() {
        try {
            const customers = await axios.get(`${baseUrl}/org.opencrx.kernel.account1/provider/CRX/segment/Standard/account`, config);
            // console.log(customers.data.objects);

            var array = customers.data.objects;
            // for (let index = 0; index < array.length; index++) {
            //     const element = array[index];
            //     console.log(element);

            // }
            console.log(array[0]);
        }
        catch (error) {
            console.log(error);
        }
    }
}