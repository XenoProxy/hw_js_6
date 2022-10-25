//task1
function task1(){
    function repl(){
        let str1 = `aaa@bbb@ccc`;
        document.write(str1.replace(/@/g, '!')); 
    }
    repl();
}

//task2
function task2(){
    function daateFormat(){
        let date_str = '2025-12-31';
        let format_date_str = date_str.split('-').reverse().join('/');
        document.write(format_date_str);
    }
    daateFormat();
}

//task3
function task3(){
    function cutStr(){
        let str = `Я учу javascript!`;

        //1
        // str.slice(start [, end])
        // Возвращает часть строки от start до (не включая) end.
        document.write(str.slice(2, 5));
        document.write(` `);
        document.write(str.slice(6));
        document.write(`</br>`);

        //2
        // str.substring(start [, end])
        // Возвращает часть строки между start и end (не включая) end.
        document.write(str.substring(2, 5));
        document.write(` `);
        document.write(str.substring(6));
        document.write(`</br>`);

        //3
        // str.substr(start [, length])
        // Возвращает часть строки от start длины length.
        document.write(str.substr(2, 3)); // получаем 3 символа, начиная с позиции 2
        document.write(` `);
        document.write(str.substr(6)); 
    }
    cutStr();
}

//task4
function task4(){
    function squareRoot(){
        let arr = [4, 2, 5, 19, 13, 0, 10];
        let sqr_sum = 0;
        for (let i = 0; i < arr.length; i++){
            sqr_sum += Math.pow(arr[i], 2);
        }
        document.write(Math.sqrt(sqr_sum));
    }
    squareRoot();
}

//task5
function task5(){
    function sub(a, b){             
        let c = (a - b);
        if (c < 0){
            c = (c * -1);
        } 
        document.write(c);
    }
    sub(3, 5);
    document.write(`</br>`);
    sub(6, 1);
}

//task6
function task6(){
    function currentDateTime(){    
        const date = new Date();
        
        function getZero(num){
            if (num > 0 && num < 10) { 
                return '0' + num;
            } else {
                return num;
            }
        }

        document.write(
            getZero(date.getHours()) + ':' + 
            getZero(date.getMinutes()) + ':' + 
            getZero(date.getSeconds()) + ' ' + 
            getZero(date.getDate()) + '.' + 
            getZero(date.getMonth() + 1) + '.' + 
            date.getFullYear()
        );
    }
    currentDateTime();
}

//task7
function task7(){
    function patternSearch(a, b){             
        let str = `aa aba abba abbba abca abea`;
        let pattern = str.match(/ab+a/g);
        document.write(pattern);
    }
    patternSearch();
}

//task8
function task8(){
    function phoneCheck(num){ 
        let pattern = /^[\d\+][\d\(\)\ -]{4,14}\d$/

        // более строгий шаблон
        let strict_pattern = /^[\d]{1}\ \([\d]{2,3}\)\ [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/            
        
        // Метод regexp.test(str) ищет совпадение 
        // и возвращает true/false, в зависимости от того, 
        //находит ли он его.
        if(pattern.test(num)){
            return true;
        } else{
            return false;
        }
    }
    document.write(phoneCheck(`8 999 123-45-67`));
    document.write(`</br>`);
    document.write(phoneCheck(`=7 (999) 123 45 67`));
    document.write(`</br>`);
    document.write(phoneCheck(`80(29) 123-45-67`));
}

//task9
function task9(){
    function emailCheck(email){             
        let pattern = /^[\w]{1}[\w+\.]*@[\w-]+\.[a-z]{2,4}$/i
    
        if(pattern.test(email)){
            return true;
        } else{
            return false;
        }
    }
    document.write(emailCheck(`xenoproxy@yandex.by`));
    document.write(`</br>`);
    document.write(emailCheck(`test@mail.byhsg`));
    document.write(`</br>`);
    document.write(emailCheck(`ttй@mail.byhsg`));
}

//task10
function task10(){
    function linkParse(link){             
        let result = [];

        let name = link.match(/https:\/\/([^\/]+)[^\/]/gi)[0];
        result.push(name);

        let domain = link.match(/[\/?][\S]+[\/\?]/gi)[0];
        result.push(domain);

        let options = link.match(/utm[\S]+[\#]/gi)[0];
        result.push(options);

        let hash = link.match(/[\#][\S]+/gi)[0];
        result.push(hash);

        return result;
    }
    document.write(
        linkParse(
            `https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3`
        )
    );
}
