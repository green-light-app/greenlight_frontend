import { FAKE_ACTION } from './types'

export const fakeAction = something => (
    {
        type: FAKE_ACTION, 
        payload: 'stuff'
    }
)