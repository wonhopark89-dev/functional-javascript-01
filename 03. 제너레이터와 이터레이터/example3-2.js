const log = console.log;

function* infinity(a = 0) {
    // 무한 수열
    // 내가 부를 때만 사용하기때문에 true
    while (true) {
        yield a++;
    }
}

function* limit(l, iter) {
    for (const b of iter) {
        yield b;
        if (b == l) {
            return;
        }
    }
}

function* odds(l) {

    // step1
    // for (let i = 0; i < l; i++) {
    //     if (i % 2) {
    //         yield i;
    //     }
    // }

    // step2
    // for (const a of infinity(1)) {
    //     if (a % 2) {
    //         yield a;
    //     }
    //     if (a == l) {
    //         return;
    //     }
    // }

    for (const a of limit(l, infinity(1))) {
        if (a % 2) {
            yield a;
        }
    }
}

const main = () => {
    let iter = odds(10);
    log(iter.next());
    log(iter.next());
    log(iter.next());
    log(iter.next());
    log(iter.next());
    log(iter.next());

    for (const a of odds(20)) {
        log(a);
    }

    // 전개 연산자, 구조분해 할당
    log(...odds(10));
    log([...odds(5), ...odds(8)]);

    const [head, ...tail] = odds(20);
    log(head);
    log(tail);
}

main();