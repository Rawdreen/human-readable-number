var ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];
var tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];
var teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];

module.exports = function toReadable(number) {
    let number_string = number.toString().split("");
    let number_string_length = number_string.length;
    let output_number = [];
    let number_int = 0;

    if (number_string_length > 0) {
        number_int = parseInt(number_string[number_string_length - 1]);
        output_number.unshift(ones[number_int]);
        if (number_string_length > 1) {
            number_int = parseInt(number_string[number_string_length - 2]);
            if (number_int > 1) {
                output_number.unshift(tens[number_int]);
            } else if (number_int < 2 && number_int > 0) {
                output_number.pop();
                number_int = parseInt(number_string[number_string_length - 1]);
                output_number.unshift(teens[number_int]);
            }

            if (number_string_length > 2) {
                number_int = parseInt(number_string[number_string_length - 3]);
                output_number.unshift(ones[number_int] + " hundred");
            }
        }
    }

    output_number = output_number.join(" ").toString();
    if (output_number.substring(output_number.length - 1) == " ") {
        output_number = output_number.slice(0, -1);

        return output_number;
    } else {
        if (output_number == "") {
            output_number = "zero";
        }
        return output_number;
    }
};
