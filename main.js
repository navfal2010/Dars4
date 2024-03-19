let first = (Math.round(Math.random() * 100))

alert(`${'Randomda chiqan son: '}${first}`)


if (first % 3 === 0 && first % 5 === 0) {
    alert(first + ' :fizzbuzz')
}


else if (first % 3 === 0) {
    alert(first + ' :fizz')
}

else if (first % 5 === 0) {
    alert(first + ' :buzz')
}



else {
    alert(first + ' soni fizz ham buzz ham fizzbuzz ham emas')
}

