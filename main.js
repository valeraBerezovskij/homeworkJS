
/*
<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>Строки</title>
</head>
<body>
    <script>
        let email;
        do {
            email = prompt("Введите свой e-mail:", "username@host.com")
            let pos = email.indexOf("@");
            if (pos == -1) {
                alert("Введенный e-mail синтаксически некорректен!\nПовторите операцию.");
            }
            else {
                let userName = email.substring(0, pos);
                let host = email.slice(pos + 1);

                if (userName.indexOf(" ") != -1)
                    alert("Введенный e-mail синтаксически некорректен!\nПовторите операцию.");
                else if (host.indexOf(".") == -1)
                    alert("Введенный e-mail синтаксически некорректен!\nПовторите операцию.");
                else
                    break;
            }
        } while (true);
        alert("Спасибо за сотрудничество!");

        let s = prompt("Введите несколько числовых значений, разделенных запятыми:", "1,2,5,0,3,7");
        let a = s.split(",");
        let sum = 0;
        for (let i = 0; i < a.length; i++)
            sum += parseInt(a[i]);

        alert("Сумма элементов введенного массива: " + sum);
    </script>
</body>
</html>
*/