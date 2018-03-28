import {
    SET_SIDESHOW
} from './mutations-type'
let mutations = {
    [SET_SIDESHOW](state) {
        state.sideFlag = !state.sideFlag;
    }
}

export default mutations