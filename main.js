let styles = ['Джаз', 'Рок'];
styles.push('Рок-н-рол');
let ekv = (styles.length - 1) / 2;
styles[ekv] = ('Классика');
alert(styles.shift());
styles.unshift('Реп', 'Реги')

alert(styles);
alert(ekv);
alert(styles[ekv]);