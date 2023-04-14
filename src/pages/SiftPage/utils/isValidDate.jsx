export default function isValidDate(dateString) {
    // Split the input string into day, month, and year parts using the '/' separator
    try {
        const [day, month, year] = dateString.split('/');

        // Check if the day, month, and year parts are valid numbers
        if (isNaN(parseInt(day)) || isNaN(parseInt(month)) || isNaN(parseInt(year))) {
            return false;
        }

        // Check if the year is 1900 or later
        if (parseInt(year) < 1900) {
            return false;
        }

        // Use the Date constructor to create a new Date object from the day, month, and year parts
        const date = new Date(year, month - 1, day);

        // Check if the date is valid
        if (isNaN(date.getTime())) {
            return false;
        }

        // If all checks pass, the date is valid
        return true;
    } catch {
        return false;
    }
}
