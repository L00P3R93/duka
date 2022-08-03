const create = async (params, credentials, shop) => {
    try {
        let response = await fetch('/api/shops/by/' + params.userId, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            },
            body: shop
        })
        return response.json()
    } catch (e) {
        console.log(e)
    }
}

const list = async (signal) => {
    try {
        let response = await fetch('/api/shops', {
            method: 'GET',
            signal: signal
        })
    } catch (e) {
        console.log(e)
    }
}

const listByOwner = async (params, credentials, signal) => {
    try {
        let response = await fetch('/api/shops/by/' + params.userId, {
            method: 'GET',
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        })
        return response.json()
    } catch (e) {
        console.log(e)
    }
}

const read = async (params, signal) => {
    try {
        let response = await fetch('/api/shop' + params.shopId, {
            method: 'GET',
            signal: signal
        })
        return response.json()
    }catch(e){ console.log(e) }
}

const update = async (params, credentials, shop) => {
    try {
        let response = await fetch('/api/shops' + params.shopId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'AUthorization': 'Bearer ' + credentials.t
            },
            body: shop
        })
    } catch (e) {console.log(e)}
}

const remove = async (params, credentials) => {
    try {
        let response = await fetch('/api/shops/' + params.shopId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        })
        return response.json()
    } catch (e) {
        console.log(e)        
    }
}

export {
    create,
    list,
    listByOwner,
    read,
    update,
    remove
}

