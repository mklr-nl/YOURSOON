export const countDown = () => {
    let now = new Date().getTime();
    let countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return(
    console.log(days + "d " + hours + "h "
    + minutes + "m " + seconds + "s "))
}
