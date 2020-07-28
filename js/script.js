// Selecting all classes whose name is 'counter'
const counters = document.querySelectorAll('.counter');
// the lower the speed, the faster the text gets load
const speed = 300;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        console.log(target);
        console.log(count);
        console.log(increment);

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            count.innerText = target;
        }
    }
    updateCount();
});
