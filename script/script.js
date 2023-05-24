function openNav() {
            document.getElementById("mySidebar").style.height = "220px";
            document.getElementById("mySidebar").style.width = "100px";
            document.getElementById("main").style.display = "none";
        }


        function closeNav() {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.marginRight = "0";
            document.getElementById("main").style.display = "block";
        }