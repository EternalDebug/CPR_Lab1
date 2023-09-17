import {Cache, CacheEnt} from "../src/cache";

test('it fails', () => {
    expect(false).toBe(false);
});

test('constructor test failed', () => {
    let Cache_Ent = new CacheEnt(1, 100, 5)
    expect(Cache_Ent.Key).toBe(1);
    expect(Cache_Ent.Val).toBe(100);
    expect(Cache_Ent.req_num).toBe(5);

    Cache_Ent = new CacheEnt(2, 200)
    expect(Cache_Ent.Key).toBe(2);
    expect(Cache_Ent.Val).toBe(200);
    expect(Cache_Ent.req_num).toBe(1);
});

test('getKey test failed', () => {
    const Cache_Ent = new CacheEnt(1, 100, 5)
    const Cache_Ent2 = new CacheEnt(2, 100, 5)
    const Cache_Ent3 = new CacheEnt(3, 105, 6)

    expect(Cache_Ent.getKey()).toBe(1);
    expect(Cache_Ent2.getKey()).toBe(2);
    expect(Cache_Ent3.getKey()).toBe(3);

    expect(Cache_Ent.getKey()).toBe(Cache_Ent.Key);
    expect(Cache_Ent2.getKey()).toBe(Cache_Ent2.Key);
    expect(Cache_Ent3.getKey()).toBe(Cache_Ent3.Key);
});

test('getVal test failed', () => {
    const Cache_Ent = new CacheEnt(1, 100, 5)
    const Cache_Ent2 = new CacheEnt(2, 100, 5)
    const Cache_Ent3 = new CacheEnt(3, 105, 6)

    expect(Cache_Ent.getVal()).toBe(100);
    expect(Cache_Ent2.getVal()).toBe(100);
    expect(Cache_Ent3.getVal()).toBe(105);

    expect(Cache_Ent.getVal()).toBe(Cache_Ent.Val);
    expect(Cache_Ent2.getVal()).toBe(Cache_Ent2.Val);
    expect(Cache_Ent3.getVal()).toBe(Cache_Ent3.Val);
});

test('getRec test failed', () => {
    const Cache_Ent = new CacheEnt(1, 100, 5)
    const Cache_Ent2 = new CacheEnt(2, 100, 5)
    const Cache_Ent3 = new CacheEnt(3, 105, 6)

    expect(Cache_Ent.getReq()).toBe(5);
    expect(Cache_Ent2.getReq()).toBe(5);
    expect(Cache_Ent3.getReq()).toBe(6);

    expect(Cache_Ent.getReq()).toBe(Cache_Ent.req_num);
    expect(Cache_Ent2.getReq()).toBe(Cache_Ent2.req_num);
    expect(Cache_Ent3.getReq()).toBe(Cache_Ent3.req_num);
});

test('setVal test failed', () => {
    let Cache_Ent = new CacheEnt(1, 100, 5)

    Cache_Ent.setVal(12)
    expect(Cache_Ent.getVal()).toBe(12);
    expect(Cache_Ent.Val).toBe(12);

    Cache_Ent.setVal(102)
    expect(Cache_Ent.getVal()).toBe(102);
    expect(Cache_Ent.Val).toBe(102);
});

test('setKey test failed', () => {
    let Cache_Ent = new CacheEnt(1, 100, 5)

    Cache_Ent.setKey(1)
    expect(Cache_Ent.getKey()).toBe(1);
    expect(Cache_Ent.Key).toBe(1);

    Cache_Ent.setKey(12)
    expect(Cache_Ent.getKey()).toBe(12);
    expect(Cache_Ent.Key).toBe(12);
});

test('setReqNum test failed', () => {
    let Cache_Ent = new CacheEnt(1, 100, 5)

    Cache_Ent.setReqNum(1)
    expect(Cache_Ent.req_num).toBe(1);
    expect(Cache_Ent.getReq()).toBe(1);

    Cache_Ent.setReqNum(13)
    expect(Cache_Ent.req_num).toBe(13);
    expect(Cache_Ent.getReq()).toBe(13);
});

test('GetValReqv test failed', () => {
    let Cache_Ent = new CacheEnt(1, 100, 3)

    let x = Cache_Ent.GetValReqv()
    expect(Cache_Ent.req_num).toBe(2);
    expect(Cache_Ent.getReq()).toBe(2);
    expect(x).toBe(100)

    Cache_Ent.setVal(200)
    x = Cache_Ent.GetValReqv()
    expect(Cache_Ent.req_num).toBe(1);
    expect(Cache_Ent.getReq()).toBe(1);
    expect(x).toBe(200)

    x = Cache_Ent.GetValReqv()
    expect(Cache_Ent.req_num).toBe(0);
    expect(Cache_Ent.getReq()).toBe(0);
    expect(x).toBe(200)

    x = Cache_Ent.GetValReqv()
    expect(Cache_Ent.req_num).toBe(0);
    expect(Cache_Ent.getReq()).toBe(0);
    expect(x).toBe(null)

});

test('Cache constructor test fails', () => {
    let cache = new Cache()
    expect(cache.Arr).toEqual([]);
    expect(cache.Stat).toEqual([]);
});

test('Cache New test fails', () => {
    let cache = new Cache()
    expect(cache.Arr).toEqual([]);
    let cch = []

    cache.New(1, 20)
    cch.push(new CacheEnt(1, 20, 1))
    expect(cache.Arr).toEqual(cch);

    cache.New(1, 205, 5)
    cch = [new CacheEnt(1, 205, 5)]
    expect(cache.Arr).toEqual(cch);

    cache.New(3, 20, 6)
    cch.push(new CacheEnt(3, 20, 6))
    expect(cache.Arr).toEqual(cch);
});

test('Cache GetReqv test fails', () => {
    let cache = new Cache()
    let cch = []

    let res = cache.GetReqv(1)
    expect(res).toBe(null);

    cache.New(1, 20)
    cch.push(new CacheEnt(1, 20, 0))
    res = cache.GetReqv(1)
    expect(cache.Arr).toEqual(cch);
    expect(res).toBe(20)

    res = cache.GetReqv(1)
    expect(cache.Arr).toEqual(cch);
    expect(res).toBe(null)
});

test('Cache GetStat test fails', () => {
    let cache = new Cache()
    expect(cache.Stat).toEqual([]);

    cache.New(1, 20)
    let arst = ['New Key:1, value:20, free requests:1']
    expect(cache.GetStat()).toEqual(arst);

    cache.New(1, 40, 5)
    arst.push('Updated Key:1, new value:40, free requests:5')
    expect(cache.GetStat()).toEqual(arst);

    cache.GetReqv(1)
    arst.push('Request: Key:1, Value 40, free requests: 4')
    expect(cache.GetStat()).toEqual(arst);

    cache.GetReqv(5)
    arst.push('Missing Key:5')
    expect(cache.GetStat()).toEqual(arst);

    cache.New(1, 50, 0)
    arst.push('Updated Key:1, new value:50, free requests:0')
    expect(cache.GetStat()).toEqual(arst);

    cache.GetReqv(1)
    arst.push('Restricted request: Key:1, Value 50, free requests: 0')
    expect(cache.GetStat()).toEqual(arst);
});