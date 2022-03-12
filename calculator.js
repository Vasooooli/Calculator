       display = (val) => {
            document.getElementById("textval").value += val;
        }
        solve = () => {
            let x = document.getElementById("textval").value;
            let y = eval(x);
            document.getElementById("textval").value = y;

        }
        clr = () => {
            document.getElementById("textval").value = "";
        }