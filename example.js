(($) =>{
    $(document).ready(function(){

        // checking if inside jQuery
        console.log('Ready to write some jQuery code.');

        // jQuery version
        if (typeof jQuery !== 'undefined') {  
           console.log("jQuery version: ", jQuery.fn.jquery);
        }

        // Remove a specific value from an array using jQuery // or get a specific value
        let y = ['Red', 'Green', 'White', 'black', 'Yellow'];
        let remove_item = 'White';
        console.log('Array before removing the element = '+y);
        y = $.grep(y, function(value){
            return value != remove_item;
        });
        console.log('Array after removing the element = '+y);

        // disable right click on page or change the menu
        $(document).bind("contextmenu", function(){
            return false;
        });

        // append an element to a specific place // scroll up option
        $("<div class='div-4'></div").appendTo("body");
        for(let i = 0; i < 10; i++){
            $("<p> bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>").appendTo(".div-4");
        }
        $("<button id='scroll-up' class='btn'>Click me to scroll up</button>").appendTo(".div-4");
        $(".btn").click(function(){ // - scroll up
            window.scrollTo(0, 0);
        });

        // another example using append while the element is clicked
        $(".p-1").click(function(){
            $("<div class='div-3'>This is a click Event</div>").appendTo( ".div-2" );
       });
        // another example using append while the element is double clicked
        $(".p-1").bind("dblclick", function(){
            $( "<div class='div-3'>This is a double-click Event</div>"  ).appendTo( ".div-2" );
        });

        // disable form submit button if checkbox is not checked
        $("<div class='div-5'></div").appendTo("body");
        $("<form action='' class='form-container'></form>").appendTo(".div-5");
        $("<input type='text' placeholder='Enter your name' class='input-form'/>").appendTo(".form-container");
        $("<input type='text' placeholder='Enter your last name' class='input-form'/>").appendTo(".form-container");
        $("<b>Accept page terms</b><input type='checkbox' class='checkbox'/>").appendTo(".form-container");
        $("<input type='submit' id='form-btn' class='btn' value='Accept terms' disabled='disabled' style='background: #ccc;'/>").appendTo(".form-container");
        $(".checkbox").click(function(){
            if($("#form-btn").is(":disabled")){
                $("#form-btn").removeAttr("disabled");
                $("#form-btn").css("background", "#06d6a0");
                // $("#form-btn").prop("value", "Submit"); // change innerHTML value // prop
                $("#form-btn").val("Submit"); // or by just using val()
            }
            else {
                $("#form-btn").attr("disabled", "disabled");
                $("#form-btn").css("background", "#ccc");
                // $("#form-btn").prop("value", "Accept terms"); // change innerHTML value back to defualt // prop
                $("#form-btn").val("Accept terms"); // using val() insted of prop 
            }
        });
        // if enter key pressed or click was made out of the input box
        $(".input-form").change(function() {
            $(this).css("background-color", "#06d6a0");
        });

        // get all the forms elements and their values
        $('#myForm').submit(function(e) {
            var values = $(this).serialize();
            console.log(values);
            e.preventDefault();
        });

        // hide broken image (not the right link or link dosen't work) - change img src to check
        $("<div class='image-container'></div>").appendTo("body");
        $("<a href='https://www.w3resource.com'><img src='https://www.w3resource.com/images/w3resource-logo.png' alt='w3resource logo' width='150' height='78' onerror='$(this).hide();'/></a>").appendTo(".image-container");
        $("<a href='https://www.w3resource.com'><img src='https://www.w3resource.com/images/w3resource-logo.png' alt='w3resource logo' width='150' height='78' onerror='$(this).hide();'/></a>").appendTo(".image-container");

        // make text to blink   
        $("<div class='blink-div'></div>").appendTo("body");
        $("<p>jQuery <span class='blink'>Exercises</span> and Solution</p>").appendTo(".blink-div");
        function blink_text(){
            $(".blink").fadeOut(500);
            $(".blink").fadeIn(500);
        }
        // call setInterval function to repaet the blink evry 1250 miliseconds // make text blink
        setInterval(blink_text, 1250);

        // another blink text
        $("<div class='div-6'></div>").appendTo("body");
        $("<span class='blink-span'>Hello world</span></div>").appendTo(".div-6");
        function another_blink(){
            $(".blink-span").fadeOut(500);
            $(".blink-span").fadeIn(500);
        }
        setInterval(another_blink, 1250);

        // make a table with zebra stripes
        $("<div class='table-div'></div>").appendTo("body");
        $("<table id='table-1'></table").appendTo(".table-div");
        $("<tr id='tr-1'></tr").appendTo("#table-1");
        $("<th>Company</th><th>Contact</th><th>Country</th>").appendTo("#tr-1");
        $("<tr id='tr-2'></tr").appendTo("#table-1");
        $("<td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td>").appendTo("#tr-2");
        $("<tr id='tr-3'></tr").appendTo("#table-1");
        $("<td>Centro comercial Moctezuma</td><td>Francisco Chang</td><td>Mexico</td>").appendTo("#tr-3");
        $("<tr id='tr-4'></tr").appendTo("#table-1");
        $("<td>Some company</td><td>some name</td><td>some country</td>").appendTo("#tr-4");
        $("tr:odd").css("background-color", "yellow");
        
        // add a print option - print the page
        $("<div class='a-div'></div>").appendTo("body");
        $("<a class='printPage' href='#'>Click me to print</a>").appendTo(".a-div");
        $('a.printPage').click(function(){
            window.print();
            return true;
        });

        // some random text
        $("<div class='div-4'></div").appendTo("body");
        for(let i = 0; i < 5; i++){
            $("<p> bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>").appendTo(".div-4");
        }

        // max length in the input box is 15, make a count down number starting at 15
        $("<div class='div-max15'></div").appendTo("body");
        $("<form class='form-container-2'></form>").appendTo(".div-max15");
        $("<label>Maximum 15 characters</label>").appendTo(".form-container-2");
        $("<input id='textarea' maxlength='15'/>").appendTo(".form-container-2");
        $("<span id='rchars'>15</span> Character(s) Remaining").appendTo(".form-container-2");
        let maxLength = 15;
        $('#textarea').keyup(function() {
            let textlen = maxLength - $(this).val().length;
            $('#rchars').text(textlen);
        });

        // $("<div id='selected-div'></div>").appendTo("body");
        // $("<button id='selected'>Hey</button>").appendTo("#selected-div");
        // $("#selected").click(function(){
        //     if($("#selected").parent().attr("id") == "selected"){
        //         $("#selected").detach().appendTo("#hey");
        //     }
        //     else {
        //         $("#hey").detach().appendTo("#selected");
        //     }
        // });

        // insert object to an element with his id selector
        colors = { "color1": "Red", "color2": "Green", 'color3': "Blue" };
        $("<div id='divSelect'></div>").appendTo("body");
        $.each(colors, function(key, value) {
            $('#divSelect').append($("<option/>", {
                value: key,
                text: value
            }));
        });

        // another try to insert object
        names = { "name1": "Yossi", "name2": "Gaya", 'name3': "Rotem" };
        $("<div id='divSelect-2'></div>").appendTo("body");
        $("#divSelect").click(function(){
            $.each(names, function(key, value) {
                $('#divSelect').append($("<option/>", {
                    value: key,
                    text: value
                }));
            });
        });

        // usiung append into a div with a list element // append a list named leng into the div
        $("<div id='header'></div>").appendTo("body");
        $("#header").append("<ul></ul>");
        $("#header").append("<button id='header-btn'>show</button>");
        leng = { "1": "JavaScript", "2": "HTML", "3": "CSS", "4": "SQL", "5": "Bash", "6": "Python", "7": "AWS", "8": "C#", "9": "PHP", "10": "React"};
        $("#header-btn").click(function(){
            $.each(leng, function(key, value) {
                $("#header").append($("<li/>", {
                    value: key,
                    text: value
                })).fadeIn(1000);
            });
            $("#header-btn").hide()
        });

        // delete all options when button was clicked
        $("#myColorBtn").click(function(){
            $("#myColor")
            .empty()
            .append("<option selected='selected' value='White'>White</option>");
        });

        // change text style with change()
        $("#textStyle-0, #textStyle-1, #textStyle-2").change(function(){
            if ($(this).val() == "italic"){
                if ($(this).is(':checked')){
                    $("#styledText").css("font-style", "italic");
                }
                else {
                    $("#styledText").css("font-style", "normal");
                }
            }
            else if ($(this).val() == "bold"){
                if ($(this).is(':checked')){
                    $("#styledText").css("font-weight", "bold");
                }
                else {
                    $("#styledText").css("font-weight", "normal");
                }
            }
            else if ($(this).val() == "underline"){
                if ($(this).is(':checked')){
                    $("#styledText").css("text-decoration", "underline");
                }
                else {
                    $("#styledText").css("text-decoration", "none");
                }
            }
        });

        // change text style with change() option 2 and shorter
        $('#textStyle-0, #textStyle-1, #textStyle-2').click(function () {
            let checked = $(this).is(':checked');
            let value = $(this).attr('value');
            if(checked) {
                $('#styledText').addClass(value);
            } else {
                $('#styledText').removeClass(value);
            }
        });
        // add a css class/id with addClass() : $('#styledText').addClass(value);
        // remove a css class/id with removeClass() : $('#styledText').removeClass(value);

        // get the word value typed in the input field in the moment // (search box)
        $("#styledText").keyup(function(){
            let tvalue = $(this).val();
            console.log(tvalue);
        }).keyup();

        // get input field value on enter key press
        $("#styledText").keypress(function(e){
            if (e.which == 13){
                let text = $("#styledText").val();
                console.log(text);
                e.preventDefault(); // on enter don't go up or next
                // redirect to another page using simple JS
                // window.location.replace("https://stackoverflow.com");
                // redirect to another page using jQuery
                // $(location).prop('href', 'https://stackoverflow.com')
            }
        });

        // Convert a jQuery object into a string
        let element = $('<h1>',{
            text : "Convert a jQuery object into a string.",
            class : "test"
        });        
        // $('#output').text( element.get(0).outerHTML);
        $('#output').html( element.get(0).outerHTML);

        // append to a empty select html tag values
        let myOptions = {
            val1: 'Blue',
            val2: 'Red',
            val3: 'Yellow',
            val4: 'Purple',
            val5: 'Black',
        }
        let mySelect = $("#some-color-option");
        $.each(myOptions, function(val, text){
            mySelect.append($("<option></option>").val(val).html(text));
        });
        // change color as the given option
        if ($("#some-color-option").val() == "val1"){
            $("#some-color-option").css("color", "blue");
        }
        $("#some-color-option").click(function(){
            if ($("#some-color-option").val() == "val1"){
                $("#some-color-option").css("color", "blue");
            }
            else if ($("#some-color-option").val() == "val2"){
                $("#some-color-option").css("color", "red");
            }
            else if ($("#some-color-option").val() == "val3"){
                $("#some-color-option").css("color", "yellow");
            }
            else if ($("#some-color-option").val() == "val4"){
                $("#some-color-option").css("color", "purple");
            }
            else if ($("#some-color-option").val() == "val5"){
                $("#some-color-option").css("color", "black");
            }
        });

        // Count child elements
        const count = $("#some-color-option option").length;
        console.log(count);

        // only number input feild logic
        $('.numbers').keyup(function () { 
            this.value = this.value.replace(/[^0-9\.]/g,'');
        });

        // Set a value in a span
        $("#spanid").html(" Exercises Solution");

        // change html text and url with attribute name
        $("#a-1").html("w3resource");
        $("#a-1").attr("href", "https://www.w3resource.com/");

        // Find the total width of an element (including width, padding, and border)
        $("<p id='myText'>jQuery Exercises, Practice, Solution</p>").appendTo("#output");
        console.log("Width + padding + borders : " + $("#myText").outerWidth());

    });
}) (jQuery);
