const getBeef = (nextStep) => {
    console.log(`Opening top part of the fridge`);
    setTimeout(() => {
        console.log(`Getting the beef`);
        const beef = '1 kg of beef';
        console.log(`Returning the 1 kg packet of beef`);
        nextStep(beef);
    }, 2000);
}

const cookBeef = (beef, nextStep) => {
    console.log(`Cooking the beef using oil`);
    setTimeout(() => {
        console.log(`Cooked ${beef}`);
        nextStep(`1 kg of cooked beef`);
    }, 2000);
}

const getBuns = nextStep => {
    console.log('Getting buns');
    setTimeout(function () {
        console.log('Got buns');
        nextStep('2 buns');
    }, 2000);
};

const putBeefBetweenBuns = (buns, cookedBeef, nextStep) => {
    console.log(`Putting ${cookedBeef} between ${buns}`);
    setTimeout(function () {
        console.log(`Put ${cookedBeef} between ${buns}`);
        nextStep(`Burger of ${cookedBeef} with ${buns}`);
    }, 2000);
};

const makeBurger = (callback) => {
    getBeef((beef) => {
        cookBeef(beef, (cookedBeef) => {
            getBuns((buns) => {
                putBeefBetweenBuns(buns, cookedBeef, (burger) => {
                    callback(burger);
                });
            });
        });
    });
}

const serveBurger = (burger) => {
    console.log(`Serving ${burger}`);
}

makeBurger(serveBurger);