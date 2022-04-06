function checkDate(timestamp) {
    const day = new Date(timestamp * 1000).getDate();
    const month = new Date(timestamp * 1000).getMonth() + 1;
    // нумерация месяцев идёт с нуля, поэтому необходимо прибавить единицу
    const year = new Date(timestamp * 1000).getFullYear();
    const hour = new Date(timestamp * 1000).getHours();
    // все var заменены на const, так как в дальнейшем данные значения не будут меняться

    const current_Date = new Date(Date.now());
    const current_day = current_Date.getDate();
    const current_month = current_Date.getMonth() + 1;
    const currentYear = current_Date.getFullYear();

    let isSameDate = false;

    if (year === currentYear && month === current_month)
            isSameDate = day === current_day
    // вложенные if в данном случае излишни, они выглядят громоздко и засоряют код, лучше перечислить условия через логическое И
    // к тому же двойное равно было заменено на тройное равно для проверки типов
    // (лучше всегда использовать строгое равенство: легче предугадать результат, увеличивается скорость)
    // также было упрощено присваивание boolean значения переменной isSameDate
    // {} можно опустить

    return {
        isSameDate: isSameDate,
        dayPeriod: hour >= 12 ? 'pm' : 'am'
        // pm - это время после полудня, поэтому >= 12
    }
}
