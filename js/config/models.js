import Realm from 'realm'

const Faves = {
    name: 'Faves',
    primaryKey: 'id',
    properties: {
        id: 'string',
        favedOn: 'date'
    }
}


const realm = new Realm({ schema: [Faves] })

export const addFav = id => {
    realm.write(() => {
        const favedOn = new Date()
        realm.create('Faves', { id, favedOn })
    })
}

export const getFaves = () => {
    const faves = realm.objects('Faves')
    return faves
}

export const removeFav = id => {
    realm.write(() => {
        const allFaves = realm.objects('Faves')
        const favToDelete = allFaves.filtered(`id == $0`, id)
        realm.delete(favToDelete)
    })
}

export default realm