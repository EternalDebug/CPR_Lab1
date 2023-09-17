class Cache{
    constructor() {
        this.Arr = []
        this.Stat = []
    }
    New(Key, Val, req_num = 1) {
        let Ent = new CacheEnt(Key, Val, req_num)
        let fnd = this.Arr.find((el) => el.Key == Key)
        if (fnd != undefined) {
            let ind = this.Arr.indexOf(fnd)
            this.Arr[ind].setVal(Val)
            this.Arr[ind].setReqNum(req_num)
            this.Stat.push(`Updated Key:${Key}, new value:${Val}, free requests:${req_num}`)
        }
        else {
            this.Arr.push(Ent)
            this.Stat.push(`New Key:${Key}, value:${Val}, free requests:${req_num}`)
        }
    }

    GetReqv(Key) {
        let fnd = this.Arr.find((el) => el.Key == Key)
        if (fnd != undefined) {
            let ind = this.Arr.indexOf(fnd)
            if (this.Arr[ind].req_num > 0) {
                this.Stat.push(`Request: Key:${Key}, Value ${this.Arr[ind].Val}, free requests: ${this.Arr[ind].req_num - 1}`)
                return this.Arr[ind].GetValReqv()
            }
            else {
                this.Stat.push(`Restricted request: Key:${Key}, Value ${this.Arr[ind].Val}, free requests: ${this.Arr[ind].req_num}`)
                return null
            }
        }
        else {
            this.Stat.push(`Missing Key:${Key}`)
            return null
        }
    }

    GetStat() {
        return this.Stat
    }

}
export { Cache }


class CacheEnt {
    constructor(Key, Val, req_num = 1) {
        this.Key = Key
        this.Val = Val
        this.req_num = req_num
    }

    getKey() {
        return this.Key
    }

    getVal() {
        return this.Val
    }

    getReq() {
        return this.req_num
    }

    setVal(nVal) {
        this.Val = nVal
    }

    setKey(nKey) {
        this.Key = nKey
    }

    setReqNum(nReq) {
        this.req_num = nReq
    }

    GetValReqv() {
        let x = this.req_num
        if (x > 0) {
            x = x - 1
            this.req_num = x
            return this.Val
        } else {
            return null
        }
    }

}
export { CacheEnt }