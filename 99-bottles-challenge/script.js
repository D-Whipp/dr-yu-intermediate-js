console.log('Hello World!');

let bottles = 99;

function song() {
    while (bottles >= 0) {
        if (bottles > 1) {
            console.log(bottles + ' bottles of beer on the wall.');
        } else if (bottles === 1) {
            console.log(bottles + ' bottle of beer on the wall.');
        } else if (bottles === 0) {
            console.log(
                'No more bottles of beer on the wall. Go out and buy more beers. 99 Bottles of beer on the wall.'
            );
        }
        bottles = bottles - 1;
    }
}

song();
