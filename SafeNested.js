const _get = require('lodash.get')
const _set = require('lodash.set')
const _has = require('lodash.has')
const _hasIn = require('lodash.hasin')

class SafeNested {
    constructor(obj, defaultValue) {
        this.obj = obj;
        this.defaultValue = defaultValue;
        this.value;
    }

    get(path, defaultValue = this.defaultValue) {
        this.value = undefined;
        this.value = _get(this.obj, path, defaultValue)
        return this
    }

    set(path, data) {
        this.value = undefined;
        this.value = _set(this.obj, path, data)
        return this
    }

    has(path) {
        this.value = undefined;
        this.value = _has(this.obj, path)
        return this
    }

    hasIn(path) {
        this.value = undefined;
        this.value = _hasIn(this.obj, path)
        return this
    }

    static static(obj, defaultValue) {
        const SafeNested = new SafeNested(obj, defaultValue);
        return SafeNested
    }

}

module.exports = SafeNested;