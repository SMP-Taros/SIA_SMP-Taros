function FormatDate(dateString){
    const dateObject = new Date(dateString);

// Format the date as a string in the desired format
    return dateObject.toLocaleString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
}