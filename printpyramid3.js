// Write a javascript code to print numbers in Pyramid.

    function generatePyramid() {
    var totalNumberofRows = 20;
    var output = '';
    for (var i = 0; i <= totalNumberofRows; i++) {
    for (var j = 0; j <= i; j++) {
    output += j + '  ';
    }
        console.log(output);
    output = '';
    }
    } 

    generatePyramid();