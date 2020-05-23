const _get = require('lodash.get')
const _set = require('lodash.set')

const handler = {
    get(target, prop) {
        return _get(target, prop);
    },

    set(target, prop, data) {
        return _set(target, prop, data);
    }
}

const SafeObject = (target) => {
    let proxy = new Proxy(target, handler)

    return proxy;
}

module.exports = SafeObject;
